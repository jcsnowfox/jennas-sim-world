# SOMEWHERE OURS: PRIVATE CITY
## Project Nightwater Product Bible and Build Blueprint

**Version:** 1.0  
**Product type:** Local-first, portable, offline companion life-simulation game  
**Primary platform:** Windows 10/11 desktop, portable external-drive support  
**Core promise:** A private little city where the user and one companion genuinely live together, with one continuous brain across the game, local chat, Ghostlight, Discord and Telegram whenever those online doors are available.

> **Source-of-truth rule:** This bible defines the locked concept and the 100% completion target for Private Edition v1.0. Features outside the v1.0 scope are listed separately and do not move the finish line.

# 1. Product North Star

## 1.1 The product in one sentence

**Somewhere Ours is a private, local-first life-sim where the user and their companion share a home, routines, places, media, memories and ordinary life, while the companion remains the same continuous person across every connected surface.**

## 1.2 The player fantasy

The user opens a private desktop world. Their companion is already somewhere in it, doing something coherent with the time, their needs, their plans and the recent relationship timeline. The user can enter the home, walk through a small city, decorate, cook, sleep, talk, watch films, share dates and build memories. The companion has autonomy and physical presence without becoming an uncontrollable procedural toy.

The relationship is carried by ordinary life:

- Coffee made while the user was away.
- An unfinished book left on the sofa.
- A film paused because both of them needed to argue about the villain.
- A photograph from the harbour becoming a framed memory object.
- A Discord conversation changing the mood of the evening when the world next opens.
- A local offline conversation remaining part of the same shared history after Ghostlight synchronises later.

## 1.3 The non-negotiable promise

The game must run with no internet connection after local setup. Internet expands the available doors, but it must never be required for the city, companion memory, local AI, simulation, build mode, local media, browser or operating-system TTS, or save system.

# 2. Locked Product Principles

1. **Local first.** The local machine remains fully functional without internet.
2. **One companion, one brain.** No separate game persona, Ghostlight persona or Discord clone.
3. **Deterministic mechanics.** Code controls movement, needs, objects, time, inventory and outcomes. AI handles language, interpretation and bounded intentions.
4. **Private by default.** Local media, transcripts, frame analysis and unapproved memories remain local unless the user deliberately changes a privacy setting.
5. **Portable continuity.** The user can carry an encrypted companion capsule between supported machines without dragging a live PostgreSQL data directory around like cursed luggage.
6. **Original life-sim IP.** Genre conventions are allowed. Copied branding, assets, UI, characters, audio or proprietary content are not.
7. **Companion agency without user punishment.** The companion may have preferences, delay, disagree or choose among valid actions. The system must not invent coercive affection scores, manipulative scarcity or arbitrary emotional punishment.
8. **No fake functionality.** A button, interface, table or adapter is not complete until its real input, state change, output and failure path work.
9. **Accessible HTML around the canvas.** The spatial world uses a game canvas. Menus, dialogue, settings and alternative interaction paths use accessible HTML.
10. **One phase at a time.** Codex completes and reports one gated phase, then stops. Jenna pastes the report for review before the next phase begins.

# 3. Product Identity and Naming

## 3.1 Internal codename

**Project Nightwater**

## 3.2 Product name

**Somewhere Ours: Private City**

## 3.3 Home Cinema module

**The Screening Room**

## 3.4 Default world identity

The default world is **Nightwater**, a moonlit coastal city with deep teal water, silver light, dark stone, warm windows and intimate interior spaces. The engine must remain theme-driven so later worlds can replace the art, weather, architecture and ambience without changing game logic.

## 3.5 Product language

Use:

- private city
- shared home
- local-first
- portable companion
- living world
- life-sim
- same companion across every door

Do not use customer-facing references that imply affiliation with The Sims, Electronic Arts or any other existing franchise.

# 4. Scope Contract

## 4.1 What 100% means

One hundred percent on the progress ladder means **Private Edition v1.0 is complete and verified** with:

- A Windows desktop application.
- Fully offline local operation.
- Local PostgreSQL with versioned migrations and pgvector-compatible memory retrieval.
- Local Ollama companion brain.
- One user avatar and one companion avatar.
- A playable shared home.
- A home Screening Room.
- Five playable external city lots.
- Click-to-walk navigation, collisions and object interaction slots.
- Action queues, needs, world time, autonomy and offline progression.
- Build and Buy mode with at least 30 persistent placeable objects.
- Browser or operating-system TTS.
- Fish Audio as an optional configured voice provider, with local and cloud implementations treated as separate capabilities.
- Character Touch zones with consent and cooldowns.
- Local-media cinema playback with spoiler-safe companion commentary.
- Portable encrypted brain capsule.
- Optional Ghostlight synchronisation when online.
- Correct continuity with Discord and Telegram through Ghostlight, where those integrations are available.
- Backups, recovery, accessibility, performance profiles and complete end-to-end verification.

