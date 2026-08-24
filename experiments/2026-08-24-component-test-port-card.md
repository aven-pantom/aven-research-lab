# Experiment — Component Test Port Card Fixture

## Objective

Test whether component-level cards make GUI-agent work safer and more diagnosable than raw screenshots, accessibility trees, or prose instructions alone.

## Hypothesis

A small Component Test Port Card will reduce wrong actions, redundant observations, missed state transitions, and unclear rollback decisions for common UI widgets.

## Fixture

Hand-author 12 safe local components:

1. dropdown
2. date picker
3. modal
4. table row action
5. file upload mock
6. settings toggle
7. permission dialog mock
8. cart quantity mock
9. rich text editor
10. multi-select
11. drag/drop list
12. disabled payment-like mock form

Each component receives a card with:

- role
- handles / selectors / accessibility anchors
- allowed probe actions
- forbidden actions
- expected transitions
- side-effect class
- reset path
- timing hazards
- receipt schema

## Method

1. Build a static local HTML fixture with resettable mock state.
2. Run the same task set in two conditions:
   - normal app + natural-language instruction
   - app + Component Test Port Cards
3. Capture action logs and final state.
4. Score each run for success, wrong action, unnecessary observation loops, side-effect clarity, rollback clarity, and human-review speed.

## Success criteria

- Cards expose at least three failure modes that normal traces hide.
- Cards reduce ambiguous human review for component failures.
- Cards identify at least one component where agent authority should be withheld.

## Failure criteria

- Cards add reading overhead without improving decisions.
- Cards drift from actual component behavior.
- The useful information is already available from standard accessibility metadata or Playwright tests.

## Stopping condition

Stop after 12 components and one comparison run. Do not build a framework until the card format proves useful.

## Connected Vibes

- Apps Need Component Test Ports
- Agents Need State Barometers
- Agents Need Transition Tests
- Apps Need Action Maps
- Agents Need Tool Output Diets
- Agents Need Workspace Cartography