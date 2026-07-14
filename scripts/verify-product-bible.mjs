import { statSync, readFileSync } from 'node:fs';
import { expectedBibleHash, sha256, fail, ok } from './common.mjs';
const path='PRODUCT_BIBLE.md';
const text=readFileSync(path,'utf8');
const hash=sha256(path);
if(hash!==expectedBibleHash) fail(`PRODUCT_BIBLE.md hash ${hash} did not match expected ${expectedBibleHash}`); else ok(`PRODUCT_BIBLE.md hash unchanged: ${hash}`);
if(!text.includes('The 100% Progress Ladder')) fail('Missing progress ladder section'); else ok('Progress ladder section present');
ok(`Byte count ${statSync(path).size}; line count ${text.split(/\n/).length-1}`);