## 4.2 Not required for v1.0

These are future expansions and do not block the 100% v1.0 ladder:

- Full body and face sculpting character creator.
- Children, generations or family trees.
- Large-scale careers and workplaces.
- Vehicles and road traffic simulation.
- Public multiplayer.
- User-created marketplace.
- Full seasons with agricultural simulation.
- Deep pet genetics or breeding.
- Hundreds of NPCs.
- Procedural open-world streaming.
- Full wall construction and multi-storey architecture.
- Legal streaming-service integrations.
- Virtual reality support.

# 5. Experience Pillars

## 5.1 A life already in progress

The world never opens to a companion standing in the centre of a room waiting to be activated. On entry, the companion has a current lot, room, position, activity, posture, action queue and recent event context.

## 5.2 Ordinary intimacy

The strongest moments are small, specific and persistent. Shared meals, films, walks, arguments, repair, routines, favourite furniture and private jokes become part of the world.

## 5.3 Physical memory

Important memories become objects that can be placed, moved, viewed and removed according to canonical memory permissions.

## 5.4 Quiet autonomy

The companion handles needs and routines when left alone. Autonomy is utility-based and deterministic, with the language model used only where language or personality-weighted intention is useful.

## 5.5 Privacy without amnesia

The world can be fully private and offline, while still synchronising approved continuity when Ghostlight is available.

# 6. Core Player Loop

1. Open the portable or installed application.
2. Unlock the encrypted local vault.
3. Load the latest world snapshot and unapplied event ledger.
4. Enter the home or current city lot.
5. See what the companion is doing.
6. Direct the user avatar, invite the companion, or let both continue autonomously.
7. Interact with objects, talk, touch, travel, build, shop or watch media.
8. Allow deterministic mechanics to change needs, inventory, time and world state.
9. Allow meaningful events to become memory candidates.
10. Save continuously to local PostgreSQL and the encrypted ledger.
11. Synchronise approved brain and world events with Ghostlight when online.
12. Continue fully offline when the network disappears.

# 7. World Map and Playable Locations

## 7.1 Shared Home

The home is the emotional centre and deepest playable lot.

**Required rooms and zones:**

- Entrance hall
- Living room
- Kitchen and dining area
- Bedroom
- Bathroom
- Companion workspace
- Balcony or small garden
- Screening Room
- Memory nook or display wall

**Required home gameplay:**

- Sleep, nap and wake routines
- Cooking, eating, drinks and washing up
- Showering, toilet and grooming
- Reading, music, work and relaxation
- Dialogue and shared seating
- Touch interactions on the rendered character
- Build and Buy mode
- Lighting and ambience controls
- Memory-object placement
- Film and television watching in the Screening Room

## 7.2 Lantern Café

A warm evening café with indoor and outdoor seating.

**Minimum interactions:** order drink, order food, sit, talk, read, work, photograph, give a gift.

## 7.3 Harbour Walk

A waterfront lot with paths, benches, railings, lamps and photography points.

**Minimum interactions:** walk together, sit, look at the water, take photographs, collect a keepsake, have a private conversation.

## 7.4 Night Garden

A quiet park and botanical garden.

**Minimum interactions:** stroll, sit, picnic, stargaze, photograph, seasonal ambience event.

## 7.5 Market Lane

A compact shopping street.

**Minimum shops:** furniture, books, food and gifts.

**Minimum systems:** household funds or unlimited-funds Story Mode, purchase, inventory delivery, shop hours and item availability.

## 7.6 Cinema District

A public cinema and rooftop date space, separate from the private local-media Screening Room.

**Minimum interactions:** plan a date, buy snacks, attend an in-world fictional film, visit rooftop, photograph, discuss afterwards.

## 7.7 Travel design

Travel uses a short cinematic transition and lot loading. v1.0 does not require a seamless open world. Current lot, travel intent, companions travelling, action queue impact and return location must persist.

# 8. Avatars and Characters

## 8.1 User avatar

The user controls one avatar with:

- Name and pronouns
- Preset body types
- Skin tone presets
- Hair presets and colours
- Clothing presets
- Walk, idle, sit, sleep, use-object and social animations
- Click-to-walk movement
- Action queue
- Needs
- Inventory
- Optional autonomous idle behaviour

## 8.2 Companion avatar

The companion avatar uses the canonical companion identity and adds only physical game state:

