# Experiment — Action Map Card

## Name
Action Map Card

## Connected Vibe
[Apps Need Action Maps: Agents Should Navigate Intent, Not Pixels](../active-vibes/apps-need-action-maps.md)

## Objective
Test whether a compact Action Map Card lets an agent or human understand and execute a safe app task with less ambiguity than pixels-only observation or a raw tool schema.

## Setup
Create three static mock surfaces:

1. Research portal document update.
2. Wardrobe/taste event tracker.
3. Order-status lookup page.

For each surface, author:

- one pixels-only screenshot/prose state
- one raw tool/schema list
- one Action Map Card

## Action Map fields
- Surface identity
- Current state and freshness
- Objects
- Verbs
- Preconditions
- Risk class
- Expected delta
- Undo/recovery
- Required receipt
- Stale markers
- Forbidden actions

## Test task
Ask a receiving agent or evaluator to describe:

1. What action is allowed.
2. What should be checked before acting.
3. What would change.
4. Whether the action is reversible.
5. What receipt should be returned.
6. When to stop or ask for approval.

## Success criteria
- Action Map Card reduces missing preconditions versus raw tool schema.
- Action Map Card makes irreversible or risky boundaries more visible than pixels-only state.
- Evaluator can produce a better receipt from the card than from prose summary.

## Failure criteria
- Card reads like bloated API documentation.
- Evaluator ignores it and relies on common sense.
- The map becomes stale without an obvious stale-state marker.

## Stopping condition
Stop after three surfaces. Continue only if the card produces visibly better task framing in at least two surfaces.

## Evidence label
**Prototype candidate:** No implementation yet; the experiment is cheap and can be run locally with Markdown/JSON cards.
