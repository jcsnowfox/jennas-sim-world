import { describe, expect, it } from 'vitest';
import { ProcessSupervisor } from '../../apps/desktop-shell/src/main/supervisor.js';
describe('process supervisor', () => {
  it('starts, reports ready, refreshes, and shuts down idempotently', async () => {
    const s = new ProcessSupervisor(process.cwd());
    const snap = await s.start(5000);
    expect(snap.status).toBe('ready');
    const refreshed = await s.refreshHealth();
    expect(refreshed.services.localApi.pid).toBeTypeOf('number');
    await s.shutdown();
    await s.shutdown();
    expect(s.snapshot().status).toBe('stopped');
  }, 10000);
});
