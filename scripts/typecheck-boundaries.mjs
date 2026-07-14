import { existsSync, readFileSync } from 'node:fs';
import { boundaries, fail, ok } from './common.mjs';
for(const b of boundaries){
 const r=`${b}/README.md`;
 if(!existsSync(r)) { fail(`Missing boundary README: ${r}`); continue; }
 const t=readFileSync(r,'utf8');
 for(const label of ['Purpose:', 'Responsibilities:', 'Permitted dependencies:', 'Forbidden dependencies:', 'Implementation phase:', 'Current status:']) if(!t.includes(label)) fail(`${r} missing ${label}`);
}
if(!process.exitCode) ok('boundary contracts typecheck passed');