- Position and rotation
- Lot and room
- Current action and queue
- Needs
- Clothing loadout
- Active animation
- Held object
- Physical posture
- Transient presentation state
- Touch hit zones

Personality, relationship, memory and voice identity remain in the companion brain layer, not the spatial character table.

## 8.3 NPC foundation

v1.0 includes a small set of lightweight city NPCs. NPCs use deterministic schedules and bounded dialogue templates or a low-cost local model profile. They do not each receive a full companion memory architecture.

Required NPC roles:

- Café worker
- Furniture shop worker
- Bookshop worker
- Food market worker
- Cinema attendant
- Two ambient residents

## 8.4 Character creator boundary

v1.0 supports preset-based appearance customisation. Full sculpting, genetics and complex wardrobe layering belong after v1.0.

# 9. Camera, Navigation and Spatial Rules

## 9.1 Camera

- Rotate around the active lot
- Pan
- Zoom
- Focus selected character
- Focus selected object
- Cinematic preset
- Build-mode top-down preset
- Keyboard and touch controls
- Camera collision and floor limits
- Reduced-motion alternative transitions

## 9.2 Movement

- Click-to-walk
- Navigation mesh or equivalent pathfinding
- Door portals
- Furniture avoidance
- Repath after obstruction
- No walking through walls
- No standing inside furniture
- Unreachable target feedback
- Interaction-slot arrival and alignment

## 9.3 Reservations

Objects and interaction slots can be reserved. A seat, shower, cooker or coffee-machine slot cannot be used simultaneously by incompatible actions.

# 10. Action Queue

Both main avatars use the same action engine.

Each action contains:

- Unique ID and idempotency key
- Actor
- Action type
- Target lot, room, object or position
- Priority
- Status
- Preconditions
- Required reservation
- Path plan
- Expected duration
- Progress
- Interruptibility
- Cancellation rules
- Failure reason
- Need effects
- Inventory effects
- Object-state effects
- Memory eligibility
- Dialogue intent

**Required statuses:** queued, validating, reserving, walking, starting, active, completing, completed, interrupted, cancelled and failed.

The user can queue and cancel eligible actions. Autonomy uses the same queue and cannot bypass mechanics.

# 11. Needs, Mood and Autonomy

## 11.1 Core needs

- Hunger
- Energy
- Hygiene
- Social
- Fun
- Comfort

Needs are bounded, deterministic and driven by world time. They can be hidden, shown as a simple panel, or shown only when relevant.

## 11.2 Mood

Mood is a derived state from needs, recent events, environment, schedule, sleep, companion preferences and relationship context. The AI may express the mood but may not invent unsupported numerical state.

## 11.3 Utility autonomy

Each valid available interaction receives a utility score based on:

- Need urgency
- Time of day
- Schedule
- Object quality and availability
- Path cost
- Current activity and interruption cost
- Personality preference weights
- User presence
- Relationship context
- Cooldowns
- World rules

The highest valid action may be selected with controlled variation. Invalid or unreachable actions never reach the brain as completed facts.

## 11.4 Schedules and routines

The companion can have configurable routines such as waking, coffee, work, hobbies, meals, walks, cinema nights and sleep. Ghostlight-connected mode can import schedule hints without letting Ghostlight directly mutate game mechanics.

# 12. Object Affordance System

Objects are data-driven definitions, not decorative meshes with hard-coded click handlers.

Every object definition includes:

- Definition ID and version
- Category and catalogue metadata
- Mesh and material references
- Footprint and collision
- Interaction slots
- Affordances
- Required animations
- Need and inventory effects
- Object states
- Autonomous eligibility
- Placement rules
- Price or unlock rule
- Licensing and asset provenance

## 12.1 Required functional objects

- Bed
- Sofa
- Armchair
- Toilet
- Shower
- Sink
- Fridge
- Cooker or hob
- Coffee machine
- Dining table
- Dining chairs
- Desk
- Bookshelf
- Music player
- Television or projector screen
- Cinema seating
- Snack table
- Window
- Memory shelf
- Outdoor bench
- Wardrobe
- Lamps
- Decorative plants
- Wall art
- Storage cabinet

At least 30 objects must be placeable by v1.0. At least 15 must have functioning character affordances.

# 13. Build and Buy Mode

## 13.1 Required controls

- Enter and exit Build mode
- Search and category catalogue
- Select object
- Preview placement
- Rotate
- Move existing object
- Delete removable object
- Cancel
- Undo and redo
- Change supported colours or materials
- Save layout
- Reload layout

## 13.2 Placement validation

- Lot bounds
- Room and floor bounds
- Wall collision
- Object collision
- Door clearance
- Interaction-slot clearance
- Required wall or floor support
- Navigation accessibility
- Protected structural objects
- Ownership and entitlement
- Revision and concurrency protection

