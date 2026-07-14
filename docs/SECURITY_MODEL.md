# Security Model

## Phase 0 convention

This document records mandatory future controls. Phase 0 implements validation for repository hygiene only; it does not claim Electron, API, PostgreSQL, voice, media, vault, sync, or adapter security is implemented.

## Future mandatory controls

- Electron renderers must use context isolation, disabled Node integration, a minimal secure preload bridge, a strict Content Security Policy, and no unrestricted file protocol access.
- The desktop shell must expose a custom local application protocol mediated by the main process.
- Local API calls must require authenticated local sessions, CSRF protection where applicable, input validation, rate limiting, idempotency, and replay protection.
- Local PostgreSQL and pgvector data must use versioned migrations, least-privilege credentials, transactional writes, and no raw database-directory portability.
- Ollama adapters must perform model capability checks and fail honestly when models are unavailable.
- Companion memories and relationship history must obey owner scoping, deletion, export, audit, and memory-eligibility rules.
- Voice provider credentials, including Fish Audio cloud credentials, must remain outside renderer code, logs, media files, and unencrypted portable configuration.
- Optional local Fish Audio must be verified separately before any offline Fish Audio capability is claimed.
- Browser and operating-system TTS may be used without provider secrets but still require playback-state truthfulness and transcript captions.
- Local media access, subtitles, transcripts, sampled frames, and analysis caches must be local by default and protected from accidental sync.
- The portable Nightwater Capsule must use authenticated encryption, salted key derivation, recovery metadata, and no plaintext provider secrets.
- Ghostlight service authentication must be optional, scoped, revocable, and separated from local-only operation.
- Discord and Telegram are online-only Ghostlight surfaces and must never be required for offline play.
- Logs, diagnostics, backups, deletion, export, crash recovery, and secret storage must be redacted, owner-scoped, and failure-honest.

## Not yet implemented

All runtime controls above are unimplemented in Phase 0. Later phases must prove them with tests before claiming security coverage.
