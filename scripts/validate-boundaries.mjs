import { readFileSync } from 'node:fs';
import { boundaries, exists, fail, ok } from './common.mjs';

for (const boundary of boundaries) {
  const readme = `${boundary}/README.md`;
  if (!exists(readme)) {
    fail(`Missing boundary README: ${readme}`);
    continue;
  }
  const text = readFileSync(readme, 'utf8');
  for (const label of [
    'Purpose:',
    'Responsibilities:',
    'Permitted dependencies:',
    'Forbidden dependencies:',
    'Implementation phase:',
    'Current status:',
  ]) {
    if (!text.includes(label)) fail(`${readme} missing ${label}`);
  }
}

if (!process.exitCode) ok('boundary contracts validation passed');
