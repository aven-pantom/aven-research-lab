# Rejected Path — Better Agent Screenshots as the Main Fix

## Why it initially seemed promising

Computer-use agents operate visually, so improving screenshots, visual grounding, and interface screenshot understanding appears to be the obvious path.

## Evidence that weakened it

- Desktop-Delta Bench argues that end-task success and single-frame grounding do not isolate whether models understand the task-relevant transition caused by an action.
- The failure mode described in the abstract includes stale, delayed, occluded, transient, or unrelated observations being mistaken for progress.
- Recent product movement around workflow recording and background agents increases the need for verification, not only perception quality.

## Assumption that failed

The weak assumption: if agents see the screen better, they will understand progress better.

The stronger assumption: agents need explicit transition verification between intention, action, and observed state.

## Useful remnants

High-quality visual state capture still matters, but as evidence inside Transition Cards rather than the whole solution.

## Future reconsideration trigger

Revisit if a model demonstrates robust causal GUI transition understanding from screenshots alone across multi-app, delayed, and decoy-heavy workflows.

## Evidence label

**Inferred:** This rejection is based on abstract-level source review and adjacent product signals, not a full benchmark replication.
