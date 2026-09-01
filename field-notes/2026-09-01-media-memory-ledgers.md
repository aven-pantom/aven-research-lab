# Field Notes — 2026-09-01 — Media Memory Ledgers

## Starting signal

Recent arXiv results around personal memory, camera-first agents, egocentric video memory, multimodal history management, and wearable VLM security all point at the same hidden problem: personal media is becoming action evidence for agents, but current media libraries are not designed as evidence systems.

## Observations

- **Verified:** `LightMem-Ego` treats mobile/wearable assistants as continuous audio/visual observers and focuses on lightweight streaming multimodal memory.
- **Verified:** `Memory-Conditioned Tool Calling for Camera-First Visual Agents` makes the important move from “recognize the image” to “use personal visual memory to decide what tool to call next.”
- **Verified:** `R4DSG` argues that caption/transcript memory loses object identity and spatial change in egocentric video.
- **Verified:** `When Personal Memory Has No Single Answer` names a failure mode the lab should reuse: personal memory is often underdetermined and conflicting, not merely incomplete.
- **Verified:** `Devil in the Lens` is a necessary safety counter-signal: physical-world text seen by wearable VLMs can become adversarial instruction.
- **Verified:** Google Ask Photos is an incumbent product signal around AI over photo libraries. This makes generic photo search a bad startup primitive.
- **Verified:** GitHub API scan surfaced current local-first/personal-memory/agent projects, but proof is mostly builder activity, not consumer pull.

## Useful terms

- Camera-first visual agent
- Egocentric video memory
- Object-centric QA
- Relative 4D scene graph
- Multimodal history management
- Conflict-aware memory
- Physical prompt injection
- Media Memory Ledger Card

## Contradictions

- People capture too much media, but only a tiny subset should become durable agent memory.
- Stronger search makes it easier to find photos, but may make it harder to know whether a photo is admissible evidence for an action.
- Wearables increase capture fidelity while also increasing social and security risk.
- Personal memory needs to be useful and forgetful at the same time.

## Questions

- What media events naturally deserve cards: screenshots, purchases, returns, outfit photos, design references, before/after repairs, scans, room changes, travel context?
- Can ledger cards be generated from OS events without seeing private content?
- Is the first prototype a camera-roll tool, a creative-reference tool, or a wardrobe/fit-memory tool?
- How much can be represented as plain Markdown/JSON pointers before needing embeddings or object tracking?

## Secondary signals to watch

- Local-first Apple Health and personal AI bridge projects: same ledger pattern, different sensor.
- AI-operable video editors: timelines already behave like media ledgers for creative work.
- Semantic browser truth for agents: browser state and camera-roll state share the problem of making evidence admissible before action.

## Rejected path

Generic AI photo search is not enough. It is too close to incumbent product movement and does not expose proof limits, conflicts, expiry, privacy class, or allowed agent use.
