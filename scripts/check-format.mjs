import { readFileSync } from 'node:fs';
import { fail, files, ok } from './common.mjs';

for (const file of files().filter(
  (name) => /\.(md|json|mjs|js|example|gitignore|editorconfig)$/.test(name) || name === 'LICENSE',
)) {
  const bytes = readFileSync(file);
  if (!bytes.toString('utf8').endsWith('\n')) fail(`${file} must end with newline`);
  if (bytes.includes(Buffer.from('\r'))) fail(`${file} contains CRLF`);
}

if (!process.exitCode) ok('format baseline passed');
