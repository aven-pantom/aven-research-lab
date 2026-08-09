# Agents Need Shadow Runs: Autonomy Should Rehearse Before It Touches Reality

## Name

Agents Need Shadow Runs: Autonomy Should Rehearse Before It Touches Reality

## Signal

Browser and computer-use agents are moving from demos into real browsers, mobile browsers, desktop workspaces, and credentialed accounts. At the same time, research benchmarks still isolate agents inside reproducible environments such as WebArena, BrowserGym, WorkArena, OSWorld, and AndroidWorld. The live product world wants agents inside real accounts; the research world keeps proving that reproducibility, environment control, and task scoring matter.

## Intuition

The missing consumer primitive is not only permissions, traces, or better models. It is a **shadow run**: a temporary mirrored environment where an agent can execute the planned path, expose expected mutations, identify irreversible boundaries, and ask for approval before touching the live account.

Good pilots rehearse in simulators. Good database operators run transactions and migrations against staging. Consumer agents are being asked to click through production accounts with neither.

## Core Question

Can everyday computer-use agents become trustworthy if each risky task is first expressed as a previewable, replayable shadow transaction?

## Emerging Capability

- **Verified:** WebArena provides fully functional reproducible websites for web-agent tasks across domains such as e-commerce, social/forum, collaboration, and content management.
- **Verified:** BrowserGym and WorkArena formalize browser-agent observation/action spaces and enterprise-style web tasks.
- **Verified:** OSWorld and AndroidWorld frame computer/mobile control as interactive benchmark environments, not just static question-answering.
- **Supported:** Public product signals show browsers and mobile browsers being redesigned around embedded AI agents, while credential brokers and MCP interceptors are appearing around agent risk.
- **Inferred:** The consumer-facing trust primitive may be a small staging/mirroring layer around the agent, not another chat confirmation button.

## Current Assumption

If the model is accurate enough and permissions are scoped enough, the agent can act directly in the user's live interface.

## Challenged Assumption

For many tasks, direct live action is the wrong execution model. The user does not merely need to know whether the agent is allowed to act. The user needs to see what the agent *would* change, which steps are reversible, which state is stale, and where reality must be touched.

## Enabling Changes

- Browser automation stacks and headless browsers are now common enough to run parallel exploratory paths.
- Web-agent benchmarks have normalized reproducible sites, tasks, rewards, and traces.
- Local-first agent workspaces are emerging, making temporary local state and replay logs more plausible.
- MCP/tool-call ecosystems create a natural place to attach dry-run semantics, receipts, and commit gates.
- Consumer tolerance for AI assistants is rising, but trust has not caught up with autonomy.

## Missing Primitive

**Shadow Run Card**

A compact object produced before execution:

- task intent
- mirrored surface or available sandbox
- assumptions and missing live state
- proposed action sequence
- predicted mutations
- irreversible boundaries
- stale-state warnings
- sensitive data touched
- approval gates
- live execution delta after commit
- rollback/recovery path
- replay link

The card is not a full simulator. It is a consumer-readable staging transaction.

## Adjacent Fields

- Web-agent benchmarks
- Browser automation
- Database transactions and migrations
- Aviation simulators and preflight checks
- Payment authorization holds
- Git preview diffs and pull requests
- Mobile permission UX
- Local-first personal software
- MCP/tool safety

## Existing Evidence

- **Verified:** WebArena was explicitly created to reduce the disconnect between simplified synthetic environments and realistic web-agent scenarios while remaining reproducible.
- **Verified:** BrowserGym targets fragmented web-agent benchmarking by providing common observation and action spaces.
- **Verified:** WorkArena evaluates agents on browser-based enterprise knowledge-work tasks.
- **Verified:** OSWorld evaluates open-ended computer tasks in real desktop environments.
- **Verified:** AndroidWorld provides a functional Android environment with programmatic tasks across real-world apps.
- **Verified:** HN/Product signals from 2026-08-08 and 2026-08-09 include Cloudflare Kitesurf, Buddy mobile AI browser, UnYOLO credential broker, MCP interceptors, and AI video/editor MCP tooling.

## Contradicting Evidence

