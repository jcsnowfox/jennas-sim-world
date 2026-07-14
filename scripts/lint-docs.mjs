import { readFileSync } from 'node:fs';
import { fail, files, ok } from './common.mjs';

for (const file of files().filter((name) => name.endsWith('.md'))) {
  const text = readFileSync(file, 'utf8');
  if (!text.startsWith('# ')) fail(`${file} must start with a level-1 heading`);
  if (/TODO|TBD|FIXME/.test(text)) fail(`${file} contains unresolved placeholder language`);
}

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
if (pkg.license !== 'UNLICENSED') fail('package.json license must be UNLICENSED');
else ok('package licence is proprietary UNLICENSED');

if (!process.exitCode) ok('documentation lint passed');
