# Test Strategy

## Future test layers

- Pure simulation unit tests for time, needs, utility scoring, actions, reservations, and deterministic state.
- Persistence integration tests for PostgreSQL, migrations, pgvector-compatible retrieval, rebuilds, and recovery.
- Electron security tests for renderer isolation, preload bridge, protocol safety, and renderer secret exposure.
- Babylon browser tests for canvas lifecycle, camera, picking, route cleanup, and resource leaks.
- Worker tests for offline reconciliation, scheduling, restart, and bounded catch-up.
- Home Cinema tests for media privacy, subtitles, transcripts, frames, spoiler windows, commentary timing, and watch memories.
- Voice tests for browser/OS TTS, Fish Audio cloud/local boundaries, fallback order, credential safety, and playback state.
- Portability tests for encrypted capsule export/import, hydration, recovery, and moved media references.
- Ghostlight adapter contract tests for scopes, idempotency, conflicts, offline queue, and optional availability.
- Offline tests with network disabled.
- Sync conflict tests for settings, events, and world layout revisions.
- Security and tenant-isolation tests for IDOR, path traversal, forged IDs, replay, malicious manifests, and rate limits.

## Phase 0 checks

The root scripts implement real checks for documentation presence, internal links, repository-map accuracy, phase weights totalling exactly 100%, required package boundaries, proprietary licence resolution, product-bible hash integrity, forbidden local paths, obvious secret patterns, and inappropriate committed binaries.

## Phase 1 implemented test layers

- `npm run test:phase1` builds the TypeScript application and runs Vitest coverage for protocol path validation, Local API authentication, Worker heartbeat/crash handling, process supervision and renderer/preload security scans.
- `npm run package:smoke` builds an Electron Builder unpacked package and launches the packaged application in `--smoke-test` mode. The smoke test exits zero only after the packaged main process, renderer startup path, Local API and Worker reach ready health.
- The Phase 1 GitHub Actions workflow runs `npm ci`, `npm run check`, `npm run test:phase1`, `npm run build`, Linux Electron launch under `xvfb-run`, and Windows unpacked package smoke testing.
