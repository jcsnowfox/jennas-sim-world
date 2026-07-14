import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
describe('renderer security artifacts', () => {
  it('preload exposes only nightwater bridge and no raw ipc', () => {
    const src = fs.readFileSync('apps/desktop-shell/src/preload/preload.ts', 'utf8');
    expect(src).toContain("exposeInMainWorld('nightwater'");
    expect(src).not.toContain("exposeInMainWorld('ipcRenderer'");
  });
  it('renderer does not include token fixture', () => {
    const src = fs.readFileSync('apps/desktop-shell/src/renderer/renderer.ts', 'utf8');
    expect(src).not.toMatch(/TOKEN|SECRET|NIGHTWATER_LOCAL_API_TOKEN/);
  });
});
