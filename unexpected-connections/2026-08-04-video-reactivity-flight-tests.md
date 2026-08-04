# Unexpected Connection — Video Reactivity Tests and Flight-Test Cards

## Connection

AI video generation and aircraft flight testing look unrelated, but both fail when evaluation stops at appearance.

A video can look beautiful while the generated world does not react correctly to a changed action. An aircraft can look stable in a demo while the underlying envelope, margins, sensor assumptions, and recovery behavior are unknown.

## Shared structure

Both need evidence cards that separate:

1. **Command:** what was requested.
2. **State before action:** scene/vehicle conditions.
3. **Expected transition:** what should happen if the world/aircraft obeys its model.
4. **Observed transition:** what actually happened.
5. **Residual:** what did not reconcile.
6. **Envelope:** where the result is trusted, unknown, or invalid.
7. **Replay artifact:** trace, clip, log, telemetry, or timeline segment.

## Why it matters

For creative tools, this suggests a `Reaction Card` next to the timeline: not just prompt history, but expected consequence and observed consequence. For drone/autonomy research, it reinforces the lab’s existing bias toward module contracts, flight recorders, transition tests, and evidence receipts.

## Transferable mechanism

Borrow the discipline of flight-test cards for generated media:

- define the maneuver / edit,
- state expected state transition,
- capture actual transition,
- mark confidence and envelope,
- preserve replayable evidence.

The same structure can make AI video edits less opaque without pretending they are deterministic software builds.

## Evidence label

- **Verified:** WorldExam abstract explicitly distinguishes visual quality, control adherence, spatial consistency, and world reactivity.
- **Supported:** Existing lab work has repeatedly converged on transition/evidence receipts for agents and drones.
- **Inferred:** Flight-test-card structure can make generated-video failures more legible.