- **Supported:** Many real websites and mobile apps cannot be perfectly mirrored because auth state, server-side side effects, personalization, rate limits, anti-bot measures, and private data are live-only.
- **Supported:** A shadow run can create false confidence if it hides the exact failure mode that appears in production.
- **Inferred:** For low-risk tasks, shadow runs may add too much friction; the primitive must trigger only at mutation, payment, publication, permission, deletion, account, or social-risk boundaries.

## Open Questions

1. What is the minimum useful shadow run when no full sandbox exists?
2. Can the agent separate reversible UI exploration from irreversible mutation without site cooperation?
3. Should shadow runs be local-only, browser-native, MCP-native, or app-provided?
4. Can a Shadow Run Card be understood in under 10 seconds?
5. How does the card distinguish predicted mutation from verified post-commit delta?
6. What tasks should bypass shadow mode because the preview is more dangerous than execution?

## Strange Implications

- The next trusted browser-agent product may feel less like a chatbot and more like a pull-request client for real life.
- Websites may eventually expose staging endpoints or `dry_run` actions for agents, the way payment systems expose authorization before capture.
- Personal agents may need a local “simulator of you” only for preferences and risk thresholds, while the actual environment simulator remains task-specific.
- Agent UX may converge with aviation: plan, simulate, brief, commit, debrief.

## Possible Experiments

1. Hand-author 10 Shadow Run Cards for common browser/mobile tasks: unsubscribe, book appointment, buy item, post draft, edit profile, send message, export data, change setting, schedule flight/hotel, reconcile invoice.
2. Run one safe Playwright task twice: first as shadow-only with predicted DOM/state deltas, then live against a local test app, comparing predicted vs observed delta.
3. Add a `dry_run` field to five MCP tool descriptions and test whether an agent can choose preview-before-commit correctly.
4. Compare user decision speed and error detection between a normal chat confirmation and a Shadow Run Card.

## Potential Outcomes

- **Prototype candidate:** A browser extension or local desktop layer that wraps agent mutations in preview cards.
- **Research direction:** Shadow transactions for personal agents: sandboxes, receipts, commit gates, and rollback.
- **Product primitive:** A universal approval surface for AI browsers, phone agents, and local tool agents.
- **Protocol primitive:** `dry_run`, `commit`, `rollback`, and `receipt` verbs for agent tools.

## Confidence

Emerging direction

## Status

Active

## Scores

| Dimension | Score |
|---|---:|
| Originality | 7 |
| Technical plausibility | 8 |
| Importance | 9 |
| Depth | 8 |
| Unexpectedness | 7 |
| Prototype potential | 9 |
| Long term potential | 9 |
| Alignment with existing projects | 9 |
| Defensibility | 7 |
| Research richness | 8 |
| Timing | 9 |

Shape of opportunity: high prototype potential and strong alignment with Max's agent/local-first/interface work; defensibility comes from trace quality, integration depth, and taste in approval UX rather than the generic idea of “sandboxing.”

## Time Horizon

Immediate: prototype now for local/web test apps. Near term: useful inside agent browsers, phone agents, MCP tools, and enterprise web agents. Medium term: stronger if websites expose explicit dry-run/preview endpoints.

## Sources

- Zhou et al., “WebArena: A Realistic Web Environment for Building Autonomous Agents,” arXiv:2307.13854v4, 2023. https://arxiv.org/abs/2307.13854v4
- Drouin et al., “The BrowserGym Ecosystem for Web Agent Research,” arXiv:2412.05467v4, 2024. https://arxiv.org/abs/2412.05467v4
- Drouin et al., “WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?,” arXiv:2403.07718v5, 2024. https://arxiv.org/abs/2403.07718v5
- Xie et al., “OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments,” arXiv:2404.07972v2, 2024. https://arxiv.org/abs/2404.07972v2
- Rawles et al., “AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents,” arXiv:2405.14573v5, 2024. https://arxiv.org/abs/2405.14573v5
- HN Algolia scan, 2026-08-09, queries: `browser agent`, `MCP agent`, `local first`, `AI video editor`.
- GitHub Search API scan, 2026-08-09, queries: `computer use agent`, `browser use agent`, `MCP server agent`, `local first ai app`.

## Unexpected Connections

Aviation simulators and database migration dry-runs solve the same hidden problem as consumer agent trust: not “can the operator perform the action,” but “can the system expose the likely consequence before production reality is touched.” See `unexpected-connections/2026-08-09-shadow-runs-flight-simulators.md`.
