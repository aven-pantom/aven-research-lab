# Apps Need Action Maps: Agents Should Navigate Intent, Not Pixels

## Name
Apps Need Action Maps: Agents Should Navigate Intent, Not Pixels

## Signal
Apple App Intents, Android App Actions/Shortcuts, WebDriver BiDi, MCP tools, and computer-use agents are converging on the same pressure point from different directions: software is becoming operable by machines, but the operating surface is split between brittle pixels, hidden APIs, one-off shortcuts, and tool schemas.

## Intuition
The next durable app primitive is not “AI mode.” It is an action map: a compact, inspectable inventory of what an app lets a delegated machine perceive, decide, mutate, undo, and prove. Agents should not have to rediscover an app by scraping screens every run. They should receive a living map of verbs, objects, preconditions, risks, stale states, and receipts.

## Core Question
Can apps expose enough semantic action structure for agents to operate safely without forcing every task through either full APIs or fragile GUI automation?

## Emerging Capability
A user or agent could ask an app for its Action Map Card before acting. The card would declare available objects, verbs, required state, reversible/irreversible boundaries, permission needs, undo path, expected deltas, event subscriptions, stale-state markers, and receipt formats.

## Current Assumption
Agent interoperability will be solved by adding APIs, MCP servers, browser automation, or OS-level shortcuts. If an action can be called, the agent can use it.

## Challenged Assumption
Callable actions are not enough. Agents need an orientation layer that tells them what actions mean inside the app’s current state, which changes matter, which actions are risky, how to recover, and what evidence should be returned.

## Enabling Changes
- **Verified:** Apple’s App Intents framework lets apps expose actions and content to system experiences such as Shortcuts, Siri, Spotlight, and widgets.
- **Verified:** Android exposes app shortcuts and Assistant/App Actions patterns for surfacing app capabilities to system-level entry points.
- **Verified:** WebDriver BiDi is a W3C browser automation protocol that exposes bidirectional browser control and events.
- **Verified:** MCP defines a standard way for applications to expose tools and resources to model clients.
- **Verified:** Anthropic publicly introduced computer use for Claude 3.5 models in 2024, using screen-level interaction as a general interface.
- **Supported:** Prior lab Vibes around Street Signs, Transition Tests, Shadow Runs, Flight Recorders, Shared Workbenches, Credential Escrow, and Continuation Ports all point toward machine-readable action boundaries.

## Missing Primitive
The Action Map Card.

Minimum fields:

- app or surface identity
- current state summary and freshness
- objects the agent may address
- verbs available on each object
- preconditions and required permissions
- allowed, risky, forbidden, and irreversible actions
- expected deltas for each mutation
- undo or recovery path
- event stream / subscription hooks
- receipt schema after action
- privacy and custody boundaries
- stale-state and conflict markers
- links to API, MCP, intent, or GUI fallback routes

## Adjacent Fields
App Intents, Android shortcuts/App Actions, MCP, WebDriver BiDi, accessibility automation, robotic affordance maps, API discovery, capability security, HCI, local-first software, workflow automation, UI testing, aviation procedure cards.

## Existing Evidence
- **Verified:** App Intents and Android shortcuts already treat app capabilities as named actions available outside the normal app UI.
- **Verified:** WebDriver BiDi and browser automation protocols provide eventful machine control, but they do not by themselves explain product-level intent or risk.
- **Verified:** MCP tool schemas expose callable capabilities to model clients, but a tool list is not the same as a state-aware map of the app’s work objects and consequences.
- **Supported:** Computer-use agents demonstrate the value of universal pixels as fallback, while also exposing brittleness around state, timing, permission, and verification.
- **Inferred:** The frontier is a hybrid stack: semantic action maps first, direct APIs/MCP/intents when available, GUI automation only when necessary, and receipts everywhere.

## Contradicting Evidence
- **Supported:** Developers may not maintain accurate action maps if they become another documentation surface.
- **Supported:** Many apps change quickly; stale maps could be worse than screen observation if agents trust them too much.
- **Inferred:** Platform owners may fragment action maps into proprietary Siri/Assistant/browser/agent integrations instead of converging on portable cards.
- **Inferred:** For simple tasks, screen automation plus a human confirmation may be cheaper than implementing explicit action maps.