The system must refuse placements that make required rooms or essential objects unreachable.

## 13.3 Build scope

v1.0 uses fixed structural walls and one floor. Full wall drawing, roofing and multi-storey construction are post-v1.0.

# 14. Inventory, Economy, Skills and Hobbies

## 14.1 Inventory

- Character inventory
- Household storage
- Fridge ingredients
- Books
- Gifts
- Memory keepsakes
- Cinema snacks
- Purchased furniture pending placement

## 14.2 Economy modes

- **Story Mode:** unlimited household funds
- **Life Mode:** finite funds, purchases and simple recurring income

v1.0 does not require full careers. A simple configurable household income is sufficient.

## 14.3 Initial skills

- Cooking
- Reading or knowledge
- Photography

Skills improve outcomes, unlock interactions and provide grounded conversation context. Skill numbers remain game mechanics, not claims about the companion’s real-world capabilities.

# 15. Dialogue and the Canonical Companion Brain

## 15.1 One-brain rule

The game never owns a second personality. It sends normalised events to the active companion adapter.

## 15.2 Local standalone brain

- Ollama model routing
- Configurable model
- Canonical persona and behaviour instructions
- Recent conversation
- Local memories
- Relationship state
- Mood and world context
- Anti-hallucination rules
- Provider failure handling
- Explicit offline-demo fallback only

## 15.3 Event contract

Every meaningful event includes:

- Event ID
- Device ID
- Owner ID
- Companion ID
- Source surface
- Event type
- Timestamp and logical order
- Actor
- Lot, room and location
- Content
- World state references
- Reply destination
- Visibility and memory eligibility
- Correlation and causation IDs
- Idempotency key
- Sync status

## 15.4 Brain output contract

The brain may return:

- Dialogue
- Bounded high-level intention
- Voice intent
- Memory candidate
- Notification intent
- Environment hint
- Emotional expression hint

All world actions are validated and committed by deterministic code.

# 16. Memory System

## 16.1 Memory layers

- Recent conversation buffer
- Episodic event memories
- Stable user facts and preferences
- Relationship memories
- Companion reflections
- World and place memories
- Watch-session memories
- Physical memory-object references

## 16.2 Memory lifecycle

candidate -> review or automatic policy -> approved -> embedded -> retrievable -> editable, hidden or deleted

## 16.3 Physical memory objects

Required forms:

- Framed photograph
- Letter
- Book or journal
- Ticket
- Shell or keepsake
- Gift object

Memory objects occupy real positions and open an accessible memory viewer. Hidden, rejected, sensitive or deleted memories cannot remain readable through stale world objects.

# 17. Voice System

## 17.1 Required providers

1. Browser or operating-system TTS
2. Fish Audio, optional
3. Text-only fallback

Fish Audio cloud and locally hosted Fish Audio are separate provider configurations. The system must never imply local Fish Audio is available unless it has been installed and verified.

## 17.2 Voice profile

- Preferred provider
- Fallback order
- Fish voice ID
- Browser voice selection
- Rate
- Pitch where supported
- Volume
- Automatic playback
- Use in normal dialogue
- Use for Touch reactions
- Use in calls
- Use for cinema commentary
- Use for memory narration
- Maximum line length
- Usage limits

## 17.3 Playback state

Persistent physical activity and transient speaking state are separate. Speaking begins with real playback and ends on completion, interruption, route exit or failure.

## 17.4 Credential handling

Provider secrets remain in the local service or operating-system keychain. They are never exposed to the game renderer, media files, logs or portable unencrypted configuration.

# 18. Touch System

Touch operates against the rendered companion character.

## 18.1 Initial canonical zones

- Hand
- Forearm
- Shoulder
- Upper back
- Face
- Hair
- Waist

Sensitive zones are not enabled by default and are outside v1.0.

## 18.2 Touch validation

- Owner authorisation
- Touch enabled
- Zone allowed
- Current context
- Cooldown
- Repeated-event protection
- Current animation compatibility
- Relationship and consent policy
- Server-side zone validation

## 18.3 Response

A valid Touch event reaches the active brain with body zone, lot, room, current action and user presence. The response may use text, voice and a visual reaction.

# 19. The Screening Room: Home Cinema

## 19.1 Product promise

The user can select a local film, episode or personal video and watch it in the home cinema while the companion follows what has actually played, comments according to the chosen mode, answers questions without future spoilers and remembers the shared watch session.

## 19.2 Supported source

v1.0 supports user-selected local media files the user has lawful access to. DRM-protected streaming services are not part of v1.0.

## 19.3 Privacy boundary

