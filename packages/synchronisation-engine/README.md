# Synchronisation engine

Purpose: Immutable event sync, idempotency, checkpoints, conflict detection, and scope filtering.

Responsibilities: Immutable event sync, idempotency, checkpoints, conflict detection, and scope filtering.

Permitted dependencies: shared contracts, Ghostlight adapter interface, persistence projections.

Forbidden dependencies: raw database replication, required online operation, raw local media sync by default.

Implementation phase: Phase 11.

Current status: Documented boundary only; no sync implementation.
