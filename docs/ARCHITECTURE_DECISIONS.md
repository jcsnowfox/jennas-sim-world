# Architecture Decisions

## Phase 0 source of truth

`PRODUCT_BIBLE.md` is immutable for Phase 0. This repository baseline records boundaries and tooling only; it does not implement Phase 1 or later runtime features.

## ADR-0001: Monorepo shape

Decision: use an npm workspace monorepo with `apps/*`, `packages/*`, and `adapters/*`.

Rationale: the product requires a desktop shell, renderer, local service, simulation core, persistence, workers, and optional adapters. Workspaces make package boundaries explicit while keeping dependency and script orchestration simple for a Windows-first TypeScript stack.

## ADR-0002: Toolchain pinning

| Area | Exact selection | Rationale |
|---|---:|---|
| Node.js | 24.15.0 | Modern JavaScript runtime baseline for local services and tooling. |
| Package manager | npm 11.4.2 | Bundled with the observed environment and supports lockfiles/workspaces without extra tooling. |
| Workspace system | npm workspaces 11.4.2 | Keeps the monorepo minimal and standard. |
| TypeScript | 5.9.3 | Planned typed implementation language for Electron, services, renderer, and packages. |
| Electron | 39.2.7 | Planned Windows desktop shell. Phase 0 only pins and documents it. |
| Babylon.js | @babylonjs/core 8.38.0 | Planned renderer engine. Phase 0 only pins and documents it. |
| Unit/integration runner | vitest 4.0.16 | Planned pure TypeScript test runner for simulation, service, persistence, and adapters. |
| Browser/Electron E2E runner | playwright 1.57.0 | Planned browser and Electron automation. |
| PostgreSQL migration tooling | node-pg-migrate 8.0.3 | Planned versioned PostgreSQL migrations. No product schema is created in Phase 0. |
| Formatter | prettier 3.7.3 | Planned formatter. Phase 0 uses repository-local format checks to avoid uninstalled dependencies. |
| Linter | eslint 9.39.2 | Planned linter. Phase 0 uses repository-local lint checks to avoid uninstalled dependencies. |

The exact selections are recorded in `package.json` under `nightwaterToolchain`. Dependency installation is intentionally clean with the lockfile and no runtime implementation packages in Phase 0.

## ADR-0003: Core independence

The simulation core boundary must not depend on Electron, Babylon.js, Ghostlight, Fish Audio, Ollama, or any provider-specific package. It will later accept deterministic inputs and produce deterministic state transitions.

## ADR-0004: Optional Ghostlight

Ghostlight is an optional adapter boundary. It must never become a required dependency for local play, local memory, local media, or the canonical simulation state.

## ADR-0005: No fake implementation

Phase 0 creates documentation, boundary folders, validation scripts, and package metadata only. Empty boundaries contain README contracts and no pretend implementation code.
