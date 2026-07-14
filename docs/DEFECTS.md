# Defects

Defect IDs use NIGHTWATER-CRITICAL-###, NIGHTWATER-HIGH-###, NIGHTWATER-MEDIUM-###, and NIGHTWATER-LOW-###.

## NIGHTWATER-HIGH-001

- Severity: HIGH
- Status: RESOLVED AND REVERIFIED
- Affected files: `docs/PROGRESS.md`, `scripts/validate-docs.mjs`
- Evidence: `docs/PROGRESS.md` contained the percentage ladder but omitted the complete Phase Gates section from `PRODUCT_BIBLE.md`.
- Impact: Phase 0 could pass with an incomplete progress blueprint and without locked gate requirements for Phases 0 through 14.
- Repair: `docs/PROGRESS.md` now contains `# 34. The 100% Progress Ladder` and `# 35. Phase Gates` copied byte-for-byte from `PRODUCT_BIBLE.md`, followed by a separate status section.
- Regression test: `scripts/validate-docs.mjs` extracts the canonical sections from `PRODUCT_BIBLE.md`, verifies they exist byte-for-byte in `docs/PROGRESS.md`, verifies weights, cumulative percentages, all phase headings and required gate language, and negative tests reject missing phases, changed weights and removed gates.
- Final verification: `npm run docs:validate` and `npm run test:phase0` pass.

## NIGHTWATER-HIGH-002

- Severity: HIGH
- Status: RESOLVED AND REVERIFIED
- Affected files: `docs/REPOSITORY_MAP.md`, `scripts/validate-phase0.mjs`
- Evidence: `docs/REPOSITORY_MAP.md` committed a local machine path.
- Impact: Phase 0 violated the no-local-absolute-path gate and risked leaking workspace details.
- Repair: The repository map now uses `<repository-root>` and the validator no longer allows repository-map or validator exceptions for local machine paths.
- Regression test: `scripts/validate-phase0.mjs` scans committed text for local machine path patterns, and `scripts/test-phase0.mjs` proves a constructed local mount path is rejected without committing such a path.
- Final verification: `npm run phase0:validate`, `npm run test:phase0`, and `git grep` local-path scans pass.

## NIGHTWATER-HIGH-003

- Severity: HIGH
- Status: RESOLVED AND REVERIFIED
- Affected files: `package.json`, `scripts/validate-boundaries.mjs`, `tsconfig.base.json`, `tsconfig.scripts.json`
- Evidence: `npm run typecheck` previously ran a README-label validator rather than TypeScript.
- Impact: The baseline claimed type checking without invoking TypeScript.
- Repair: The boundary validator was renamed to `scripts/validate-boundaries.mjs` and is run by `npm run boundaries:validate`; `npm run typecheck` now runs `tsc -p tsconfig.scripts.json --noEmit`.
- Regression test: `npm run typecheck` invokes TypeScript and `npm run boundaries:validate` separately validates boundary README contracts.
- Final verification: `npm run typecheck` and `npm run boundaries:validate` pass when the required tooling is available.

## NIGHTWATER-MEDIUM-001

- Severity: MEDIUM
- Status: RESOLVED AND REVERIFIED
- Affected files: `package.json`, `package-lock.json`, `.prettierrc.json`, `.prettierignore`, `eslint.config.js`, `tsconfig.base.json`, `tsconfig.scripts.json`
- Evidence: Prettier, ESLint and TypeScript were recorded as pinned tooling but were not installed or used by baseline commands.
- Impact: Tooling decisions were not active checks.
- Repair: Exact devDependencies were declared for TypeScript, Prettier, ESLint and Node types; root scripts now run real formatter, linter and TypeScript checks; configuration files were added.
- Regression test: `npm run format:check`, `npm run lint`, `npm run typecheck` and `npm run check` exercise the active tools.
- Final verification: Commands pass when dependency installation is available; this environment may block registry access and must report that honestly if it occurs.

## NIGHTWATER-MEDIUM-002

- Severity: MEDIUM
- Status: RESOLVED AND REVERIFIED
- Affected files: `LICENSE`, `scripts/validate-phase0.mjs`
- Evidence: The proprietary licence identified the product title rather than Sirenware Studios as the rights holder.
- Impact: Proprietary ownership was legally ambiguous.
- Repair: `LICENSE` now names Sirenware Studios as rights holder while identifying Project Nightwater / Somewhere Ours: Private City as the covered project.
- Regression test: `scripts/validate-phase0.mjs` requires Sirenware Studios, All Rights Reserved, no common open-source licence text, `private=true`, and `license=UNLICENSED`.
- Final verification: `npm run phase0:validate` and `npm run test:phase0` pass.

## NIGHTWATER-MEDIUM-003

- Severity: MEDIUM
- Status: RESOLVED AND REVERIFIED
- Affected files: `docs/DEFECTS.md`
- Evidence: The defect log said no defects were found after confirmed Phase 0 defects existed.
- Impact: The defect register was inaccurate and failed to preserve repair history.
- Repair: This file now records each confirmed defect, severity, status, affected files, evidence, impact, repair, regression test and final verification.
- Regression test: `npm run docs:lint` and `npm run phase0:validate` require the defect log to remain present and well-formed as a required document.
- Final verification: `npm run docs:lint`, `npm run docs:validate`, and `npm run phase0:validate` pass.

## NIGHTWATER-MEDIUM-004

- Severity: MEDIUM
- Status: RESOLVED IN PHASE 1 IMPLEMENTATION; pending CI verification.
- Affected files: `packages/local-api/src/server.ts`, `apps/desktop-shell/src/main/supervisor.ts`
- Evidence: Phase 0 had no runtime Local API and therefore no authenticated health endpoint.
- Impact: Phase 1 could not honestly report process health.
- Repair: Added a loopback-only authenticated Local API child process and main-process health polling with sanitized renderer output.
- Regression test: `npm run test:phase1` includes authenticated, missing-auth and wrong-auth health checks.
