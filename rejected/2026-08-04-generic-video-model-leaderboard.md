# Rejected Path — Generic AI Video Model Leaderboard

## Why it initially seemed promising

WorldExam introduces a benchmark around video/world-model reactivity. A simple direction would be to track model scores, rank tools, and publish a leaderboard-style app.

## What weakened it

- **Verified:** The paper’s abstract already positions itself as benchmark work; copying the leaderboard layer would add little original product insight.
- **Inferred:** Creators do not primarily need another abstract score. They need to know whether their specific edit produced the intended downstream reaction.
- **Supported:** Existing lab research around Transition Cards, Intent Timelines, Flight Recorders, and Drone Module Contracts points toward task-local evidence, not generic rankings.

## Failed assumption

The failed assumption is that better model comparison is the highest-leverage primitive. The sharper assumption is that reactivity needs to become visible inside the editing workflow.

## Useful remnants

A leaderboard can still be useful as background evidence, but the Vibe should focus on `Reaction Cards`: prompt/edit, pre-state, expected consequence, observed consequence, residual, confidence, and replay link.

## Future trigger for reconsideration

Revisit if video models expose standardized machine-readable evaluation traces or if creators begin shopping for models based on scenario-specific reactivity classes rather than general quality.
