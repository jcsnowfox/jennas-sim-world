# 34. The 100% Progress Ladder

Progress is earned only when the phase gate passes. Existing files, interfaces or mock tests do not earn credit. Credit can be revoked when a later phase reveals a regression or false claim.

| Phase | Weight | Cumulative | Locked outcome |
|---|---:|---:|---|
| 0. Charter and repository baseline | 3% | 3% | Source-of-truth docs, clean repository, exact baseline |
| 1. Desktop shell and process architecture | 4% | 7% | Secure Electron shell and local process orchestration |
| 2. PostgreSQL, migrations and encrypted vault | 7% | 14% | Durable local data, versioned schema, capsule foundation |
| 3. Canonical events, brain and memory | 8% | 22% | One local companion brain and retrievable continuity |
| 4. Renderer, camera and asset pipeline | 8% | 30% | Real Babylon canvas and validated asset system |
| 5. Home lot, avatars and pathfinding | 11% | 41% | Playable spatial home with two characters |
| 6. Actions, objects and reservations | 9% | 50% | Real action queue and object affordances |
| 7. Needs, time, autonomy and worker | 8% | 58% | Living simulation and offline progression |
| 8. Build and Buy, inventory and economy | 8% | 66% | Persistent decoration and basic household loop |
| 9. Voice and Touch | 5% | 71% | Browser TTS, Fish option and canonical Touch zones |
| 10. The Screening Room | 10% | 81% | Local media, grounded commentary and watch memory |
| 11. Portability and Ghostlight sync | 7% | 88% | Encrypted capsule and optional one-brain synchronisation |
| 12. Private city lots and NPC foundation | 6% | 94% | Five playable external lots and lightweight residents |
| 13. Security, accessibility and performance | 3% | 97% | Adversarial proof and usable profiles |
| 14. Packaging, recovery and final acceptance | 3% | 100% | Portable v1.0 build, backups and full end-to-end proof |

# 35. Phase Gates

## Phase 0: Charter and repository baseline, 3%

**Required output:**

- New clean repository or confirmed empty project root
- `PRODUCT_BIBLE.md` copied from this source of truth
- `ARCHITECTURE_DECISIONS.md`
- `PROGRESS.md`
- `DEFECTS.md`
- `docs/` structure
- Licence file
- Toolchain decision record
- Baseline commands and environment inventory

**Gate:** no implementation begins before the repository identity and product contract are committed.

## Phase 1: Desktop shell and process architecture, 4%

**Required output:** secure Electron shell, custom protocol, renderer window, local API health, worker health, process shutdown and no unrestricted renderer Node access.

**Gate tests:** launch, close, relaunch, crash-safe cleanup, no secret in renderer, production package boots.

## Phase 2: PostgreSQL, migrations and encrypted vault, 7%

**Required output:** local database bootstrap, versioned migrations, owners, companions, events, worlds, vault metadata, device registration, encrypted export and restore skeleton.

**Gate tests:** fresh install, upgrade, failed migration fails honestly, export/import, wrong vault password denied, no raw live data-directory portability.

## Phase 3: Canonical events, brain and memory, 8%

**Required output:** Ollama adapter, companion profile, normalised events, conversation timeline, memory candidates, embeddings, retrieval, deterministic explicit demo fallback.

**Gate tests:** real local model turn, missing model error, duplicate event idempotency, memory retrieval, no second persona.

## Phase 4: Renderer, camera and asset pipeline, 8%

**Required output:** Babylon canvas, scene lifecycle, camera, procedural test room, asset manifest validation, performance profiles and complete cleanup.

**Gate tests:** resize, route exit, five reload cycles, no duplicate engines, malformed manifest rejected.

## Phase 5: Home lot, avatars and pathfinding, 11%

**Required output:** all required home rooms, user avatar, companion avatar, walkable navmesh, walls, doors, furniture collision, physical positions and save restoration.

**Gate tests:** click-to-walk, door traversal, unreachable point, no wall crossing, reload positions, camera controls on desktop and touch viewport.

## Phase 6: Actions, objects and reservations, 9%

**Required output:** persistent action queue, state machine, cancellation, interruption, object reservations and at least 15 functional affordance objects.

