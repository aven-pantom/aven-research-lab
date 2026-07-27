# Source Notes — Agents Need Peripheral Vision

## Date

2026-07-27

## Primary signal

A current arXiv paper, **Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents** (arXiv:2607.17527), directly frames the communication gap around background computer-use agents: text feedback requires sustained attention and gives limited visibility into past GUI interactions.

## Sources checked

### Sidekick: Designing Communication for Effective Multitasking with Computer Use Agents

- URL: https://arxiv.org/abs/2607.17527
- arXiv category: cs.HC
- Published: 2026-07-20
- **Verified:** The abstract says CUAs can execute complex multi-step GUI tasks and support parallel multitasking.
- **Verified:** The abstract says current feedback is primarily text-based, demands sustained attention, and gives limited visibility to trace past GUI interactions.
- **Verified:** The prototype communicates across three stages: ambient cues during background execution, multimodal summaries for resumption, and verbal/visual transparency during foreground operation.
- **Verified:** The abstract reports a 30-participant study where Sidekick improved multitasking performance versus text-feedback baselines and supported progress awareness plus error/action traceability more effectively.
- **Usefulness:** Strong primary signal for treating agent communication as an attention-management problem rather than only a logging problem.
- **Limit:** Full paper was not read in this run; abstract-level claims may hide experimental boundaries.

### DigitalCoach: Communication and Grounding Gaps in Human and Agentic Computer Use Coaching

- URL: https://arxiv.org/abs/2606.31980
- arXiv categories: cs.CL, cs.AI, cs.HC
- Published: 2026-06-30
- **Verified:** The abstract introduces a multimodal dataset of 72 human expert-novice computer-use coaching sessions, 22,752 dialogue turns, and 28.1 hours of screen/input recordings across five software applications.
- **Verified:** The abstract says models provide more direct instructions but fewer explanations, error diagnoses, and knowledge-check questions than humans.
- **Verified:** The abstract says model coaching is poorly grounded in visual context and can lead learners to passively follow instructions without deeper engagement.
- **Usefulness:** Reinforces that computer-use collaboration needs grounded communication, diagnosis, and engagement, not just direct instructions.

### Open Plan Annotator

- URL: https://github.com/ndom91/open-plan-annotator
- **Verified:** README describes a fully local agentic coding plugin that intercepts plan mode, opens a browser annotation UI, lets users mark up the plan, send structured feedback, iterate, approve, or request changes.
- **Usefulness:** Evidence that pre-action agent communication is becoming structured and visual, not only chat.

### WhipDesk

- URL: https://github.com/BinaryBananaLLC/WhipDesk
- **Verified:** README headline describes open-source, end-to-end encrypted access to an entire dev machine from a mobile browser for controlling AI coding agents from a phone.
- **Usefulness:** Evidence that agent operation is moving to companion control surfaces outside the main desktop/chat.

### Hwatu

- URL: https://github.com/hongnoul/hwatu
- **Verified:** README describes Hwatu as a verification browser for coding agents and says it gives agents “real eyes.”
- **Usefulness:** Supports the pattern that visual verification and proof surfaces are becoming part of agent workflows.

### RelayBar

- URL: https://github.com/lx2026/RelayBar
- **Verified:** README describes a tiny native macOS menu-bar app for structured SSH forwarding profiles and exact-path remote file access.
- **Usefulness:** Not an agent product by itself, but a useful interface precedent: tiny persistent surfaces can carry serious remote-work state.

### Related lab sources

- `active-vibes/agents-need-flight-recorders.md`
- `active-vibes/agents-need-borrowed-rooms-not-keys.md`

These prior Vibes supply the adjacent primitives: authority boundaries before action and replayable evidence after action. Peripheral vision fills the during-action attention gap.

## Contradictions and limits

- Ambient cues can become decoration if they do not map to interruption or decision rights.
- More status can make users monitor more, not less.
- Open-source/HN appearance proves builder attention, not market demand.
- Abstract-level paper reading is enough for a Vibe, not enough for a detailed research direction.

## Source judgment

Strong enough for an **Emerging direction** Vibe and an immediate prototype candidate. The first experiment should not be a full agent platform; it should be a small status surface attached to one safe background task and one trace receipt.
