import { readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { boundaries, expectedBibleHash, fail, files, ok, requiredDocs, sha256 } from './common.mjs';

export const localPathPatterns = [
  /\/work(?=space\/)/,
  /\/home\/[A-Za-z0-9_.-]+/,
  /\/Users\/[A-Za-z0-9_.-]+/,
  /C:\\Users\\[A-Za-z0-9_.-]+/,
  /\/tmp\/[A-Za-z0-9_.-]+/,
  /codex-[A-Za-z0-9_.-]*mount/i,
];

export const openSourceLicensePattern =
  /MIT License|Apache License|GNU GENERAL PUBLIC LICENSE|GNU AFFERO GENERAL PUBLIC LICENSE|GNU LESSER GENERAL PUBLIC LICENSE|BSD License|Mozilla Public License/i;
export const privateKeyPattern = /-----BEGIN (RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/;
export const secretPattern =
  /((api[_-]?key|token|password|secret)\s*[:=]\s*)(?!replace|change-me|placeholder|example|local-secret-outside-git)[A-Za-z0-9_\-]{12,}/i;

export function containsForbiddenLocalPath(text) {
  return localPathPatterns.some((pattern) => pattern.test(text));
}

export function validateLicenseText(licenseText, packageJsonText) {
  const pkg = JSON.parse(packageJsonText);
  if (!licenseText.includes('Sirenware Studios'))
    throw new Error('licence must name Sirenware Studios');
  if (!/All Rights Reserved/i.test(licenseText)) throw new Error('licence must reserve all rights');
  if (openSourceLicensePattern.test(licenseText))
    throw new Error('open-source licence text is forbidden');
  if (pkg.private !== true) throw new Error('package.json private must be true');
  if (pkg.license !== 'UNLICENSED') throw new Error('package.json license must be UNLICENSED');
}

export function validateToolVersions(pkg) {
  for (const [name, version] of Object.entries(pkg.nightwaterToolchain ?? {})) {
    if (/latest|\*|\^|~/i.test(String(version)))
      throw new Error(`unbounded toolchain version for ${name}`);
  }
  for (const [name, version] of Object.entries(pkg.devDependencies ?? {})) {
    if (/latest|\*|\^|~/i.test(String(version)))
      throw new Error(`unbounded devDependency version for ${name}`);
  }
  for (const required of ['typescript', 'prettier', 'eslint', '@types/node']) {
    if (!pkg.devDependencies?.[required]) throw new Error(`missing devDependency ${required}`);
  }
}

export function validateLockfile(packageLockText) {
  const lock = JSON.parse(packageLockText);
  const rootDevDependencies = lock.packages?.['']?.devDependencies ?? {};
  for (const required of ['typescript', 'prettier', 'eslint', '@types/node']) {
    if (!rootDevDependencies[required])
      throw new Error(`lockfile missing devDependency ${required}`);
  }
}

function main() {
  for (const path of [
    '.editorconfig',
    '.gitignore',
    '.env.example',
    'LICENSE',
    'package.json',
    'package-lock.json',
    'tsconfig.base.json',
    'tsconfig.scripts.json',
    'eslint.config.js',
    '.prettierrc.json',
    '.prettierignore',
    ...requiredDocs,
  ]) {
    try {
      statSync(path);
    } catch {
      fail(`required file missing: ${path}`);
    }
  }

  for (const boundary of boundaries) {
    try {
      statSync(`${boundary}/README.md`);
    } catch {
      fail(`boundary missing: ${boundary}/README.md`);
    }
  }

  if (sha256('PRODUCT_BIBLE.md') !== expectedBibleHash) fail('product bible hash changed');

  try {
    validateLicenseText(readFileSync('LICENSE', 'utf8'), readFileSync('package.json', 'utf8'));
    ok('proprietary licence resolved to Sirenware Studios');
  } catch (error) {
    fail(error instanceof Error ? error.message : String(error));
  }

  try {
    validateToolVersions(JSON.parse(readFileSync('package.json', 'utf8')));
    validateLockfile(readFileSync('package-lock.json', 'utf8'));
    ok('tool versions are pinned and active devDependencies are declared in package and lockfile');
  } catch (error) {
    fail(error instanceof Error ? error.message : String(error));
  }

  for (const file of files()) {
    const bytes = readFileSync(file);
    if (bytes.includes(0)) fail(`binary-like file detected: ${file}`);
    if (bytes.length > 1024 * 1024)
      fail(`large committed file may be inappropriate binary: ${file}`);
    const text = bytes.toString('utf8');
    if (privateKeyPattern.test(text)) fail(`private key pattern in ${file}`);
    if (secretPattern.test(text)) fail(`obvious secret-like assignment in ${file}`);
    if (containsForbiddenLocalPath(text)) fail(`forbidden local absolute path in ${file}`);
  }

  const bibleText = readFileSync('PRODUCT_BIBLE.md', 'utf8');
  if (containsForbiddenLocalPath(bibleText))
    fail('PRODUCT_BIBLE.md contains a local absolute path');
  else ok('PRODUCT_BIBLE.md local-path scan clean');

  const tracked = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean);
  if (tracked.includes('node_modules')) fail('node_modules tracked');

  if (!process.exitCode) ok('phase 0 validation passed');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
