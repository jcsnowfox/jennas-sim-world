import { cp, mkdir, rm } from 'node:fs/promises';
const copies = [
  ['dist-ts/apps/desktop-shell/src/main', 'apps/desktop-shell/dist/main'],
  ['dist-ts/apps/desktop-shell/src/preload', 'apps/desktop-shell/dist/preload'],
  ['dist-ts/apps/desktop-shell/src/renderer', 'apps/desktop-shell/dist/renderer'],
  ['dist-ts/packages/local-api/src', 'packages/local-api/dist'],
  ['dist-ts/packages/worker/src', 'packages/worker/dist'],
  ['dist-ts/packages/shared-contracts/src', 'packages/shared-contracts/dist'],
];
for (const [from, to] of copies) {
  await rm(to, { recursive: true, force: true });
  await mkdir(to, { recursive: true });
  await cp(from, to, { recursive: true });
}
await cp(
  'apps/desktop-shell/src/renderer/index.html',
  'apps/desktop-shell/dist/renderer/index.html',
);
await cp('apps/desktop-shell/src/renderer/style.css', 'apps/desktop-shell/dist/renderer/style.css');
