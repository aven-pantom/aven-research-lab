# Experiment Spec — Future-Mask Trace Card

Date: 2026-07-22

## Related Vibe

[Actions Become Video Masks](../active-vibes/actions-become-video-masks.md)

## Objective

Test whether action proposals represented as partial futures are more inspectable than text logs or low-level action traces.

## Setup

Use a low-risk environment first:

- browser UI recording;
- cursor + object canvas;
- recorded tabletop manipulation clip;
- or synthetic simulator output.

No physical robot is required.

## Inputs

- reference frame or state snapshot;
- visible controlled trajectory/mask;
- desired hidden outcome;
- forbidden regions/outcomes;
- predicted completion video or state sequence;
- actual outcome when available.

## Success criteria

- A human can identify the intended action, expected outcome, and main risk in under 30 seconds.
- The trace card exposes at least one failure mode that a text-only action log hides.
- Candidate futures can be compared side by side by reversibility, confidence, and safety.

## Failure criteria

- The visual mask is less clear than a text instruction.
- The card hides important state such as constraints, permissions, forces, or file mutations.
- The generated/predicted future looks plausible but gives no audit path for invalidity.

## Stopping condition

Stop if two different environments show that future masks add visual polish but no decision advantage over existing traces.
