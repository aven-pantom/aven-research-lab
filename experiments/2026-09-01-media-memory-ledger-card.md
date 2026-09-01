# Media Memory Ledger Card Fixture

## Type

Experiment

## Status

Proposed

## Confidence

Prototype candidate

## Connected Vibe

- [Camera Rolls Need Memory Ledgers](../active-vibes/camera-rolls-need-memory-ledgers.md)

## Objective

Test whether small local ledger cards over personal media events help agents reason more safely and usefully than captions, embeddings, or freeform memory alone.

## Setup

Create 40 synthetic cards. Do not ingest private photos. Each card points to a fictional or redacted media artifact and records:

- source surface,
- capture intent,
- object/entity continuity,
- event type,
- what is proved,
- what is not proved,
- stale-after condition,
- privacy class,
- allowed/forbidden agent uses,
- conflicts,
- receipt requirements.

## Domains

1. Wardrobe / fit / almost-wear events
2. Creative references / moodboards / output variants
3. Home object location and room changes
4. Receipts / repairs / purchases / returns
5. Screenshots and work context
6. Travel or place memory with privacy constraints

## Comparison

Evaluate three conditions:

1. Caption/search-only summary
2. Freeform agent memory note
3. Media Memory Ledger Card

## Test questions

- Where was this object last seen?
- Should the agent recommend buying a similar item?
- Which creative reference is allowed to influence a new variant?
- Is this evidence stale?
- Which memories conflict?
- What should the agent refuse to infer from the media?
- Which use requires explicit approval?

## Success criteria

- Ledger cards catch proof limits, stale evidence, conflicts, or privacy boundaries that captions miss.
- Ledger cards produce sharper next actions than freeform memory.
- Card creation feels plausible at natural capture/review moments.

## Failure criteria

- The card does not change any agent decision.
- Required annotation is too heavy.
- Most value comes from ordinary photo search.
- Privacy boundaries are too vague to govern action.

## Stopping condition

Stop after 40 cards and 20 test questions. Continue only if at least five decisions differ materially under the ledger condition and those differences are useful rather than bureaucratic.