## Open Questions
- What is the smallest action map that improves agent behavior without becoming API documentation?
- Should action maps be authored by app developers, inferred by agents from traces, or co-maintained through observed receipts?
- Can action maps expose risk and undo without leaking private app data?
- How does an agent detect that a map is stale relative to the live UI?
- Should MCP tools return Action Map Cards before allowing mutation?
- Can action maps become a local-first artifact a user owns, not only a platform capability registry?

## Strange Implications
- Apps may compete on how legible they are to delegated machines.
- Design systems may include agent affordance layers next to human components.
- The most valuable “API” for a consumer app may be a state-aware map of allowed work rather than a remote endpoint.
- Screen readers, UI tests, shortcuts, and agents may converge into a shared semantic substrate.
- Future app reviews may ask whether the app lies to agents about consequence, reversibility, or custody.

## Possible Experiments
1. Hand-author Action Map Cards for three existing apps or local mock surfaces: a Markdown research portal, a small wardrobe/taste tracker, and a browser checkout/order-status flow.
2. Compare three agent routes for the same safe task: pixels only, tool schema only, and Action Map Card plus receipt.
3. Build a static Action Map Card viewer with objects, verbs, risk classes, stale markers, expected delta, undo path, and receipt fields.
4. Add one Action Map Card to a local single-file workshop and test whether a receiving agent can resume work without reading the original chat.

## Potential Outcomes
- A local-first action-map standard for personal software and agent workbenches.
- A developer tool that turns App Intents/MCP/tool schemas into user-readable Action Map Cards.
- A browser extension that overlays app-level affordance maps for agents.
- A Pantom/Hermes primitive: every tool or app surface declares an action map before autonomous work begins.

## Confidence
Emerging direction

## Status
Active

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Affordances and intents exist, but not as user-readable agent orientation cards. |
| Technical plausibility | 8 | Can be prototyped as Markdown/JSON over existing tools and local apps. |
| Importance | 9 | Agents will fail or become unsafe if every app is rediscovered through pixels. |
| Depth | 8 | Connects HCI, automation protocols, shortcuts, tool schemas, receipts, and state verification. |
| Unexpectedness | 7 | The strong move is treating app capability as a navigational map, not an endpoint list. |
| Prototype potential | 9 | A static card and local mock app can test the idea immediately. |
| Long term potential | 9 | Could become a core layer in agent-operable software. |
| Alignment with existing projects | 9 | Fits Hermes/Aven, Pantom agent tooling, local-first workshops, Orior-style dossiers, and research portal work. |
| Defensibility | 7 | Defensible through card grammar, verification UX, and developer tooling. |
| Research richness | 8 | Strong source base across OS intents, browser automation, MCP, accessibility, and robotics affordances. |
| Timing | 8 | App-level actions and computer-use agents are both spreading now. |

## Time Horizon
Immediate: hand-author cards and test on local surfaces. Near term: integrate with MCP/App Intents/tool manifests. Medium term: platform-level action maps across OS/browser/app ecosystems.

## Sources
- Apple Developer Documentation. “App Intents.” https://developer.apple.com/documentation/appintents
- Android Developers. “Create shortcuts.” https://developer.android.com/develop/ui/views/launch/shortcuts
- Google Developers. “App Actions overview.” https://developers.google.com/assistant/app
- W3C. “WebDriver BiDi.” https://w3c.github.io/webdriver-bidi/
- Model Context Protocol. “Specification 2025-06-18.” https://modelcontextprotocol.io/specification/2025-06-18
- Anthropic. “Claude 3.5 Sonnet and computer use.” https://www.anthropic.com/news/3-5-models-and-computer-use
- Android Developers. “AccessibilityService.” https://developer.android.com/reference/android/accessibilityservice/AccessibilityService

## Unexpected Connections
Action maps share structure with aviation procedure cards. Both convert a complex machine into a state-aware list of permissible operations, preconditions, warnings, expected outcomes, and recovery paths. The hidden common problem is not control; it is preventing an operator from applying the right action in the wrong state.
