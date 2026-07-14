import { fork } from 'node:child_process';
import http from 'node:http';
import { describe, expect, it } from 'vitest';
const get = (port: number, token?: string) =>
  new Promise<{ code?: number; body: string }>((resolve) => {
    const req = http.request(
      {
        host: '127.0.0.1',
        port,
        path: '/health',
        headers: token ? { authorization: `Bearer ${token}` } : {},
        timeout: 1000,
      },
      (res) => {
        let body = '';
        res.on('data', (d) => (body += d));
        res.on('end', () => resolve({ code: res.statusCode, body }));
      },
    );
    req.on('error', () => resolve({ body: '' }));
    req.end();
  });
describe('local api and worker real processes', () => {
  it('authenticates health and shuts down', async () => {
    const token = 'phase1-test-token';
    const child = fork('packages/local-api/dist/server.js', [], {
      env: { ...process.env, NIGHTWATER_LOCAL_API_TOKEN: token },
      stdio: ['ignore', 'ignore', 'ignore', 'ipc'],
    });
    const port: number = await new Promise((r) =>
      child.on('message', (m: any) => m.type === 'ready' && r(m.port)),
    );
    expect(port).not.toBe(0);
    expect((await get(port)).code).toBe(401);
    expect((await get(port, 'wrong')).code).toBe(401);
    const ok = await get(port, token);
    expect(ok.code).toBe(200);
    expect(JSON.parse(ok.body).status).toBe('ready');
    child.send({ type: 'shutdown' });
    await new Promise((r) => child.on('exit', r));
  });
  it('emits worker heartbeat and detects controlled crash', async () => {
    const child = fork('packages/worker/dist/worker.js', [], {
      env: { ...process.env, NIGHTWATER_TEST_WORKER_CRASH: '1' },
      stdio: ['ignore', 'ignore', 'ignore', 'ipc'],
    });
    let beats = 0;
    await new Promise<void>((r) =>
      child.on('message', (m: any) => {
        if (m.type === 'heartbeat' && ++beats >= 2) r();
      }),
    );
    child.send({ type: 'test-crash' });
    const code = await new Promise((r) => child.on('exit', r));
    expect(code).toBe(42);
  });
});