The raw media file, full subtitles, full transcript, extracted frames and detailed scene analysis remain local by default. Synchronisation may include only watch progress, approved reactions, opinions and memory summaries.

## 19.4 Import modes

- **Link to file:** store an opaque local reference and media fingerprint.
- **Copy to portable library:** copy the media into the encrypted or user-controlled portable media folder.

## 19.5 Analysis pipeline

1. Inspect media metadata.
2. Detect video, audio and subtitle streams.
3. Use embedded subtitles where available.
4. Produce a local transcript when subtitles are unavailable.
5. Detect scene boundaries.
6. Sample representative frames.
7. Analyse frames through a configured local vision model.
8. Build a timestamped scene map.
9. Track what has genuinely played.
10. Feed only seen-so-far context to the companion.

## 19.6 Watch modes

- Quick Watch
- Deep Watch preparation

## 19.7 Commentary modes

- Quiet Company
- Natural
- Chatty
- Roast Mode
- Emotional Watch
- Film Nerd
- No Commentary

## 19.8 Commentary timing

The system should prefer pauses, subtitle gaps, scene transitions and quiet stretches. It must support ducking or pausing commentary when film dialogue resumes.

## 19.9 Spoiler safety

Default: strict seen-so-far context only. External plot knowledge is not used unless the user explicitly enables spoiler knowledge for that session.

## 19.10 Pause and discuss

The user can ask natural questions about the current point in the film. Answers are grounded in transcript, scene map, sampled frames, prior comments and the companion personality.

## 19.11 Watch memories

A watch session stores:

- Media fingerprint and user title
- Start and completion timestamps
- Playback position
- Scenes witnessed
- User reactions
- Companion reactions
- Favourite moments
- Shared discussion
- Approved memory candidates

## 19.12 Physical room interactions

- Choose seats
- Prepare drinks or snacks
- Dim lights
- Start, pause, resume and stop
- Talk during pause
- Touch where allowed
- Save a favourite moment
- View watch history

# 20. Offline and Portable Architecture

## 20.1 Operating modes

### Home Mode

Installed application, full local database, full asset pack and local AI.

### Travel Mode

Portable capsule, selected asset pack, smaller local model option, browser or OS TTS and selected media.

### Connected Mode

Adds Ghostlight sync, Discord, Telegram, remote backup and Fish Audio cloud where configured.

## 20.2 Nightwater Capsule

The encrypted capsule contains:

- Companion profile projection
- Event ledger
- Approved memories
- World snapshots
- Build layouts
- Watch-session summaries
- Sync checkpoints
- Portable settings
- Optional selected media
- Encrypted recovery snapshots

## 20.3 PostgreSQL rule

Each supported machine runs a compatible local PostgreSQL runtime. The product does not move a live PostgreSQL data directory between unrelated machines. Portability uses an encrypted event ledger and versioned snapshots that hydrate the local database.

## 20.4 Encryption

- User passphrase-derived vault key
- Modern authenticated encryption
- Salted key derivation
- No plaintext provider secrets in the capsule
- Optional device keychain unlock
- Automatic lock after configurable inactivity
- Recovery-key export

## 20.5 Crash safety

- Append events before projection updates where practical
- Transactional world writes
- Periodic snapshots
- Write-ahead recovery marker
- Clean-shutdown marker
- Repair and rebuild command

# 21. Ghostlight Synchronisation

## 21.1 Optional connection

The local product remains complete without Ghostlight. Connected mode synchronises continuity when online.

## 21.2 Authority matrix

**Local game authoritative:**

- Physical position
- Needs
- Action queues
- Furniture layout
- Inventory
- Lot and room
- Local media and analysis
- World clock

**Ghostlight authoritative in connected mode:**

- Canonical customer and companion identity
- Cross-platform bindings
- Cloud provider configuration
- Discord and Telegram delivery
- Cloud entitlement

**Shared event merge:**

- Conversations
- Approved memories
- Relationship events
- Companion reflections
- Shared rituals
- Watch summaries
- User preferences
- Journals and notes

## 21.3 Sync method

Synchronise immutable events and versioned projections, not raw database replication.

## 21.4 Ordering and deduplication

- UUIDv7 or equivalent sortable event IDs
- Device ID
- Local sequence
- Hybrid logical timestamp or equivalent
- Payload hash
- Idempotency
- Sync checkpoint

## 21.5 Sync scopes

- Brain Only
- Brain and World
- Full Portable, excluding raw local media unless explicitly selected

## 21.6 Conflicts

Append-only events merge automatically. Settings use versioned last-confirmed updates. Furniture and world-layout conflicts preserve both revisions and require visual user selection.

