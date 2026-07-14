import fs from 'node:fs';
import { app, BrowserWindow, ipcMain, protocol } from 'electron';
import { ipcChannels, type AppMetadata } from '../../../../packages/shared-contracts/src/index.js';
import { resolveNightwaterProtocolUrl } from './protocol.js';
import { ProcessSupervisor } from './supervisor.js';
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'nightwater',
    privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: false },
  },
]);
let win: BrowserWindow | undefined;
let supervisor: ProcessSupervisor;
let quitting = false;
const metadata: AppMetadata = {
  name: 'Somewhere Ours: Private City',
  version: app.getVersion(),
  phase: 'Phase 1',
};
function createWindow() {
  win = new BrowserWindow({
    width: 1040,
    height: 720,
    show: !process.argv.includes('--smoke-test'),
    title: metadata.name,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
      preload: new URL('../preload/preload.js', import.meta.url).pathname,
    },
  });
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (e, u) => {
    if (!u.startsWith('nightwater://app/')) e.preventDefault();
  });
  void win.loadURL('nightwater://app/');
}
function registerProtocol() {
  protocol.handle('nightwater', async (request) => {
    const r = resolveNightwaterProtocolUrl(request.url);
    if (!r.ok) return new Response(r.reason, { status: r.statusCode });
    if (!fs.existsSync(r.filePath)) return new Response('Not found', { status: 404 });
    return new Response(fs.createReadStream(r.filePath) as any, {
      headers: {
        'content-security-policy':
          "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'",
      },
    });
  });
}
async function shutdown(code = 0) {
  if (quitting) return;
  quitting = true;
  await supervisor?.shutdown();
  if (process.argv.includes('--smoke-test')) app.exit(code);
}
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) app.quit();
app.on('second-instance', () => {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});
app.whenReady().then(async () => {
  registerProtocol();
  supervisor = new ProcessSupervisor(process.cwd(), (s) =>
    win?.webContents.send(ipcChannels.healthChanged, s),
  );
  ipcMain.handle(ipcChannels.metadata, () => metadata);
  ipcMain.handle(ipcChannels.healthGet, () => supervisor.snapshot());
  ipcMain.handle(ipcChannels.healthRefresh, () => supervisor.refreshHealth());
  createWindow();
  const state = await supervisor.start();
  if (process.argv.includes('--smoke-test'))
    setTimeout(() => void shutdown(state.status === 'ready' ? 0 : 1), 500);
});
app.on('before-quit', () => void shutdown());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
process.on('uncaughtException', () => void shutdown(1));
process.on('unhandledRejection', () => void shutdown(1));
process.on('SIGINT', () => void shutdown(0));
process.on('SIGTERM', () => void shutdown(0));
