# Unexpected Connection — Playable World Models and Drone Future Maps

## Connection

Playable world-model benchmarks and UAV future-map planning share the same hidden structure: both ask whether an imagined future remains **actionable under interaction**.

## Shared structure

- In video world models, a player turns, walks, revisits, perturbs, or tests an object. Failure appears as geometry drift, missing ripples, forgotten occluded state, or broken interaction fidelity.
- In UAV-VLN, a navigation agent infers future spatial structure and chooses 3D waypoints. Failure appears as route decisions that do not stay consistent with imagined future maps.
- In both cases, fixed visual quality is insufficient. The relevant evidence is a trace: objective, action sequence, expected state, observed state, residual, and confidence.

## Transfer

`PlayWorld`'s Agent Player idea could inspire simulator-only UAV evaluation cards: give the agent a future-map objective and record whether route imagination stays consistent. `AirForesight`'s cross-space planning consistency could inspire AI video tools: a generated scene should remain directionally/causally consistent when a player tries to use it.

## Why it matters

The bridge avoids two weak product paths:

1. Another AI video quality leaderboard.
2. Another drone route optimizer.

The stronger primitive is **Playable Evidence**: objective-driven traces that expose where a generated or imagined world stops being usable.

## Evidence label

Supported / Inferred from current arXiv abstracts for PlayWorld and AirForesight.
