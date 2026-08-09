# Agent Interfaces Need Shared Workbenches: Tool Calls as Manipulable Objects, Not Chat Replies

## Name

Agent Interfaces Need Shared Workbenches: Tool Calls as Manipulable Objects, Not Chat Replies

## Signal

The signal is the convergence of app-like component surfaces inside AI chat/tool protocols. OpenAI's Apps SDK describes tool-backed interactive components inside ChatGPT with tool descriptors, structured tool results, component resources, and a `window.openai` bridge. The Model Context Protocol presents a standardized way for applications to provide context and tools to models. Cloudflare's Agents documentation frames agents as applications that can run with persistent state, real-time communication, scheduled work, and human-in-the-loop interaction.

The repeated pattern is not “more tools for chat.” It is that tool calls are beginning to return durable UI surfaces, structured state, and hidden metadata alongside text.

## Intuition

Chat is becoming the wrong container for agentic work. The useful unit is not the message; it is a shared work object that both the human and the agent can inspect, revise, annotate, replay, and pass between tools.

Today, an agent searches, edits, books, designs, or analyzes, then compresses the work into a reply. That reply destroys too much structure: source state, intermediate decisions, confidence, component affordances, reversible actions, and next operations. Component SDKs and agent platforms suggest a different interface primitive: a workbench where the artifact stays live while conversation becomes a control layer around it.

## Core Question

What is the smallest shared workbench object that lets humans and agents operate on the same state without turning every tool into a full application?

## Emerging Capability

A chat session can summon an object with its own interface, state, provenance, tool affordances, and continuation rules. Instead of receiving a final answer, the user receives a compact workspace: a travel plan, outfit board, design review, route brief, capability receipt, video reaction card, or source dossier that remains editable and machine-operable.

## Current Assumption

Agent interfaces are primarily conversation surfaces. Tools are invoked behind the scenes and summarized back into chat.

## Challenged Assumption

The main interface may become a table of live work objects. Chat becomes an input method, status layer, and negotiation channel; the workbench object becomes the durable product surface.

## Enabling Changes

- **Verified:** Apps SDK tool results can include `structuredContent`, `content`, and `_meta`, with `_meta` delivered to the component but hidden from the model. This creates a split between human-visible content, model-visible structure, and component-private hydration data.
- **Verified:** Apps SDK components can be registered as resources and rendered through the `openai/outputTemplate` tool descriptor field.
- **Verified:** MCP standardizes a host/client/server architecture for exposing tools, resources, prompts, and capabilities to AI applications.
- **Verified:** Cloudflare Agents exposes primitives for persistent state, WebSocket communication, scheduled tasks, human-in-the-loop flows, and running MCP servers.
- **Supported:** Existing UI-generation libraries and AI SDK component sets are pushing toward interface pieces purpose-built for AI outputs, not only plain markdown responses.
- **Inferred:** Once tool output includes component UI plus structured state, the product boundary shifts from “agent answers” to “agent-maintained work objects.”

## Missing Primitive

A **Workbench Object Card**: a portable, local-first description of a live agent/human work surface.

Minimum fields:

- object name and purpose
- visible state
- hidden hydration state, with privacy boundary
- allowed verbs
- forbidden verbs
- source/provenance pointers
- current owner: human, agent, shared, external service
- confidence and stale-state markers
- undo/replay hooks
- export format
- continuation prompt or tool descriptor
- receipt of last mutation

This is narrower than a full app and richer than a chat message.

## Adjacent Fields

- MCP and tool protocol design
- AI app/component SDKs
- local-first documents and CRDTs
- notebooks, canvases, spreadsheets, and dashboards
- design-system components
- aviation cockpit/electronic flight bags
- operating-room instrument trays and shared procedural checklists
- provenance standards and agent flight recorders

## Existing Evidence

- **Verified:** OpenAI Apps SDK documentation describes apps that connect ChatGPT to external tools and data, with MCP-based tool descriptors and component resources.
- **Verified:** Apps SDK reference documentation defines component resource metadata such as `openai/widgetDescription`, `openai/widgetCSP`, and `openai/widgetDomain`, suggesting UI surfaces require boundary, description, and security framing.
- **Verified:** MCP documentation describes an open protocol for connecting AI applications to external systems and sharing context with language models.
- **Verified:** Cloudflare Agents documentation describes a platform for building agents with persistent state, communication, workflows, scheduling, browser automation, and MCP integration.
- **Supported:** This repo already contains adjacent Vibes around Flight Recorders, Undo Gravity, Transition Tests, Capability Receipt Manifests, Tiny World Tools, and Single-File Workshops. The shared workbench object appears to be a higher-level container for those primitives.
- **Inferred:** The object needs to be inspectable by both human and agent, but not identical to both. Humans need affordances and judgment; agents need structured state and verbs.

