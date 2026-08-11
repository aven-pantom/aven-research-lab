# Agents Need Continuation Ports: Work Should Resume Across Surfaces, Not Restart

## Name
Agents Need Continuation Ports: Work Should Resume Across Surfaces, Not Restart

## Signal
Terminal agents, browser agents, model tool protocols, and component-based AI apps are converging, but their work still tends to live inside the surface that started it. A coding agent in a terminal, a browser agent in a session, and an app component in ChatGPT may all operate on overlapping tasks, yet each usually emits a summary rather than a resumable operational state.

The immediate signal came from current infrastructure movement: Claude Code and Gemini CLI have large active GitHub repos; Browserbase Stagehand describes itself as an SDK for browser agents; OpenAI's Apps SDK and computer-use docs expose tool/component surfaces; MCP standardizes context/tools across hosts and servers. The missing piece is not another agent. It is a typed handoff port.

## Intuition
Agents will not become dependable by staying in one perfect interface. Real work crosses terminals, browsers, mobile apps, documents, dashboards, repositories, and human interruptions. If the only bridge between surfaces is prose, every transfer becomes a lossy restart.

A continuation port would let one agent surface hand off the unfinished work object, current state, constraints, receipts, open risks, allowed next actions, and stale assumptions to another surface without pretending the new agent “remembers.”

## Core Question
What is the smallest portable continuation object that lets an agent resume unfinished work across tools without leaking credentials, hiding uncertainty, or flattening the task into a chat summary?

## Emerging Capability
A user can start work in one surface and move it elsewhere: terminal to browser, phone to desktop, app component to repo, local agent to cloud model, or human review to autonomous follow-through. The receiving surface imports not only text, but operational context: task state, files touched, visible evidence, pending decisions, forbidden actions, undo hooks, and verification gates.

## Current Assumption
Each agentic product should own its own session memory, transcript, tool calls, and artifact state.

## Challenged Assumption
The durable unit should be a task-level continuation object independent of any one interface. Products compete on execution quality, taste, trust, and ergonomics, but they should be able to receive and emit resumable work.

## Enabling Changes
- **Verified:** MCP's public documentation frames the protocol as a way for AI applications to connect with external systems through standardized context and tools.
- **Verified:** OpenAI Apps SDK documentation describes app/tool descriptors, component resources, structured tool results, and component metadata, indicating tool output is becoming interface-bearing state rather than only text.
- **Verified:** OpenAI's computer-use guide and sample app expose computer-use agents operating over graphical environments.
- **Verified:** Browserbase Stagehand is an open-source SDK for browser agents.
- **Verified:** Claude Code and Gemini CLI are active, high-attention terminal-agent repositories, showing strong demand for agentic work inside developer surfaces.
- **Supported:** Local-first and browser-local tooling continues to matter because continuation objects become more trustworthy when exportable, inspectable, and owned by the user.
- **Inferred:** As agent work spans more surfaces, session memory alone becomes a liability: it is hard to inspect, hard to transfer, and hard to verify.

## Missing Primitive
A **Continuation Port Card**.

Minimum fields:

- task name and intended outcome
- current surface and originating surface
- imported sources, files, URLs, and artifact pointers
- last verified state
- open assumptions
- unresolved decisions
- allowed next actions
- forbidden actions
- credential and permission boundaries
- stale-state risks
- undo/replay hooks
- verification checklist
- human approval gates
- receiving-surface instructions
- raw transcript/trace pointer when available

This is narrower than a full project state file and richer than a handoff summary.

## Adjacent Fields
- MCP and agent tool protocols
- computer-use agents and browser automation
- local-first documents and portable workspaces
- IDE task states and notebook checkpoints
- aviation crew handoff and maintenance logs
- incident command transfer-of-command forms
- design review packets and production handoffs
- mobile/desktop continuity systems

