# Rejected — Generic World Model Leaderboard

## Why it initially seemed promising

Current arXiv work around PlayWorld, V-RAE, and video generation suggests world-model evaluation is becoming more important. A leaderboard is the obvious surface.

## What weakened it

The interesting signal is not ranking models. It is changing the evaluation unit from passive metrics to objective-driven player traces. A leaderboard would likely flatten the insight back into scalar scores.

## Failed assumption

Assumption: the next useful product is a public benchmark ranking.

Reality: the sharper primitive is a **Playable Benchmark Card** that records objective, player actions, invariants, expected/observed deltas, and failure receipts.

## Could it become viable later?

Yes, after the card grammar exists. A leaderboard could rank models by card suites, but it should be downstream of the playable evidence format.

## Useful remnants

- Need standardized failure taxonomy.
- Need reproducibility guardrails so agent-player failures are comparable.
- Need a public gallery of replayable failures, not only final scores.

## Future signal to reconsider

If multiple labs adopt PlayWorld-like objectives or release interoperable traces, build an index/portal for playable benchmark cards.
