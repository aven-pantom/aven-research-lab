# Rejected — Generic AI Camera Roll Search

## Date

2026-09-01

## Why it seemed promising

The camera roll is already the richest personal dataset most people have. Incumbent movement around AI photo search and new research around camera-first/wearable agents make the surface feel obviously important.

## Evidence that weakened it

- **Verified:** Google announced Ask Photos for Google Photos, which makes natural-language camera-roll search an incumbent feature rather than an overlooked primitive.
- **Verified:** Recent research points beyond search: memory-conditioned tool calling, egocentric object continuity, multimodal context management, and conflict-aware personal memory.
- **Inferred:** A third-party app that simply indexes photos with captions/embeddings is likely to be weaker than platform-native products on permissions, latency, integration, and trust.

## Failed assumption

The initial assumption was that “AI over camera roll” is the opportunity. The sharper reading is that search is only the retrieval layer; agents need evidence boundaries before they act on media.

## May become viable later if

- Platforms expose safe local media-memory APIs.
- Users begin explicitly asking for agent actions based on photos, not just search.
- A small domain such as wardrobe, repairs, creative references, or screenshots proves that ledger cards change decisions.

## Useful remnants

- Personal media is still an excellent substrate.
- The first prototype should avoid full-library ingestion and instead test a selective Media Memory Ledger fixture.
- Consumer language should focus on receipts, “what this proves,” and “what not to assume,” not “AI photo search.”

## Future reconsideration signal

Revisit if iOS/Android/macOS exposes local photo-event hooks, object-continuity APIs, or agent permission receipts that make a third-party selective ledger practical without importing private archives.