## Contradicting Evidence

- **Verified:** Most current users still understand chat more quickly than new object metaphors. A workbench can become a confusing mini-app if it lacks strict boundaries.
- **Supported:** Existing productivity products already use canvases, docs, boards, and dashboards. The new primitive must prove it is not just “chat plus iframe.”
- **Inferred:** Component surfaces may lock developers into large platform hosts if the work object is not portable and exportable.
- **Unknown:** Whether users will revisit live agent objects or prefer disposable answers for most tasks.

## Open Questions

- What state belongs in the object versus the surrounding conversation?
- Can a Workbench Object Card be represented as one Markdown/JSON file and still hydrate into useful UI?
- Which verbs are universal enough to standardize: inspect, revise, approve, replay, fork, export, undo, expire?
- How does the object expose hidden metadata without leaking private data into the model context?
- Can this work locally first, with cloud components as optional views?
- Should the workbench object point to MCP tool descriptors, or should it embed a smaller capability manifest?

## Strange Implications

- The future “app” may be a summoned work object that exists for the duration of a job, not an installed destination.
- Design systems may need agent semantics: not just button variants, but allowed machine actions, receipt behavior, stale-state display, and recovery affordances.
- Agent memory may attach to artifacts rather than people: each object remembers its own sources, decisions, permissions, and failed edits.
- Product onboarding may become object onboarding: teach the user what this thing can do, what it cannot do, and when it expires.
- The cleanest consumer AI product may look less like a chatbot and more like a small tray of live instruments.

## Possible Experiments

1. Hand-author three Workbench Object Cards: one design review board, one outfit rehearsal board, and one agent task receipt.
2. Build a static local viewer that renders the cards into panels with visible state, allowed verbs, source pointers, stale markers, and mutation receipts.
3. Run one agent over the cards using only declared verbs; compare the result to a normal chat-only task.
4. Test portability: export a card, reload it in a new session, and ask whether the work can continue without reading the original chat.
5. Red-team the privacy boundary: put sensitive hydration metadata in `_private` and verify the rendered/user-visible card describes the boundary without exposing the data.

## Potential Outcomes

- Prototype: Workbench Object Card schema and viewer.
- Product category: local-first agent workbench for design, research, style, or operations.
- Protocol contribution: lightweight artifact descriptor that sits above MCP tools and below full app frameworks.
- Design language: agent-operable components with calm, visible boundaries.
- Research direction: shared work objects as the unit of personal AI continuity.

## Confidence

Emerging direction

## Status

Active

## Sources

- OpenAI Developers — Apps SDK overview: https://developers.openai.com/apps-sdk/
- OpenAI Developers — Apps SDK reference: https://developers.openai.com/apps-sdk/reference/
- Model Context Protocol — Specification 2025-06-18: https://modelcontextprotocol.io/specification/2025-06-18
- Cloudflare Developers — Agents: https://developers.cloudflare.com/agents/
- Mark Weiser and John Seely Brown — The Coming Age of Calm Technology: https://calmtech.com/papers/coming-age-calm-technology
- Aven Research Lab — Agents Need Flight Recorders: `active-vibes/agents-need-flight-recorders.md`
- Aven Research Lab — The Next Creative Tool Might Be a Tiny World: `active-vibes/tiny-world-tools.md`
- Aven Research Lab — The Browser Can Become a Workshop: `active-vibes/browser-workshops-need-real-databases.md`

## Unexpected Connections

The strongest connection is between agent workbenches and aviation electronic flight bags. Both are shared operational surfaces that convert raw system complexity into bounded, inspectable, procedure-aware objects. The point is not that agents are airplanes. The shared structure is that high-consequence work needs a surface where state, allowed actions, stale data, checklist progress, and handoff context remain visible after individual communications disappear.

See `unexpected-connections/2026-08-09-agent-workbenches-flight-bags.md`.
