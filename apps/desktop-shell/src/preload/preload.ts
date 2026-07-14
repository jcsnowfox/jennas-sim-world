import { contextBridge, ipcRenderer } from 'electron';
import {
  ipcChannels,
  type NightwaterPreloadApi,
  type SystemHealthSnapshot,
} from '../../../../packages/shared-contracts/src/index.js';
const api: NightwaterPreloadApi = {
  getMetadata: () => ipcRenderer.invoke(ipcChannels.metadata),
  getHealth: () => ipcRenderer.invoke(ipcChannels.healthGet),
  refreshHealth: () => ipcRenderer.invoke(ipcChannels.healthRefresh),
  onHealthChanged: (listener: (snapshot: SystemHealthSnapshot) => void) => {
    const wrapped = (_: Electron.IpcRendererEvent, snapshot: SystemHealthSnapshot) =>
      listener(snapshot);
    ipcRenderer.on(ipcChannels.healthChanged, wrapped);
    return () => ipcRenderer.removeListener(ipcChannels.healthChanged, wrapped);
  },
};
contextBridge.exposeInMainWorld('nightwater', api);
