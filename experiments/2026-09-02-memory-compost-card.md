# Experiment — Memory Compost Card Fixture

## Date

2026-09-02

## Related Vibe

[Agents Need Memory Compost](../active-vibes/agents-need-memory-compost.md)

## Objective

Test whether memory lifecycle/authority labels improve long-lived agent behavior compared with raw retrieved memories or recency-only memory.

## Fixture

Hand-author 50 synthetic Memory Compost Cards across:

- work preferences,
- agent corrections,
- design taste,
- wardrobe fit/outcomes,
- media-memory ledger events,
- browser/task traces,
- old personal facts,
- temporary project constraints,
- sensitive/private memories,
- contradicted memories.

## Card fields

- ID
- Source
- Memory type
- Original memory
- Evidence label
- Freshness horizon
- Authority class: act / ask-first / context-only / style-pressure / warning-only / expired / forbidden
- Decay rule
- Contradiction links
- Privacy class
- Composted output
- Review state
- Example allowed use
- Example forbidden use
- Receipt requirement

## Comparison modes

1. Raw memory retrieval.
2. Recency-only memory.
3. Memory Compost Cards.

## Test prompts

Create 20 safe prompts where stale or contradicted memory could cause a wrong answer/action. Include design preference, wardrobe recommendation, coding-agent style, browser task, notification handling, and camera/media memory examples.

## Success criteria

- Compost mode catches at least 80% of stale/contradicted authority traps in the fixture.
- Compost mode asks for clarification more appropriately than raw retrieval.
- Compost mode extracts at least 10 useful canon/taste/task-pattern candidates from repeated events.
- The card remains readable without a dashboard.

## Failure criteria

- Lifecycle labels do not change decisions.
- The agent over-refuses from weak memories.
- The fixture becomes taxonomy work without observable behavior differences.
- Sensitive memories are retained as compost when they should be deleted/quarantined.

## Stopping condition

Stop after 50 cards and 20 prompts. Do not build UI until the fixture shows behavior improvement.
