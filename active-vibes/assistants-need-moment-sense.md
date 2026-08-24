# Assistants Need Moment Sense: Help Must Arrive at the Right Instant, Not Just the Right Answer

## Name

Assistants Need Moment Sense: Help Must Arrive at the Right Instant, Not Just the Right Answer

## Signal

**Verified:** arXiv paper `2608.21360`, *OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs*, published 2026-08-21, frames real-time omni-modal assistants as interactive systems that must combine visual state, user goals, and prior knowledge. Its abstract says current models struggle with visual prompts, historical context across turns, and delaying response until the target event.

The surprising part is not another benchmark. It is the failure category: timing. The assistant can understand language yet still be useless because it speaks before the hinge moment, misses a gesture, or gives help after the window has closed.

## Intuition

AI help is currently designed like answering. Real assistance is more like choreography. A useful helper needs a sense of when the user is in a reversible planning phase, an active manipulation phase, a fragile timing phase, or a post-action reflection phase.

The missing primitive is not only better vision or longer memory. It is a local temporal contract: observe, wait, interrupt, guide, stay silent, or escalate based on the moment.

## Core Question

Can personal and creative assistants learn a compact **Moment Sense** that decides when help should arrive, wait, or stay silent before optimizing what the help says?

## Emerging Capability

Always-on omni-modal assistants that can watch a live task, infer the current phase, and choose an intervention mode with receipts: silent observation, pre-step cue, just-in-time correction, emergency stop, deferred debrief, or handoff.

## Current Assumption

If a model understands the screen/video/audio and has enough context, it can help through natural-language turns.

## Challenged Assumption

Assistance quality may depend less on semantic correctness than on temporal fit. A correct answer at the wrong moment can be interruption, noise, or harm.

## Enabling Changes

- **Verified:** OmniAssistBench explicitly evaluates assistant-style interaction rather than passive video understanding.
- **Verified:** LiveKit Agents is an actively maintained open-source framework for real-time voice/video AI agents, observed via GitHub API on 2026-08-24 with 13,145 stars and a 2026-08-24 push timestamp.
- **Verified:** screenpipe describes itself as local continuous screen recording that provides context to agents, observed via GitHub API on 2026-08-24 with 21,191 stars and a 2026-08-24 push timestamp.
- **Verified:** Browser/computer-use tools such as `browser-use/browser-use`, `microsoft/playwright-mcp`, and `ChromeDevTools/chrome-devtools-mcp` show active tooling around agents operating live digital surfaces.
- **Inferred:** The same timing problem appears in phones, browser agents, creative tools, tutorial assistants, design review, and real-time collaboration.

## Missing Primitive

**Moment Sense Card:** a small task-scoped state object that declares:

- current activity phase,
- observed cue,
- timing horizon,
- allowed intervention modes,
- forbidden interventions,
- interruption cost,
- consequence of waiting,
- confidence,
- expiry,
- receipt after intervention.

## Adjacent Fields

- Human-computer interaction
- Real-time tutoring systems
- Voice assistants
- Computer-use agents
- Mobile/resident agents
- Notification and attention management
- Aviation crew resource management
- Creative tooling and live critique
- Assistive technology
- Agent observability

## Existing Evidence

- **Verified:** OmniAssistBench says interactive assistants are hard to evaluate because model responses dynamically change subsequent user actions, unlike static offline datasets.
- **Verified:** The same paper reports current models frequently provide incorrect or incomplete answers, struggle with visual prompts, fail to maintain historical context, and fail to delay response until the target event.
- **Verified:** LiveKit Agents positions real-time voice/video agents as a practical framework, indicating product infrastructure for live assistance exists.
- **Verified:** screenpipe positions local continuous computer history as context for agents, indicating a substrate for persistent observation exists.
- **Verified:** HN scan on 2026-08-24 showed recent posts around agent latency, browser agents, AI video workflows, and agents coordinating worktrees, suggesting active public attention around timing and multi-surface autonomy.
- **Supported:** Prior lab Vibes around Reflex Paths, Attention Airlocks, Peripheral Vision, State Barometers, and Task Models all point to the same constraint: intervention must be phase-aware and state-aware, not only instruction-aware.

## Contradicting Evidence

- **Unknown:** OmniAssistBench is an abstract/API-level scan here, not a full paper reproduction; details of dataset design and evaluation categories may weaken or sharpen this Vibe.
- **Inferred:** GitHub stars and HN posts prove attention, not durable demand or correctness.
- **Contradicted:** Many assistant workflows still succeed as asynchronous chat, summaries, or post-hoc critique. Moment Sense matters most when the task is live, fragile, embodied, creative, or irreversible.
- **Unknown:** Always-on observation may be rejected if privacy, battery, latency, and social awkwardness are not solved.

## Open Questions

- What are the smallest universal activity phases: planning, searching, manipulating, committing, waiting, recovering, debriefing?
- Can Moment Sense be learned from correction events, or must users explicitly teach interruption rules?
- How should an assistant prove it waited for the right moment without exposing invasive raw recordings?
- Which tasks truly need live intervention versus deferred review?
- Can a local resident model classify moments cheaply enough to avoid cloud latency?

## Strange Implications

- A personal assistant may need a **silence model** as much as a response model.
- The next “notification setting” could be a task-phase contract, not an app toggle.
- Creative tools might become live studios where critique is delayed until the fragile making phase ends.
- Browser agents may need to know when not to click even if the next action is semantically obvious.
- Human-agent trust could be built by good waiting, not just impressive answers.

## Possible Experiments

1. **Moment Sense Card Fixture:** Hand-author 30 short task moments across cooking/tutorial, browser checkout, design review, coding, phone notifications, and video editing. For each, label phase, allowed intervention, forbidden intervention, and waiting cost.
2. Compare three assistant policies: always-answer, confidence-threshold answer, and Moment Sense Card.
3. Success: the card policy reduces mistimed interruptions and catches time-critical intervention windows better than the other two.
4. Failure: if most examples collapse into generic notification priority, the primitive is too broad.

## Potential Outcomes

- Prototype: local Moment Sense simulator for screen/voice events.
- Product primitive: resident assistant interruption contracts.
- Benchmark: live-assistance timing benchmark with intervention-mode scoring.
- Interface: tiny ambient phase indicator for assistants before they speak or act.
- Research direction: temporal governance for always-on personal AI.

## Confidence

Emerging direction

## Status

Active

## Sources

- arXiv: *OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs* — https://arxiv.org/abs/2608.21360
- Project page listed in arXiv comment: https://xianyunsun.github.io/OmniAssistBench/
- GitHub: `livekit/agents` — https://github.com/livekit/agents
- GitHub: `screenpipe/screenpipe` — https://github.com/screenpipe/screenpipe
- GitHub: `browser-use/browser-use` — https://github.com/browser-use/browser-use
- GitHub: `microsoft/playwright-mcp` — https://github.com/microsoft/playwright-mcp
- GitHub: `ChromeDevTools/chrome-devtools-mcp` — https://github.com/ChromeDevTools/chrome-devtools-mcp
- Hacker News Algolia date scan for `ai agent`, `ai video`, `MCP`, and `browser agent`, checked 2026-08-24.

## Unexpected Connections

Moment Sense connects real-time AI assistants to aviation crew resource management and sterile-cockpit discipline: both are less about knowing facts than governing when speech/action is allowed. In both cases, intervention timing is a safety and trust primitive.
