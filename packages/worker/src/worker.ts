const version = process.env.npm_package_version ?? '0.1.0-phase-1';
let interval: NodeJS.Timeout | undefined;
const started = Date.now();
const heartbeat = () =>
  process.send?.({
    type: 'heartbeat',
    health: {
      name: 'worker',
      status: 'ready',
      version,
      pid: process.pid,
      uptimeMs: Date.now() - started,
      timestamp: new Date().toISOString(),
      lastHeartbeat: new Date().toISOString(),
      detail: 'Phase 1 IPC heartbeat',
    },
  });
process.send?.({
  type: 'ready',
  pid: process.pid,
  version,
  startedAt: new Date(started).toISOString(),
});
interval = setInterval(heartbeat, 250);
heartbeat();
process.on('message', (msg) => {
  if (!msg || typeof msg !== 'object' || !('type' in msg)) return;
  if (msg.type === 'shutdown') {
    if (interval) clearInterval(interval);
    process.send?.({ type: 'stopped' });
    process.exit(0);
  }
  if (msg.type === 'test-crash' && process.env.NIGHTWATER_TEST_WORKER_CRASH === '1')
    process.exit(42);
});
