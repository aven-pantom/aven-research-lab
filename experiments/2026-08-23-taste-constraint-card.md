# Experiment — Taste Constraint Card Fixture

## Purpose

Test whether raw taste artifacts become more useful when compiled into explicit, editable constraints before recommendation or generation.

## Setup

Create a synthetic but realistic fixture with 30 artifacts:

- 8 loved outfits or references,
- 6 rejected outfits or products,
- 6 almost-worn / saved-but-unused items,
- 4 fit ledger events,
- 3 room or interior references,
- 3 creator/brand-world references.

## Card schema

Each Taste Constraint Card includes:

- constraint name,
- source artifacts,
- protected properties,
- allowed mutations,
- forbidden mutations,
- context where it applies,
- negative evidence,
- contradiction / exception,
- confidence,
- expiry / review date,
- evaluation test.

## Comparison

Produce three recommendation / generation briefs from the same fixture:

1. positive-only likes and saves;
2. likes plus negative events;
3. compiled Taste Constraint Cards.

## Success criteria

Continue if the constraint-card brief is more specific, catches more obvious violations, and makes clearer variant instructions than the other two.

## Failure criteria

Stop if the cards merely restate taste adjectives, require too much manual interpretation, or do not improve review quality over a normal moodboard plus prompt.

## Risk controls

Use fictional/synthetic artifacts only. Do not use private body, purchase, or photo data in the first fixture.

## Connected Vibes

- Taste Needs Compilers
- Taste Engines Need Negative Space
- Clothes Need Fit Ledgers
- Creative Tools Need Reference Contracts
- Social Apps Need Portable Taste Graphs
