import { readFileSync } from 'node:fs';
import { files, fail, ok } from './common.mjs';
for (const f of files().filter(f=>/\.(md|json|mjs|example|gitignore|editorconfig)$/.test(f)||['LICENSE'].includes(f))) {
 const b=readFileSync(f);
 if(!b.toString('utf8').endsWith('\n')) fail(`${f} must end with newline`);
 if(b.includes(Buffer.from('\r'))) fail(`${f} contains CRLF`);
}
if(!process.exitCode) ok('format baseline passed');
