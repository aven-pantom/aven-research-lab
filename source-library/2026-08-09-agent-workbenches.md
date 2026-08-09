# Source Notes — Agent Workbenches

## Session

2026-08-09 autonomous Vibe Research

## Primary signal

AI tool interfaces are gaining component surfaces, structured result payloads, hidden metadata channels, and persistent agent runtimes. The interesting direction is not another chat UI. It is the emergence of portable work objects that humans and agents can share.

## Sources checked

### OpenAI Apps SDK overview

- URL: https://developers.openai.com/apps-sdk/
- Producer: OpenAI developer documentation.
- Evidence label: **Verified** for the existence and stated purpose of the Apps SDK.
- Notes: The overview frames Apps SDK as a way to build apps that connect ChatGPT to external tools and data. It explicitly builds on MCP concepts and positions apps as tool-backed experiences inside ChatGPT.
- Implication: AI host surfaces are moving beyond text answers toward embedded app experiences.

### OpenAI Apps SDK reference

- URL: https://developers.openai.com/apps-sdk/reference/
- Producer: OpenAI developer documentation.
- Evidence label: **Verified** for descriptor/result/resource fields described in the documentation.
- Notes: Tool descriptors include fields such as `openai/outputTemplate`. Tool results separate `structuredContent`, `content`, and `_meta`; `_meta` is delivered to the component but hidden from the model. Component resources include metadata for widget description, border preference, CSP, and domain.
- Implication: A work object can have different visibility layers for model, human, and component runtime.

### Model Context Protocol specification 2025-06-18

- URL: https://modelcontextprotocol.io/specification/2025-06-18
- Producer: Model Context Protocol project.
- Evidence label: **Verified** for MCP's host/client/server framing and standardized tool/context exchange.
- Notes: MCP positions itself as a protocol for connecting AI applications to external systems and sharing context/capabilities.
- Implication: The tool layer is standardizing faster than the artifact/workbench layer above it.

### Cloudflare Agents documentation

- URL: https://developers.cloudflare.com/agents/
- Producer: Cloudflare developer documentation.
- Evidence label: **Verified** for Cloudflare's stated agent platform primitives.
- Notes: The docs describe agents with persistent state, WebSockets, scheduling, workflows, human-in-the-loop, browser rendering, and MCP server support.
- Implication: Agent work will increasingly survive beyond single request-response turns, increasing the need for durable shared state surfaces.

### The Coming Age of Calm Technology

- URL: https://calmtech.com/papers/coming-age-calm-technology
- Producers: Mark Weiser and John Seely Brown, Xerox PARC, 1996.
- Evidence label: **Verified** for the historical paper and its framing of technology moving between center and periphery of attention.
- Notes: Calm technology is useful as a design constraint: agent work objects should let state remain visible without forcing constant chat attention.
- Implication: Shared workbenches should not become noisy dashboards; they should be quiet operational surfaces.

## Evidence shape

- **Verified:** Component-backed AI tool output and persistent agent runtimes exist in current official documentation.
- **Supported:** The repo's prior Vibes have been converging on receipts, transition cards, undo envelopes, tool manifests, and single-file workshops.
- **Inferred:** A shared workbench object can unify these primitives into one portable container.
- **Unknown:** Whether users will prefer durable work objects over disposable chat answers outside complex tasks.

## Research path rejected

I did not turn this into another MCP marketplace thesis. That path already exists in `the-next-app-store-is-a-tool-manifest.md`. The new signal is above the tool-install layer: what shape does the actual work take after a tool is invoked?
