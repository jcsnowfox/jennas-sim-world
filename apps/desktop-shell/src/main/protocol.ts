import path from 'node:path';
export type ProtocolResolution =
  | { ok: true; filePath: string }
  | { ok: false; statusCode: 403 | 404; reason: string };
export const rendererRoot = () =>
  path.resolve(process.resourcesPath ?? process.cwd(), 'apps/desktop-shell/dist/renderer');
export function resolveNightwaterProtocolUrl(
  rawUrl: string,
  assetRoot = rendererRoot(),
): ProtocolResolution {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return { ok: false, statusCode: 403, reason: 'Malformed URL' };
  }
  if (url.protocol !== 'nightwater:' || url.hostname !== 'app')
    return { ok: false, statusCode: 403, reason: 'Unknown protocol host' };
  let decoded: string;
  try {
    decoded = decodeURIComponent(url.pathname);
  } catch {
    return { ok: false, statusCode: 403, reason: 'Malformed encoding' };
  }
  if (
    decoded.includes('\0') ||
    decoded.includes('..') ||
    path.isAbsolute(decoded.slice(1)) ||
    decoded.includes('\\')
  )
    return { ok: false, statusCode: 403, reason: 'Forbidden path' };
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const filePath = path.resolve(assetRoot, relative);
  if (
    !filePath.startsWith(path.resolve(assetRoot) + path.sep) &&
    filePath !== path.resolve(assetRoot)
  )
    return { ok: false, statusCode: 403, reason: 'Traversal blocked' };
  return { ok: true, filePath };
}
