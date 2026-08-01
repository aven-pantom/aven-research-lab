# Experiment — Intent Timeline Card

## Objective

Test whether a compact timeline schema can preserve useful creative intent for a 15-second AI-assisted short-form video without requiring a full editor implementation.

## Hypothesis

A creator can reconstruct, revise, or explain a short video more effectively from an Intent Timeline Card than from a flattened export plus freeform notes.

## First test

1. Select or mock a 15-second vertical video concept.
2. Create a JSON/Markdown Intent Timeline Card with:
   - source references
   - shots
   - prompt segments
   - model/tool used
   - motion parameters or natural-language motion rules
   - manual edits
   - rejected branches
   - approvals
   - export settings
   - replay confidence
3. Ask a model or human editor to create one variant using only the card.
4. Compare against a variant made from the final export description alone.

## Success criteria

- The card makes at least three concrete edits easier to locate or change.
- The card preserves source and prompt attribution clearly enough for later review.
- A second variant can be generated or specified without reinterpreting the entire video from scratch.

## Failure criteria

- The card becomes longer than the creative work is worth.
- Replay is mostly fantasy because tools do not expose enough state.
- The final export description performs just as well.

## Stopping condition

Stop after one 15-second mock and one variant. Do not build an editor until the card proves it carries useful intent.

## Connected Vibe

- `active-vibes/video-tools-need-intent-timelines.md`
