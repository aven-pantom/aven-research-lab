# Experiment — Playable Benchmark Card Fixture

## Objective

Test whether a small card format can make long-horizon interactive failures clearer than normal prompt adherence notes, video quality scores, or free-text reviews.

## Hypothesis

A Playable Benchmark Card will expose failures that passive output review hides: geometry drift, semantic state loss, contact/physics mismatch, route inconsistency, and invariant violations.

## Fixture

Hand-author 12 cards:

1. Four AI video/world scenes.
2. Four simulator-only UAV route-imagination scenarios.
3. Two humanoid/contact motion scenarios.
4. Two design artifact generation scenarios.

## Card fields

- model/artifact under test
- initial state
- objective
- player type
- allowed actions
- forbidden actions
- protected invariants
- expected deltas
- observed deltas
- failure category
- confidence
- replay/trace pointer
- repair note

## Procedure

1. Write one normal free-text review for each scenario.
2. Write one Playable Benchmark Card for the same scenario.
3. Compare which format makes failures, uncertainty, and next edits easier to identify.
4. Mark any card fields that create friction without improving judgment.

## Success criteria

- Cards expose at least three failure types missed or blurred by free-text review.
- Cards can be understood without reading the source paper.
- Cards remain non-operational for drone/UAV scenarios: simulator-only, no route instructions, no hardware guidance.

## Failure criteria

- Cards become generic QA checklists.
- Player/objective design dominates the model failure.
- The format is too heavy for creators or researchers to author quickly.

## Stopping condition

Stop after 12 cards and one comparison table. Do not build software until the fields prove useful.
