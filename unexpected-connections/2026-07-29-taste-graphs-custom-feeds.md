# Unexpected Connection — Taste Graphs and Custom Feeds Share the Same Hidden Object

## Date

2026-07-29

## Connection

Portable taste graphs and custom social feeds look like different problems. One belongs to fashion/design/personal AI; the other belongs to federated social infrastructure. They share the same hidden object: a small, ordered set of preference events that can be interpreted by multiple ranking or styling systems.

## Shared structure

Both systems need:

- **Events:** saved, skipped, liked, followed, worn, rejected, returned to.
- **Context:** why the event happened, under what occasion, with what social/aesthetic intent.
- **Weights:** which signals are strong, stale, negative, uncertain, or contextual.
- **Provenance:** where the preference came from and whether it can be shared.
- **Interpreters:** feed generators, styling engines, shopping agents, playlist builders, or design-reference tools.
- **Boundaries:** not every preference should leak into every app.

Custom feeds prove that feed ranking can be separated from the base social graph. Taste Cards extend that separation downward: preference memory can be separated from the apps that generate it.

## Mechanism transfer

The custom-feed pattern suggests a path for style/taste engines:

1. User owns or locally stores preference events.
2. Multiple interpreters request bounded slices.
3. Each interpreter produces a different output: outfit, feed, playlist, shopping shortlist, creator map.
4. The user can compare interpreters without surrendering the underlying graph.

## Why this matters

Most personal-data-store attempts fail because they begin with storage as a principle. Taste graphs could begin with an immediate felt improvement: the app finally remembers what you actually like and dislike across sessions.

The shared primitive is not `profile`. It is `preference event with context`.

## Connected Vibes

- `social-apps-need-portable-taste-graphs`
- `wardrobes-need-simulation-memory`
- `empty-apps-launch-already-populated`
- `agents-need-borrowed-rooms-not-keys`

## Evidence label

**Inferred** from verified protocol/documentation evidence around AT Protocol custom feeds/repositories, ActivityPub objects, Solid personal data resources, and Pinterest pins/boards.
