import type {
  NightwaterPreloadApi,
  SystemHealthSnapshot,
} from '../../../../packages/shared-contracts/src/index.js';
declare global {
  interface Window {
    nightwater: NightwaterPreloadApi;
  }
}
const text = (id: string, value: string) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};
const render = (s: SystemHealthSnapshot) => {
  text('system', s.status);
  text('api', s.services.localApi.status);
  text('api-detail', s.services.localApi.detail ?? '');
  text('worker', s.services.worker.status);
  text('worker-detail', s.services.worker.detail ?? '');
};
window.nightwater.getMetadata().then((m) => text('meta', `${m.phase} · version ${m.version}`));
window.nightwater.getHealth().then(render);
window.nightwater.onHealthChanged(render);
document
  .getElementById('retry')
  ?.addEventListener('click', () => window.nightwater.refreshHealth().then(render));