**Gate tests:** coffee, sofa, bed, shower, toilet, reading, music, failed action compensation, double-click idempotency, two-character seat reservation.

## Phase 7: Needs, time, autonomy and worker, 8%

**Required output:** six needs, world clock, pause and speed, schedules, utility scoring, simulation worker, offline reconciliation and bounded catch-up.

**Gate tests:** need decay, action effects, autonomy chooses valid object, app closed for simulated hours, no constant model calls, worker restart recovery.

## Phase 8: Build and Buy, inventory and economy, 8%

**Required output:** catalogue, preview, rotation, move, delete, undo/redo, 30 placeable objects, inventory, Story Mode and Life Mode funds.

**Gate tests:** collision rejection, door clearance, path protection, persistence after reload, purchase and placement, revision conflict handling.

## Phase 9: Voice and Touch, 5%

**Required output:** browser/OS TTS, Fish Audio adapter, fallback order, playback-linked speaking state, local credential safety, seven canonical Touch zones and consent.

**Gate tests:** browser voice offline, Fish boundary, provider failure fallback, cancellation, valid and invalid zone, disabled Touch, rapid-repeat cooldown.

## Phase 10: The Screening Room, 10%

**Required output:** playable cinema room, local media picker, secure media protocol, playback, subtitles, local transcript fallback, scene map, frame sampling, commentary modes, spoiler lock, pause-and-discuss and watch memories.

**Gate tests:** media remains local, missing file recovery, no future-scene context, commentary timing, voice interruption, progress resume, approved memory object, transcript excluded from sync by default.

## Phase 11: Portability and Ghostlight sync, 7%

**Required output:** encrypted Nightwater Capsule, device identity, event export/import, Ghostlight adapter, sync scopes, conflict handling and offline queue.

**Gate tests:** move capsule between two supported test environments, hydrate database, offline events merge, duplicate events ignored, world-layout conflict preserved, Ghostlight unavailable does not block local game.

## Phase 12: Private city lots and NPC foundation, 6%

**Required output:** Lantern Café, Harbour Walk, Night Garden, Market Lane and Cinema District, travel, return home, shops and required NPC roles.

**Gate tests:** every lot loads, at least three interactions per lot, current lot persists, travel failure recovers, purchases arrive, NPC schedule does not block essential interaction.

## Phase 13: Security, accessibility and performance, 3%

**Required output:** adversarial security suite, screen-reader alternatives, keyboard navigation, reduced motion, high contrast, low-power profile, leak tests and logging review.

**Gate tests:** IDOR denied, path traversal denied, renderer secret scan clean, accessibility critical path complete, ten lot transitions without resource growth.

## Phase 14: Packaging, recovery and final acceptance, 3%

**Required output:** signed or test-signed Windows installer, portable build, database bootstrap, model checks, FFmpeg checks, backup and recovery wizard, user documentation and final acceptance report.

**Gate:** every v1.0 acceptance scenario passes, no critical or high defects remain, all claims are substantiated.

# Phase 0 Current Status

- Phase 0 status: COMPLETE AFTER FIX, pending reviewer acceptance.
- Earned percentage proposed by this repository: 3% only when all Phase 0 gates pass.
- Cumulative percentage proposed by this repository: 3% only when all Phase 0 gates pass.
- Merge status: pending PR review.
- Current defects: NIGHTWATER-HIGH-001, NIGHTWATER-HIGH-002, NIGHTWATER-HIGH-003, NIGHTWATER-MEDIUM-001, NIGHTWATER-MEDIUM-002, and NIGHTWATER-MEDIUM-003 are RESOLVED AND REVERIFIED in `docs/DEFECTS.md`.
- Next phase: Phase 1, Desktop shell and process architecture, must not start until Phase 0 is accepted.

# Phase 1 Current Status

- Phase 1 status: IMPLEMENTED LOCALLY AND PROPOSED FOR REVIEWER ACCEPTANCE; not marked complete inside the repository.
- Proposed cumulative percentage remains 3% unless every Phase 1 gate is accepted by review and CI.
- Scope statement: this update implements only the desktop shell and process architecture gate; no Phase 2 persistence, AI, gameplay, media, sync, Touch or city-lot work has started.
