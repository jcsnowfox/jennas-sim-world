module.exports = {
  appId: 'studio.sirenware.somewhereours.privatecity',
  productName: 'Somewhere Ours Private City',
  directories: { output: 'release' },
  files: [
    'package.json',
    'apps/desktop-shell/dist/**/*',
    'packages/local-api/dist/**/*',
    'packages/worker/dist/**/*',
    'packages/shared-contracts/dist/**/*',
  ],
  asar: false,
  win: { target: [{ target: 'dir' }] },
  linux: { target: [{ target: 'dir' }] },
};
