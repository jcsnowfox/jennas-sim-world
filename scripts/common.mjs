import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export const expectedBibleHash = '62003482b5c47bd465473b33da81f04dec9eb723a4e9d7b2eaac7202bd6701cc';
export const requiredDocs = [
  'docs/ARCHITECTURE_DECISIONS.md',
  'docs/PROGRESS.md',
  'docs/DEFECTS.md',
  'docs/SECURITY_MODEL.md',
  'docs/PRIVACY_BOUNDARIES.md',
  'docs/TEST_STRATEGY.md',
  'docs/REPOSITORY_MAP.md',
];
export const boundaries = [
  'apps/desktop-shell',
  'apps/game-client',
  'packages/local-api',
  'packages/simulation-core',
  'packages/worker',
  'packages/shared-contracts',
  'packages/persistence',
  'adapters/standalone-companion',
  'adapters/ghostlight',
  'adapters/cinema-engine',
  'adapters/voice',
  'packages/portable-vault',
  'packages/synchronisation-engine',
];

export function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

export function fail(msg) {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
}

export function ok(msg) {
  console.log(`OK: ${msg}`);
}

export function files(dir = '.') {
  const out = [];
  const skipDirs = new Set(['.git', 'node_modules']);
  const skipFiles = [/^nightwater-phase0\./, /^package-lock\.json$/];

  function walk(current) {
    for (const name of readdirSync(current)) {
      if (skipDirs.has(name)) continue;
      const path = join(current, name);
      const rel = relative('.', path).replaceAll('\\\\', '/');
      if (skipFiles.some((pattern) => pattern.test(rel))) continue;
      const stat = statSync(path);
      if (stat.isDirectory()) walk(path);
      else out.push(rel);
    }
  }

  walk(dir);
  return out.sort();
}

export function readText(path) {
  return readFileSync(path, 'utf8');
}

export function assertContains(haystack, needle, label) {
  if (!haystack.includes(needle)) fail(`missing ${label}`);
}

export function exists(path) {
  return existsSync(path);
}
