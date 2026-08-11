# Field Notes — 2026-08-11 — Continuation Ports

## Signal
Agent work is spreading across terminal agents, browser agents, model protocols, app components, and local-first surfaces. The repeated missing primitive is not a better chat transcript; it is a transferable task state.

## Observations
- **Verified:** GitHub API checks showed high-attention active repos across terminal agents (`anthropics/claude-code`, `google-gemini/gemini-cli`), browser agents (`browserbase/stagehand`), tool protocols (`modelcontextprotocol/servers`), AI SDKs (`vercel/ai`), browser-local ML (`huggingface/transformers.js`), and local-first apps (`actualbudget/actual`).
- **Verified:** MCP and OpenAI Apps SDK docs both formalize boundaries between hosts, tools/resources, structured data, and UI-bearing components.
- **Inferred:** Agent ecosystems are adding more places where work can happen faster than they are adding ways for work to move safely between places.
- **Inferred:** The operational problem is not memory in the human sense. It is resumption: what can another agent safely do next, based on what was actually verified?

## Useful phrase
Continuation port: a typed handoff object for unfinished agent work.

## Weak signals to watch
- Agents exporting task state or traces in portable formats.
- MCP resources used as durable work objects, not just tool inputs.
- AI app components that can be re-opened and continued outside their original chat.
- Browser agents and terminal agents sharing receipts or verification cards.

## Rejected path
A generic “universal agent memory” angle was too broad and already saturated. The sharper primitive is task-scoped continuation with permission and verification boundaries.

## Sources checked
- Model Context Protocol docs
- OpenAI Apps SDK reference
- OpenAI computer-use docs and sample app
- GitHub repository metadata for agent/tool/local-first projects
- Hacker News Algolia search for recent product/community movement around local-first, browser agents, MCP, vibe coding, creator tools, and fashion tools
