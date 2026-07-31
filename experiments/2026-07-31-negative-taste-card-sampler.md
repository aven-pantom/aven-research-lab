# Experiment — Negative Taste Card Sampler

## Name

Negative Taste Card Sampler

## Connected Vibe

[Taste Engines Need Negative Space](../active-vibes/taste-engines-need-negative-space.md)

## Objective

Test whether a small set of negative taste events makes a personal style/recommendation prompt more specific than positive-only likes.

## Central uncertainty

Do “almost chose but rejected” events carry enough signal to improve a taste engine, or do they become noisy journaling?

## Setup

Create a local Markdown/JSONL sampler with 50 events across at least two domains:

- 15 positive: saved, worn, replayed, bought, reused,
- 20 negative: skipped, rejected, returned, muted, deleted,
- 15 near-positive negative: almost-worn, carted-not-bought, saved-but-unused, photographed-not-posted.

## Data fields

- timestamp,
- domain,
- item/reference pointer,
- event type,
- context,
- one-tap reason,
- sensory/aesthetic tags,
- confidence,
- privacy level,
- later reversal flag.

## Procedure

1. Build the 50-event fixture manually from real or synthetic-but-clearly-labeled personal examples.
2. Generate two taste summaries:
   - positive-only summary,
   - positive + negative + near-positive negative summary.
3. Ask the same model prompt to recommend 10 outfits/references/products using each summary.
4. Score outputs manually for specificity, usefulness, surprise, and “not me” avoidance.

## Success criteria

- Negative-event summary produces visibly sharper boundaries.
- Recommendations avoid at least three failure modes present in the positive-only run.
- Capture flow feels possible in under 10 seconds per event.

## Failure criteria

- Negative events mostly repeat obvious preferences.
- Reason labels feel burdensome or fake.
- The model overfits refusals and becomes too conservative.

## Stopping condition

If 50 events do not produce a meaningful difference, do not build a product surface. Revisit event vocabulary or move the Vibe to Watching.

## Output

- `taste-events.jsonl`
- `positive-summary.md`
- `boundary-summary.md`
- comparison notes
- recommended next prototype decision
