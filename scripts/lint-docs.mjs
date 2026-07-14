import { readFileSync } from 'node:fs';
import { files, fail, ok } from './common.mjs';
for(const f of files().filter(f=>f.endsWith('.md'))){
 const t=readFileSync(f,'utf8');
 if(!t.startsWith('# ')) fail(`${f} must start with a level-1 heading`);
 if(/TODO|TBD|FIXME/.test(t)) fail(`${f} contains unresolved placeholder language`);
}
const pkg=JSON.parse(readFileSync('package.json','utf8'));
if(pkg.license!=='UNLICENSED') fail('package.json license must be UNLICENSED for proprietary software');
else ok('package licence is proprietary UNLICENSED');
if(!process.exitCode) ok('documentation lint passed');
