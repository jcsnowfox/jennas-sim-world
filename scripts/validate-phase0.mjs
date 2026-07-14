import { existsSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { boundaries, requiredDocs, expectedBibleHash, sha256, files, fail, ok } from './common.mjs';
for(const p of ['.editorconfig','.gitignore','.env.example','LICENSE','package.json','package-lock.json',...requiredDocs]) if(!existsSync(p)) fail(`required file missing: ${p}`);
for(const b of boundaries) if(!existsSync(`${b}/README.md`)) fail(`boundary missing: ${b}/README.md`);
if(sha256('PRODUCT_BIBLE.md')!==expectedBibleHash) fail('product bible hash changed');
const license=readFileSync('LICENSE','utf8');
if(!/All Rights Reserved/i.test(license) || /MIT License|Apache License|GNU GENERAL PUBLIC LICENSE|BSD License|Mozilla Public License/i.test(license)) fail('proprietary licence check failed'); else ok('proprietary licence resolved');
const pkg=JSON.parse(readFileSync('package.json','utf8'));
if(pkg.license!=='UNLICENSED' || pkg.private!==true) fail('package metadata must be private and UNLICENSED');
for(const [k,v] of Object.entries(pkg.nightwaterToolchain ?? {})) if(/latest|\*/i.test(String(v))) fail(`unbounded toolchain version for ${k}`);
const all=files();
for(const f of all){
 const s=statSync(f); if(s.size>1024*1024) fail(`large committed file may be inappropriate binary: ${f}`);
 const b=readFileSync(f); if(b.includes(0)) fail(`binary-like file detected: ${f}`);
 const t=b.toString('utf8');
 if(/-----BEGIN (RSA |DSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/.test(t)) fail(`private key pattern in ${f}`);
 const secret=/((api[_-]?key|token|password|secret)\s*[:=]\s*)(?!replace|change-me|placeholder|example|local-secret-outside-git)[A-Za-z0-9_\-]{12,}/i;
 if(secret.test(t)) fail(`obvious secret-like assignment in ${f}`);
 if(/C:\\Users\\|\/home\/[A-Za-z0-9_-]+|\/Users\/[A-Za-z0-9_-]+/.test(t)) fail(`local absolute user path in ${f}`);
 if(/\/workspace\//.test(t) && !['docs/REPOSITORY_MAP.md','scripts/validate-phase0.mjs'].includes(f)) fail(`/workspace/ path outside repository identity record in ${f}`);
}
const tracked=execFileSync('git',['ls-files'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
if(tracked.includes('node_modules')) fail('node_modules tracked');
if(!process.exitCode) ok('phase 0 validation passed');
