import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

export const expectedBibleHash = '62003482b5c47bd465473b33da81f04dec9eb723a4e9d7b2eaac7202bd6701cc';
export const requiredDocs = ['docs/ARCHITECTURE_DECISIONS.md','docs/PROGRESS.md','docs/DEFECTS.md','docs/SECURITY_MODEL.md','docs/PRIVACY_BOUNDARIES.md','docs/TEST_STRATEGY.md','docs/REPOSITORY_MAP.md'];
export const boundaries = ['apps/desktop-shell','apps/game-client','packages/local-api','packages/simulation-core','packages/worker','packages/shared-contracts','packages/persistence','adapters/standalone-companion','adapters/ghostlight','adapters/cinema-engine','adapters/voice','packages/portable-vault','packages/synchronisation-engine'];
export function sha256(path){return createHash('sha256').update(readFileSync(path)).digest('hex');}
export function fail(msg){console.error(`FAIL: ${msg}`); process.exitCode=1;}
export function ok(msg){console.log(`OK: ${msg}`);}
export function files(dir='.'){
 const out=[]; const skip=new Set(['.git','node_modules']);
 function walk(d){ for(const n of readdirSync(d)){ if(skip.has(n)) continue; const p=join(d,n); const s=statSync(p); if(s.isDirectory()) walk(p); else out.push(relative('.',p).replaceAll('\\\\','/')); }}
 walk(dir); return out.sort();
}