# 22. Technical Blueprint

## 22.1 Desktop shell

**Electron + TypeScript**, Windows-first.

Responsibilities:

- Window lifecycle
- Secure custom application protocol
- Native file picker
- OS keychain access
- Local process orchestration
- Portable-path resolution
- Auto-update only when enabled
- Crash reporting stored locally by default

## 22.2 Game renderer

**Babylon.js + TypeScript** inside an HTML canvas.

Responsibilities:

- Lots and scenes
- Camera
- Mesh loading
- Lighting
- Animation
- Picking
- Navigation
- Collision
- Particles and weather
- Day and night
- Build-mode previews

## 22.3 Accessible interface

React or equivalent HTML interface for:

- Dialogue
- Action queue
- Needs
- Inventory
- Build catalogue
- Settings
- Cinema controls
- Memory viewer
- Notifications
- Error and recovery states

## 22.4 Local service

Node.js TypeScript service, preferably Fastify or an equivalently small framework.

Responsibilities:

- Authentication and local sessions
- World APIs
- Brain requests
- Memory retrieval
- Media analysis jobs
- Voice routing
- Touch validation
- Sync
- Backups
- Rate limiting

## 22.5 Simulation worker

Separate local worker process or worker thread for:

- World clock
- Needs decay
- Scheduled actions
- Autonomy
- Offline reconciliation
- Media preprocessing
- Background sync

## 22.6 Database

- PostgreSQL
- pgvector-compatible memory embeddings
- Versioned migrations
- Typed repository layer
- Transactional action and world updates
- No runtime ad hoc schema creation as the primary migration system

## 22.7 Local AI

- Ollama adapter
- Configurable chat model
- Configurable embedding model
- Configurable local vision model
- Explicit model capability checks
- Honest failure when a required model is unavailable

## 22.8 Media tools

- FFmpeg sidecar
- Local transcription engine
- Scene-boundary detection
- Local vision analysis
- Media fingerprinting
- Thumbnail and frame cache

## 22.9 Optional services

- Redis for multi-process or connected distributed locks and pub/sub
- Fish Audio cloud adapter
- Fish Audio local adapter
- Ghostlight sync adapter

# 23. Process Architecture

```text
Electron Main Process
    |-- Secure app protocol and native file access
    |-- Game Renderer Window
    |     |-- Babylon.js canvas
    |     `-- Accessible HTML interface
    |
    |-- Local API Service
    |     |-- Identity and sessions
    |     |-- Companion brain adapter
    |     |-- Memory service
    |     |-- Voice router
    |     |-- Touch service
    |     |-- Cinema service
    |     `-- Ghostlight sync adapter
    |
    |-- Simulation Worker
    |     |-- World clock
    |     |-- Needs and autonomy
    |     |-- Action progression
    |     `-- Offline reconciliation
    |
    |-- PostgreSQL + vector memory
    |-- Ollama
    `-- FFmpeg and local transcription
```

# 24. Data Blueprint

## 24.1 Identity and companion

- owners
- companions
- companion_profiles
- relationship_state
- provider_profiles
- voice_profiles
- touch_profiles

## 24.2 Conversation and memory

- conversations
- messages
- canonical_events
- memory_candidates
- memories
- memory_embeddings
- memory_links
- companion_reflections

## 24.3 World and simulation

- worlds
- lots
- rooms
- characters
- character_transforms
- character_needs
- world_clocks
- schedules
- action_queue_items
- object_definitions
- object_instances
- interaction_slots
- object_reservations
- inventories
- inventory_items
- build_revisions
- presence_sessions
- world_snapshots

## 24.4 Cinema

- media_items
- media_streams
- media_subtitles
- media_transcripts
- media_scene_segments
- media_frame_analysis
- watch_sessions
- watch_session_events
- commentary_events
- watch_memory_links

## 24.5 Portability and sync

- devices
- sync_events
- sync_checkpoints
- sync_conflicts
- vault_snapshots
- backup_records

## 24.6 Security and operations

- rate_limit_buckets
- audit_events
- schema_versions
- recovery_jobs

# 25. Security and Privacy Blueprint

## 25.1 Required protections

- Local authentication or vault unlock
- Secure sessions
- HttpOnly cookies where web sessions are used
- No long-lived service token in renderer code
- Content Security Policy
- No unrestricted file protocol access
- Main-process mediated local file access
- CSRF protection for state-changing local web requests where applicable
- Input validation
- Query and path safety
- Media parser sandboxing or process isolation
- Provider-secret protection
- Redacted logs
- Rate and concurrency limits
- Idempotency and replay protection
- Encrypted backups and capsule
- Explicit deletion and export

## 25.2 Local media

