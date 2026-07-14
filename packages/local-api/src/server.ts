import http from 'node:http';
import { createStoppedHealth, type ServiceHealth } from '../../shared-contracts/src/index.js';
const token = process.env.NIGHTWATER_LOCAL_API_TOKEN;
if (!token) throw new Error('Missing local API token');
const version = process.env.npm_package_version ?? '0.1.0-phase-1';
let server: http.Server;
const health = (): ServiceHealth => ({
  name: 'localApi',
  status: 'ready',
  version,
  pid: process.pid,
  uptimeMs: Math.round(process.uptime() * 1000),
  timestamp: new Date().toISOString(),
  detail: 'Authenticated loopback health endpoint',
});
server = http.createServer((req, res) => {
  if (req.url !== '/health') {
    res.writeHead(404).end();
    return;
  }
  if (req.headers.authorization !== `Bearer ${token}`) {
    res
      .writeHead(401, { 'content-type': 'application/json' })
      .end(JSON.stringify({ error: 'unauthorized' }));
    return;
  }
  res
    .writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
    .end(JSON.stringify(health()));
});
server.listen(0, '127.0.0.1', () => {
  const address = server.address();
  if (typeof address === 'object' && address)
    process.send?.({ type: 'ready', host: '127.0.0.1', port: address.port, pid: process.pid });
});
const shutdown = () =>
  server.close(() => {
    process.send?.({
      type: 'stopped',
      health: createStoppedHealth('localApi', version, 'Graceful shutdown'),
    });
    process.exit(0);
  });
process.on('message', (msg) => {
  if (msg && typeof msg === 'object' && 'type' in msg && msg.type === 'shutdown') shutdown();
});
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
