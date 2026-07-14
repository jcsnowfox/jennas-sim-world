import { describe, expect, it } from 'vitest';
import { resolveNightwaterProtocolUrl } from '../../apps/desktop-shell/src/main/protocol.js';
describe('nightwater protocol resolver', () => {
  it('resolves valid app asset', () => {
    const r = resolveNightwaterProtocolUrl('nightwater://app/index.html', process.cwd());
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.filePath).toContain('index.html');
  });
  it('rejects traversal and encoded traversal', () => {
    expect(resolveNightwaterProtocolUrl('nightwater://app/../x', process.cwd()).ok).toBe(false);
    expect(resolveNightwaterProtocolUrl('nightwater://app/%2e%2e/x', process.cwd()).ok).toBe(false);
  });
  it('rejects unknown host', () => {
    expect(resolveNightwaterProtocolUrl('nightwater://evil/index.html', process.cwd()).ok).toBe(
      false,
    );
  });
});