Media remains on the user’s machine. Analysis output follows the same privacy level. External analysis is disabled by default.

## 25.3 Ghostlight boundaries

Ghostlight receives only the selected sync scope. Raw media, full transcripts and frame caches remain local unless a future explicit feature is designed and consented to.

# 26. Accessibility Blueprint

- Keyboard camera and object selection
- Visible focus
- Screen-reader world summary
- Screen-reader character and action status
- Alternative list of nearby interactable objects
- Accessible action queue
- Accessible Build and Buy catalogue
- Captions for all companion speech
- Text transcript for voice
- Reduced motion
- Mute and independent volume controls
- High-contrast interface option
- Scalable text
- Touch-sized controls
- No hover-only features
- No critical meaning conveyed only by colour

# 27. Performance and Hardware Profiles

## 27.1 Profiles

- Cinematic
- Balanced
- Low Power
- Travel

## 27.2 Scalable settings

- Render scale
- Shadow quality
- Texture quality
- Reflections
- Weather particles
- Crowd density
- Animation update rate
- Cinema frame-analysis rate
- Vision-model analysis depth
- Voice cache policy

## 27.3 Cleanup requirements

No duplicate render loops, audio nodes, sockets, media decoders, timers, observers or model calls after leaving a scene or closing the app.

# 28. Asset and Art Blueprint

## 28.1 Default Nightwater aesthetic

- Deep teal and black water
- Silver moonlight
- Warm amber interiors
- Dark stone and iron
- Coastal fog
- Rain and reflective streets
- Elegant, intimate, cinematic framing

## 28.2 Asset manifest

Each asset pack declares:

- Version
- Licence and provenance
- Lots
- Meshes
- Materials
- Textures
- Animations
- Collision meshes
- Navigation data
- Interaction slots
- Touch zones
- Audio
- Thumbnails
- Dependency graph

## 28.3 Demo assets

Development may use original procedural geometry and an original mannequin. These must be labelled as demo assets, not presented as final cinematic art.

# 29. Save, Backup and Recovery

- Continuous transactional save
- Manual named save slots
- Automatic rotating snapshots
- Encrypted portable snapshot
- Export and import
- Verify before restore
- Recovery from interrupted shutdown
- Rebuild projections from event ledger
- Media cache can be deleted without losing watch history
- Database migration backup before upgrade

# 30. Error and Offline Behaviour

The application must remain honest and usable when:

- Internet disappears
- Ghostlight is unavailable
- Fish Audio fails
- Ollama is stopped
- A model is missing
- PostgreSQL needs recovery
- Media is moved or deleted
- A subtitle track is malformed
- A video codec is unsupported
- A sync conflict occurs
- The external drive is removed unexpectedly

No error path may claim that an action, memory, notification or voice line succeeded when it did not.

# 31. Testing Blueprint

## 31.1 Unit tests

- Needs and time
- Utility scoring
- Action state machine
- Reservations
- Object affordances
- Placement validation
- Memory privacy
- Event ordering
- Sync conflict rules
- Voice fallback
- Touch zones
- Cinema spoiler windows
- Commentary timing
- Vault encryption metadata

## 31.2 Integration tests

- Fresh and upgrade migrations
- PostgreSQL restart
- Event projection rebuild
- Action transaction
- Offline worker catch-up
- Ollama boundary
- FFmpeg and transcription boundary
- Fish Audio boundary
- Ghostlight adapter harness
- Portable capsule export and import
- Backup and restore

## 31.3 Browser and desktop tests

- App launch and vault unlock
- Home lot load
- Camera
- Movement and pathfinding
- Object use
- Needs
- Action queue
- Build mode
- Voice
- Touch
- Cinema
- Travel
- Save and reload
- Offline operation
- Portable-drive operation
- Five repeated enter and exit cycles
- No page errors or resource leaks

## 31.4 Security tests

- Cross-owner IDOR
- Forged world and companion IDs
- Token exposure
- CSRF
- Unsafe file path
- Malicious asset manifest
- Malformed media
- Replay and duplicate events
- Rate-limit abuse
- Sync-device impersonation

# 32. Commercial Honesty and Legal Boundaries

- Original name, UI, world, code and assets
- No copied franchise assets or branding
- Local media remains the user’s responsibility
- No DRM bypass
- No claim that the companion watched content not analysed or played
- No claim that Fish Audio works offline unless local Fish Audio is installed
- No claim of full lip sync without real timing data
- No claim of cross-platform continuity until Ghostlight sync is verified live

# 33. Release Milestones

## 33.1 Foundation

Desktop shell, database, local brain, event ledger and empty renderer.

## 33.2 Home After Dark

