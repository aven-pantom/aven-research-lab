# Source Library — Media Memory Ledgers

## Date

2026-09-01

## Primary signal

Personal AI memory research is moving from text-only recollection toward camera-first, wearable, egocentric, multimodal history. The useful thread is not “search my photos.” It is evidence-bounded personal media memory for agents.

## Sources checked

### arXiv: LightMem-Ego: Your AI Memory for Everyday Life

- URL: https://arxiv.org/abs/2607.11487
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract frames mobile/wearable assistants as continuous visual/audio perceivers and proposes lightweight streaming multimodal memory with current, short-term, and long-term organization.
- Use in Vibe: Supports the claim that everyday-life AI memory requires streaming multimodal organization rather than one-off image understanding.
- Uncertainty: Abstract-level scan only; no reproduction or device benchmark validation performed in this session.

### arXiv: Memory-Conditioned Tool Calling for Camera-First Visual Agents

- URL: https://arxiv.org/abs/2607.09822
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract states that personal visual memory can affect what a camera-first agent looks up next, using profile, short-term focus, and observations to condition tool-calling.
- Use in Vibe: Strong source for memory as action conditioning, not just retrieval.
- Uncertainty: Abstract-level scan; task construction and reported numbers were not audited.

### arXiv: R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video

- URL: https://arxiv.org/abs/2608.11017
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract says object-centric questions over long egocentric video remain difficult because caption/transcript memory rarely preserves persistent object identity or structured spatial change.
- Use in Vibe: Supports object continuity and spatial-change fields in Media Memory Ledger Cards.
- Uncertainty: Abstract-level scan; implementation details and benchmark quality not audited.

### arXiv: When History Is Multimodal: Rethinking Context Management for Long-Horizon Agents

- URL: https://arxiv.org/abs/2608.29897
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract frames bounded context management for long-horizon agents and compares passive/active management of multimodal histories.
- Use in Vibe: Supports the pressure for compressed, role-aware memory objects rather than raw history dumps.
- Uncertainty: The exact conclusions require full paper reading.

### arXiv: When Personal Memory Has No Single Answer

- URL: https://arxiv.org/abs/2608.13921
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract states personal memories can conflict because preferences depend on context, behavior evolves, and sources can conflict; it challenges single-answer recovery from memory.
- Use in Vibe: Supports conflict-aware ledger cards and refusal/ask behavior when memory is underdetermined.
- Uncertainty: Full benchmark scope not audited.

### arXiv: Devil in the Lens

- URL: https://arxiv.org/abs/2607.10269
- Checked: 2026-09-01 via arXiv API.
- Evidence: **Verified.** The abstract analyzes physical prompt injection against VLM-enabled wearable devices.
- Use in Vibe: Contradicting/safety evidence. Camera-first memory must classify adversarial or untrusted environmental text before using it as instruction/evidence.
- Uncertainty: Defense details not reviewed.

### Google Blog: Ask Photos

- URL: https://blog.google/products/photos/ask-photos-google-io-2024/
- Checked: 2026-09-01 with HTTP status 200; page title observed: “Ask Photos: New AI feature coming to Google Photos.”
- Evidence: **Verified.** Shows incumbent product movement around natural-language AI over personal photo libraries.
- Use in Vibe: Supports product pressure toward camera-roll AI.
- Uncertainty: Product availability and current rollout status were not independently verified beyond page access.

### Apple Newsroom: Apple Intelligence comes to iPhone, iPad, and Mac

- URL: https://www.apple.com/newsroom/2024/09/apple-intelligence-comes-to-iphone-ipad-and-mac-starting-next-month/
- Checked: 2026-09-01 with HTTP status 200.
- Evidence: **Verified.** Apple announced platform-level personal intelligence features; relevant as ecosystem pressure, not proof of this Vibe.
- Use in Vibe: Indicates platform owners are embedding AI across personal devices.
- Uncertainty: This session did not verify exact current feature set or regional/device availability.

### Meta: Introducing Orion

- URL: https://about.fb.com/news/2024/09/introducing-orion-our-first-true-augmented-reality-glasses/
- Checked: 2026-09-01 with HTTP status 200; page title observed.
- Evidence: **Verified.** Confirms serious incumbent work on AR glasses as a future wearable perception surface.
- Use in Vibe: Supports the egocentric/wearable capture pressure.
- Uncertainty: Orion is not proof of consumer adoption.

### GitHub API scan

- Checked: 2026-09-01.
- Queries: `personal AI memory agent local-first`, `AI video editor timeline agent`, `fashion AI wardrobe outfit app`, `browser agent mcp computer use`, `local first AI app agent`.
- Evidence: **Verified API observations.** Examples surfaced included `labazhou2024/memexa`, `Dpungee/jarvis-local-public`, `fatihkutuk/neo`, `MartinDelophy/ai-video-editor`, `0xsline/OpenChatCut`, `ronak-create/FableCut`, `leeguooooo/iphone-use`, and `Imagine-That-Ai/BurnBar`.
- Use in Vibe/Trend Sparks: Signals active builder movement around local-first personal memory, AI-operable media tools, phone/computer-use agents, and fashion AI.
- Uncertainty: GitHub stars and descriptions prove activity/positioning, not durable demand or production quality.

### Hacker News Algolia scan

- Checked: 2026-09-01.
- Queries: `AI memory`, `AI video editor`, `local first AI`, `AI agents`, `fashion AI`.
- Evidence: **Verified API observations.** Recent items included posts about AI memory optimization, persistent engineering context, local-first AI agent IDEs, a personal AI agent on an old Android phone, semantic browser truth for agents, and MCP/AI video editor projects.
- Use in Trend Sparks: Weak but useful public-attention signal.
- Uncertainty: HN visibility is not market validation.

## Rejected path notes

- Generic “AI camera roll search” is too obvious and likely owned by Google/Apple.
- Always-on wearable memory without local custody is high-risk and socially brittle.
- A third-party app that ingests every private photo is not the right first prototype.
- The sharper primitive is a selective local ledger over meaningful captures/events.
