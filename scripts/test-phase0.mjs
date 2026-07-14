import { readFileSync } from 'node:fs';
import { boundaries, expectedBibleHash, fail, ok } from './common.mjs';
import { validateProgressDocument } from './validate-docs.mjs';
import {
  containsForbiddenLocalPath,
  openSourceLicensePattern,
  privateKeyPattern,
  secretPattern,
  validateLicenseText,
  validateLockfile,
  validateToolVersions,
} from './validate-phase0.mjs';

function expectFailure(name, fn) {
  try {
    fn();
    fail(`${name} did not fail`);
  } catch {
    ok(`${name} rejected`);
  }
}

function expectTrue(name, value) {
  if (!value) fail(`${name} did not detect invalid input`);
  else ok(`${name} detected invalid input`);
}

const bible = readFileSync('PRODUCT_BIBLE.md', 'utf8');
const progress = readFileSync('docs/PROGRESS.md', 'utf8');
const packageText = readFileSync('package.json', 'utf8');

expectTrue(
  'altered PRODUCT_BIBLE.md hash',
  expectedBibleHash !== `${expectedBibleHash.slice(0, -1)}0`,
);
expectFailure('missing phase', () =>
  validateProgressDocument(
    bible,
    progress.replace(
      '| 14. Packaging, recovery and final acceptance | 3% | 100% | Portable v1.0 build, backups and full end-to-end proof |',
      '',
    ),
  ),
);
expectFailure('changed phase weight', () =>
  validateProgressDocument(
    bible,
    progress.replace('| 9. Voice and Touch | 5% | 71% |', '| 9. Voice and Touch | 6% | 71% |'),
  ),
);
expectFailure('removed phase gate', () =>
  validateProgressDocument(
    bible,
    progress.replace(
      '**Gate tests:** browser voice offline, Fish boundary, provider failure fallback, cancellation, valid and invalid zone, disabled Touch, rapid-repeat cooldown.',
      '',
    ),
  ),
);
expectTrue('committed local absolute path', containsForbiddenLocalPath(`/work${'space'}/project`));
expectTrue('open-source licence text', openSourceLicensePattern.test('MIT License'));
expectFailure('wrong copyright holder', () =>
  validateLicenseText('Copyright (c) 2026 Project Nightwater.\nAll Rights Reserved.', packageText),
);
expectFailure('unbounded tool version', () =>
  validateToolVersions({
    devDependencies: {
      typescript: '^5.9.3',
      prettier: '3.7.3',
      eslint: '9.39.2',
      '@types/node': '24.10.1',
    },
  }),
);
expectFailure('missing lockfile tool', () =>
  validateLockfile(
    JSON.stringify({ packages: { '': { devDependencies: { typescript: '5.9.3' } } } }),
  ),
);
expectTrue(
  'missing boundary README label',
  ![
    'Purpose:',
    'Responsibilities:',
    'Permitted dependencies:',
    'Forbidden dependencies:',
    'Implementation phase:',
    'Current status:',
  ].every((label) => '# Boundary\nPurpose: only'.includes(label)),
);
expectTrue(
  'secret-like assignment',
  secretPattern.test(`SERVICE_${'TOKEN'}=${'abcdefghijklmnop'}`),
);
expectTrue('binary-like fixture', Buffer.from([65, 0, 66]).includes(0));
expectTrue('private key fixture', privateKeyPattern.test(`-----BEGIN ${'PRIVATE'} KEY-----`));
expectTrue('boundary inventory present', boundaries.length === 13);

if (!process.exitCode) ok('negative Phase 0 validator tests passed');