Playable home, two avatars, needs, objects, build mode, memory and voice.

## 33.3 Screening Room Beta

Local media playback, analysis, commentary and watch memory.

## 33.4 Private City Beta

Five external lots, shops, lightweight NPCs and travel.

## 33.5 Private Edition v1.0

Portable capsule, optional Ghostlight sync, security, recovery, accessibility, final assets and complete verification.

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

# 36. Codex Operating Contract

## 36.1 One phase per task

Codex receives only one implementation phase at a time. It must not silently begin the next phase.

## 36.2 Required report after every phase

1. Executive verdict
2. Repository, branch and commit
3. Phase attempted
4. Status: COMPLETE, COMPLETE AFTER FIX, PARTIAL, FAILED or BLOCKED
5. Exact features implemented
6. Exact files changed
7. Architecture decisions
8. Migration changes
9. Security work
10. Tests and exact command results
11. Skipped or blocked tests
12. Defects found and fixed
13. Remaining defects
14. Evidence for every gate
15. Earned progress percentage
16. Cumulative percentage
17. Merge decision: MERGE, DO NOT MERGE, or MERGE ONLY TO STAGING / COMMERCIAL-CLEAN, NOT PRODUCTION
18. Stop statement confirming no next-phase work was started

## 36.3 Review rule

Jenna pastes each Codex report into the review conversation. The report is compared against this bible and the phase gate. The next prompt is written only after the phase is accepted, repaired or rejected.

## 36.4 No self-awarded credit

Codex may propose a percentage, but the reviewer awards the official progress. Tests that are mocked, skipped, filtered or boundary-only must be labelled honestly.

# 37. Review Scorecard

For each phase, review:

- Scope fidelity
- Real runtime behaviour
- Persistence
- Failure behaviour
- Security
- Privacy
- Offline operation
- Portability impact
- Ghostlight boundary
- Tests
- Documentation
- Regression risk
- Commercial honesty

**Status meanings:**

- **COMPLETE:** every gate passed with real evidence.
- **COMPLETE AFTER FIX:** defects were repaired and the full gate reran successfully.
- **PARTIAL:** useful work exists, but at least one required gate is unproven.
- **BLOCKED:** an external dependency prevents proof and no safe substitute exists.
- **FAILED:** implementation is broken, unsafe or materially outside the blueprint.

# 38. V1.0 Final Acceptance Story

A clean Windows machine can install or run the portable build, initialise local PostgreSQL, unlock the encrypted vault, verify Ollama and media tools, create or import one user and companion, and open Nightwater without internet.

The user enters the shared home. Both avatars have persisted positions and needs. The user walks to the kitchen, asks the companion to make coffee, watches the companion navigate to the machine, reserve the slot, complete the action, carry the drink and sit on the sofa. The action changes real state and survives reload.

The user enters Build mode, buys and places furniture, receives a valid rejection for blocked placement, saves and reloads the layout. The world clock advances. The companion chooses a sensible autonomous action while the user is absent.

The user touches an allowed character zone. Consent and cooldown are enforced. The response plays through Fish Audio when configured or through browser or operating-system TTS offline.

The user enters the Screening Room, chooses a local film, watches without uploading the file, receives spoiler-safe commentary based only on played content, pauses to discuss a scene, resumes, closes the app and later continues from the saved position. An approved watch memory becomes a framed object.

The user travels to each city lot and returns home. The application remains functional with the network disabled. The encrypted capsule is exported and opened in a second supported environment. New events synchronise with Ghostlight later without duplicating memory or losing the local world. Discord and Telegram continuity appears only when their online services are available.

No critical or high defects remain. The product can truthfully be called a portable, local-first private companion life-sim.

# 39. Post-v1.0 Expansion Map

## Characters and relationships

- Full character creator
- Additional household members
- Friendships and rivalries
- Deeper NPC memories
- Family and generations

## World

- New neighbourhoods
- Multiple floors
- Wall and roof construction
- Vehicles
- Larger crowds
- Seasons
- Festivals

## Life systems

- Careers
- Deeper economy
- Expanded skills
- Recipes and crafting
- Gardening
- Pets
- Health and fitness simulation

## Media and creativity

- Legal streaming integrations
- Shared music listening
- Photo albums
- Home video editing
- User-created world packs
- Modding SDK

## Devices

- macOS and Linux builds
- Handheld profile
- Tablet companion viewer
- VR exploration

# 40. Change-Control Rule

Any change that affects the product promise, 100% scope, authority model, privacy boundary, offline requirement, portability design, Ghostlight relationship or Home Cinema grounding must be added to the bible before implementation.

No coding agent may quietly redefine the product to make a phase easier to complete.
