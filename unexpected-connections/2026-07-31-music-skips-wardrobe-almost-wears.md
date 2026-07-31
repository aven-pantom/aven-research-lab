# Unexpected Connection — Music Skips and Wardrobe Almost-Wears

## Connection

Music recommendation systems and wardrobe/style engines appear to be different consumer categories, but they share a hidden problem: taste is often defined at the moment of refusal.

A music skip is not simply “I dislike this.” It carries timing, tolerance, context, mood, and familiarity. A track skipped after one second is different from a track skipped after two minutes. A replay is different from a save. `tunelog` is interesting because it uses skips and replays instead of asking for ratings.

A wardrobe almost-wear has the same structure. The user considered the item seriously enough to take it out, try it, photograph it, or pair it, then rejected it. That event is richer than a generic dislike because the item crossed the threshold into possibility before failing.

## Shared structure

- Both are **near-positive negative signals**: the item was plausible enough to enter attention.
- Both require **context**: mood, occasion, weather, social audience, body feel, time of day.
- Both are more useful when captured as **events**, not static ratings.
- Both become strategically stronger when owned by the user instead of trapped inside a platform.

## Transferable mechanism

Borrow the skip/replay grammar from music and apply it to style:

- skip → rejected immediately,
- partial listen → tried but failed,
- replay → repeated wear,
- save → bookmarked outfit/reference,
- save but never replay → aspirational but unused,
- playlist add → capsule/occasion set,
- mute → hard style boundary.

## Implication

Fashion taste engines should not begin with prettier try-on. They should begin with a fast way to capture almost-wears, returns, and quiet refusals. The recommendation layer comes later; the real asset is the user-owned negative taste trace.
