import { fork, type ChildProcess } from 'node:child_process';
import crypto from 'node:crypto';
import http from 'node:http';
import path from 'node:path';
import {
  createStoppedHealth,
  summarizeSystemStatus,
  type ServiceHealth,
  type SystemHealthSnapshot,
} from '../../../../packages/shared-contracts/src/index.js';
type Proc = { child?: ChildProcess; restarts: number; health: ServiceHealth; port?: number };
export class ProcessSupervisor {
  private token = crypto.randomBytes(32).toString('base64url');
  private started = false;
  private shuttingDown = false;
  private services: Record<'localApi' | 'worker', Proc> = {
    localApi: { restarts: 0, health: createStoppedHealth('localApi', '0.1.0-phase-1') },
    worker: { restarts: 0, health: createStoppedHealth('worker', '0.1.0-phase-1') },
  };
  constructor(
    private root = process.cwd(),
    private onChange: (s: SystemHealthSnapshot) => void = () => {},
  ) {}
  async start(timeoutMs = 5000): Promise<SystemHealthSnapshot> {
    this.started = true;
    this.spawnApi();
    this.spawnWorker();
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const s = await this.refreshHealth();
      if (s.status === 'ready') return s;
      await new Promise((r) => setTimeout(r, 100));
    }
    this.mark('localApi', 'failed', 'Startup timeout');
    return this.snapshot();
  }
  private script(p: string) {
    return path.join(this.root, p);
  }
  private spawnApi() {
    this.mark('localApi', 'starting', 'Spawning local API');
    const child = fork(this.script('packages/local-api/dist/server.js'), [], {
      shell: false,
      stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
      env: { ...process.env, NIGHTWATER_LOCAL_API_TOKEN: this.token },
    });
    this.services.localApi.child = child;
    child.on('message', (m: any) => {
      if (m?.type === 'ready') {
        this.services.localApi.port = m.port;
        this.mark('localApi', 'ready', `Listening on 127.0.0.1:${m.port}`, m.pid);
      }
    });
    child.on('exit', (code) => this.exited('localApi', code));
  }
  private spawnWorker() {
    this.mark('worker', 'starting', 'Spawning worker');
    const child = fork(this.script('packages/worker/dist/worker.js'), [], {
      shell: false,
      stdio: ['ignore', 'pipe', 'pipe', 'ipc'],
      env: { ...process.env },
    });
    this.services.worker.child = child;
    child.on('message', (m: any) => {
      if (m?.type === 'ready') this.mark('worker', 'ready', 'Ready', m.pid);
      if (m?.type === 'heartbeat') {
        this.services.worker.health = m.health;
        this.emit();
      }
    });
    child.on('exit', (code) => this.exited('worker', code));
  }
  private exited(name: 'localApi' | 'worker', code: number | null) {
    if (this.shuttingDown) return;
    const p = this.services[name];
    p.health = {
      ...p.health,
      status: 'degraded',
      timestamp: new Date().toISOString(),
      detail: `Exited with ${code}`,
    };
    if (p.restarts++ < 1) name === 'localApi' ? this.spawnApi() : this.spawnWorker();
    else this.mark(name, 'failed', 'Restart limit reached');
  }
  private mark(
    name: 'localApi' | 'worker',
    status: ServiceHealth['status'],
    detail: string,
    pid?: number,
  ) {
    this.services[name].health = {
      name,
      status,
      version: '0.1.0-phase-1',
      pid,
      timestamp: new Date().toISOString(),
      detail,
    };
    this.emit();
  }
  async refreshHealth(): Promise<SystemHealthSnapshot> {
    const port = this.services.localApi.port;
    if (port)
      try {
        const h = await new Promise<ServiceHealth>((resolve, reject) => {
          const req = http.request(
            {
              host: '127.0.0.1',
              port,
              path: '/health',
              headers: { authorization: `Bearer ${this.token}` },
              timeout: 1000,
            },
            (res) => {
              let b = '';
              res.on('data', (d) => (b += d));
              res.on('end', () =>
                res.statusCode === 200
                  ? resolve(JSON.parse(b))
                  : reject(new Error(String(res.statusCode))),
              );
            },
          );
          req.on('error', reject);
          req.end();
        });
        this.services.localApi.health = h;
      } catch {
        this.mark('localApi', 'degraded', 'Health request failed');
      }
    return this.snapshot();
  }
  snapshot(): SystemHealthSnapshot {
    const services = {
      localApi: this.services.localApi.health,
      worker: this.services.worker.health,
    };
    return {
      status: summarizeSystemStatus(Object.values(services)),
      services,
      timestamp: new Date().toISOString(),
    };
  }
  private emit() {
    this.onChange(this.snapshot());
  }
  async shutdown(graceMs = 1500): Promise<void> {
    if (this.shuttingDown) return;
    this.shuttingDown = true;
    await Promise.all(
      Object.values(this.services).map(
        (p) =>
          new Promise<void>((resolve) => {
            if (!p.child || p.child.killed) return resolve();
            const t = setTimeout(() => {
              p.child?.kill('SIGKILL');
              resolve();
            }, graceMs);
            p.child.once('exit', () => {
              clearTimeout(t);
              resolve();
            });
            p.child.send?.({ type: 'shutdown' });
          }),
      ),
    );
    this.mark('localApi', 'stopped', 'Supervisor shutdown');
    this.mark('worker', 'stopped', 'Supervisor shutdown');
  }
  crashWorkerForTest() {
    this.services.worker.child?.send?.({ type: 'test-crash' });
  }
}
