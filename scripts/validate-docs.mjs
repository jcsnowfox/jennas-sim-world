import { existsSync, readFileSync } from 'node:fs';
import { requiredDocs, fail, ok } from './common.mjs';
for(const d of requiredDocs) if(!existsSync(d)) fail(`missing required doc ${d}`); else ok(`found ${d}`);
const progress=readFileSync('docs/PROGRESS.md','utf8');
const weights=[...progress.matchAll(/\| \d+\. [^|]+ \| (\d+)% \| (\d+)% \|/g)].map(m=>Number(m[1]));
if(weights.length!==15) fail(`expected 15 phases, found ${weights.length}`);
const total=weights.reduce((a,b)=>a+b,0);
if(total!==100) fail(`phase weights total ${total}, expected 100`); else ok('phase weights total exactly 100%');
if(!progress.includes('0. Charter and repository baseline | 3% | 3%')) fail('Phase 0 exact weight missing');
for(const d of requiredDocs){
 const text=readFileSync(d,'utf8');
 for(const m of text.matchAll(/`([^`]+\.md)`/g)){
  const target=m[1];
  if(!existsSync(target) && !existsSync(`docs/${target}`)) fail(`${d} references missing markdown file ${target}`);
 }
}
if(!process.exitCode) ok('docs validation passed');
