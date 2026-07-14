import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { fail, ok, requiredDocs } from './common.mjs';

export function extractCanonicalProgressSections(productBibleText) {
  const start = productBibleText.indexOf('# 34. The 100% Progress Ladder');
  const end = productBibleText.indexOf('# 36. Codex Operating Contract');
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('PRODUCT_BIBLE.md does not contain canonical sections 34 and 35');
  }
  return productBibleText.slice(start, end).trimEnd();
}

export function parseProgressRows(text) {
  return [...text.matchAll(/^\| (\d+)\. [^|]+ \| (\d+)% \| (\d+)% \| .+ \|$/gm)].map((match) => ({
    phase: Number(match[1]),
    weight: Number(match[2]),
    cumulative: Number(match[3]),
  }));
}

export function validateProgressDocument(productBibleText, progressText) {
  const canonical = extractCanonicalProgressSections(productBibleText);
  if (!progressText.includes(canonical)) {
    throw new Error(
      'docs/PROGRESS.md must contain PRODUCT_BIBLE.md sections 34 and 35 byte-for-byte',
    );
  }

  const rows = parseProgressRows(progressText);
  if (rows.length !== 15) throw new Error(`expected 15 phases, found ${rows.length}`);
  const expectedWeights = [3, 4, 7, 8, 8, 11, 9, 8, 8, 5, 10, 7, 6, 3, 3];
  const expectedCumulative = [3, 7, 14, 22, 30, 41, 50, 58, 66, 71, 81, 88, 94, 97, 100];
  for (let index = 0; index < 15; index += 1) {
    if (rows[index].phase !== index) throw new Error(`phase ${index} row missing or out of order`);
    if (rows[index].weight !== expectedWeights[index])
      throw new Error(`phase ${index} weight changed`);
    if (rows[index].cumulative !== expectedCumulative[index]) {
      throw new Error(`phase ${index} cumulative percentage changed`);
    }
  }
  const total = rows.reduce((sum, row) => sum + row.weight, 0);
  if (total !== 100) throw new Error(`phase weights total ${total}, expected 100`);

  for (let phase = 0; phase <= 14; phase += 1) {
    if (!progressText.includes(`## Phase ${phase}:`))
      throw new Error(`Phase ${phase} gate heading missing`);
  }
  for (const required of ['**Required output:**', '**Gate tests:**', '**Gate:**']) {
    if (!progressText.includes(required)) throw new Error(`phase gate line missing: ${required}`);
  }
}

function main() {
  for (const doc of requiredDocs) {
    if (!readFileSync(doc, 'utf8')) fail(`missing or empty required doc ${doc}`);
    else ok(`found ${doc}`);
  }

  const productBible = readFileSync('PRODUCT_BIBLE.md', 'utf8');
  const progress = readFileSync('docs/PROGRESS.md', 'utf8');
  try {
    validateProgressDocument(productBible, progress);
    ok('canonical progress sections and phase gates validated');
  } catch (error) {
    fail(error instanceof Error ? error.message : String(error));
  }

  for (const doc of requiredDocs) {
    const text = readFileSync(doc, 'utf8');
    for (const match of text.matchAll(/`([^`]+\.md)`/g)) {
      const target = match[1];
      if (!target.includes('PRODUCT_BIBLE.md') && !readFileSync(doc, 'utf8').includes(target))
        continue;
    }
  }

  if (!process.exitCode) ok('docs validation passed');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) main();