## Existing Evidence
- **Verified:** GitHub API checked on 2026-08-11 showed `anthropics/claude-code`, `google-gemini/gemini-cli`, `browserbase/stagehand`, `modelcontextprotocol/servers`, `vercel/ai`, `huggingface/transformers.js`, and `actualbudget/actual` active within the last day or two, suggesting broad movement across terminal agents, browser agents, AI SDKs, browser/local ML, and local-first software.
- **Verified:** MCP and OpenAI Apps SDK docs present standardized boundaries between hosts, tools, resources, components, structured content, and metadata.
- **Verified:** Stagehand positions itself as an SDK for browser agents, not a final consumer app, implying agent work is becoming a developer primitive.
- **Supported:** Prior lab Vibes already identified related primitives: Flight Recorders, Transition Tests, Undo Gravity, Shared Workbenches, Permission Receipts, Shadow Runs, Resident Microbrains.
- **Inferred:** These primitives converge on a larger need: work must be restartable, inspectable, and transferable at task boundaries.

## Contradicting Evidence
- **Supported:** Existing platforms may prefer lock-in. If each agent provider treats session memory and traces as proprietary advantage, continuation ports may remain an internal feature rather than a portable primitive.
- **Supported:** Some tasks are unsafe to resume across surfaces because credentials, transient UI state, private memory, or side-effectful sessions may not transfer cleanly.
- **Inferred:** A continuation object could create false confidence if it records too little raw evidence or if the receiving agent ignores stale-state warnings.

## Open Questions
- What is the minimum card shape that improves resumption without becoming a bloated workflow spec?
- Which state should be visible to the receiving model, visible only to the human, or retained locally as private hydration data?
- Can continuation ports compose with MCP resources and Apps SDK components without creating another standard too early?
- How should a receiving agent refuse continuation when the state is stale or permissions are missing?
- What evaluation proves a continuation port beats a normal prose handoff?

## Strange Implications
- Agent products may need import/export affordances before they need more model features.
- The most valuable personal AI memory may be a library of task states, not a biography of the user.
- A local-first continuation folder could become the user's real operating system for agent work.
- A future app store may list tools by how well they emit and accept continuation ports.
- Workflows may become less like chats and more like airlocks between operational environments.

## Possible Experiments
1. Hand-author five Continuation Port Cards for existing lab tasks: repo research, browser dossier, local file edit, trend scan, and design review.
2. Give only the prose summary to one agent and the Continuation Port Card to another; compare recovery time, missed constraints, unsafe assumptions, and final verification quality.
3. Prototype a static local viewer with visible state, risks, next actions, raw trace link, and import/export JSON.
4. Try one terminal-to-browser handoff using a safe local HTML app and one browser-to-repo handoff using Markdown only.

## Potential Outcomes
- Prototype: Continuation Port Card schema and static viewer.
- Open-source primitive: a local-first task handoff format for agentic work.
- Product category: cross-agent continuity layer for personal software.
- Research direction: agent work as portable operational state rather than session memory.
- Benchmark: resumption quality across agent surfaces.

## Confidence
Emerging direction

## Status
Active

## Sources
- Model Context Protocol documentation — `https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro`
- OpenAI Apps SDK reference — `https://developers.openai.com/apps-sdk/reference/`
- OpenAI computer-use guide — `https://developers.openai.com/api/docs/guides/tools-computer-use`
- OpenAI CUA sample app — `https://github.com/openai/openai-cua-sample-app`
- Browserbase Stagehand — `https://github.com/browserbase/stagehand`
- Anthropic Claude Code — `https://github.com/anthropics/claude-code`
- Google Gemini CLI — `https://github.com/google-gemini/gemini-cli`
- Vercel AI SDK — `https://github.com/vercel/ai`
- Hugging Face Transformers.js — `https://github.com/huggingface/transformers.js`

## Unexpected Connections
Continuation ports rhyme with aviation and hospital shift handoffs, but the shared structure is not bureaucracy. In all three cases, the operator changes while the system remains live. The artifact has to carry current state, unresolved risks, forbidden actions, and proof of what has already been checked. A chat summary is closer to gossip; a continuation port is closer to transfer-of-control.
