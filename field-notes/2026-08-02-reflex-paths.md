# Field Notes — 2026-08-02 — Reflex Paths

- Signal: A 2026-07-30 arXiv cluster around computer-use agents is unusually dense: OSReward, local inference-time scaling, correct-but-late GUI agents, benchmark mis-scoring, Qwen-UI-Agent.
- Phrase worth preserving: **correct but late**. It names a failure mode that generic accuracy metrics hide.
- Interpretation: Some agent failures are timing/control failures, not intelligence failures.
- Useful distinction: slow planner vs reflex path vs transition verifier vs flight recorder.
- Possible primitive: `Reflex Path` — scoped, expiring, local policy for a narrow interface condition.
- Strong product connection: Hermes/Aven background tasks should eventually expose which reflex-like automatic behaviors are armed, especially around stop/undo/wait/retry.
- Challenge: a reflex layer can become unsafe hidden automation unless every reflex has scope, forbidden actions, expiry, fallback, and receipt.
- Experiment idea: Playwright microbench with transient modal, disappearing button, focus trap, delayed spinner, and double-submit guard.
- Adjacent prior Vibes: Agents Need Transition Tests; Agents Need Flight Recorders; Agents Need Undo Gravity; Agents Need Borrowed Rooms; Agents Need Peripheral Vision.
