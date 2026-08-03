# Source Notes — Tool Manifest Store

Date: 2026-08-03
Signal: MCP registries, Apps SDK packaging, and Docker’s MCP catalog suggest agent tools are becoming distributable app-like capabilities, but the trust primitive is still incomplete.

## Sources checked

### Model Context Protocol specification

- URL: https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/docs/specification/2025-06-18/index.mdx
- Evidence: **Verified:** The specification states MCP is an open protocol for integration between LLM applications and external data sources/tools, and that it standardizes sharing context, exposing tools/capabilities, and building composable integrations/workflows.
- Implication: MCP is not merely a transport; it is becoming the interface layer through which agents acquire capabilities.

### MCP Registry

- URL: https://github.com/modelcontextprotocol/registry
- Evidence: **Verified:** The README says “The MCP registry provides MCP clients with a list of MCP servers, like an app store for MCP servers.” GitHub API scan on 2026-08-03 showed 7,098 stars, updated 2026-08-03T04:54:14Z.
- Implication: The ecosystem itself is naming registry/distribution as a core primitive.

### MCP server ecosystem metadata

- URL: GitHub API scan, 2026-08-03.
- Evidence: **Verified:** `modelcontextprotocol/servers` had 89,142 stars; `punkpeye/awesome-mcp-servers` had 91,743 stars; `modelcontextprotocol/python-sdk` had 23,853 stars; `modelcontextprotocol/typescript-sdk` had 13,043 stars.
- Implication: Discovery and selection pressure is real enough that tool reputation, packaging, and review UX will matter.

### Docker MCP Registry

- URL: https://raw.githubusercontent.com/docker/mcp-registry/main/README.md
- Evidence: **Verified:** Docker describes an official curated MCP registry whose entries appear in MCP catalog, Docker Desktop MCP Toolkit, and Docker Hub `mcp` namespace. It emphasizes enterprise security, cryptographic signatures, provenance tracking, SBOMs, container isolation, review, and easy discovery.
- Implication: Docker is solving package trust and isolation, but not necessarily delegated-task evidence or user-legible tool behavior.

### OpenAI Apps SDK / Plugins docs

- URL: https://developers.openai.com/apps-sdk/llms.txt
- URL: https://developers.openai.com/apps-sdk/reference.md
- Evidence: **Verified:** The docs say plugins can be built and published with skills, MCP servers, and optional UI. The reference says to start with the MCP Apps specification for shared UI fields and bridge methods, with OpenAI extensions optional.
- Implication: MCP tools are moving toward packaged experiences with UI, workflow, authentication, and distribution.

### Apps SDK examples

- URL: https://raw.githubusercontent.com/openai/openai-apps-sdk-examples/main/README.md
- Evidence: **Verified:** The examples README says MCP standardizes wire format, authentication, and metadata, and that a minimal Apps SDK integration lists tools, calls tools, and returns widgets.
- Implication: A tool package can become a small app surface inside an agent/chat environment, not just an API endpoint.

### Product Hunt RSS

- URL: https://www.producthunt.com/feed
- Evidence: **Verified:** 2026-08-03 scan surfaced `UniwebPay Skill` (“Financial Infra for the AI era”) and `Termexo` (“A local Windows workbench for Claude Code and Codex”).
- Implication: Agent capability packaging is leaking into product naming and maker-market behavior, though individual products are not proof of broad adoption.

### HN/Algolia scan

- Queries: `mcp server app store ai agents`, `local first ai agents`, `screen recorder ai workflow`.
- Evidence: **Verified:** Results included `MCP Marketplace – an App Store for AI agent tools`, local-first AI agent frameworks, and phone/workbench tools for Codex/Claude workflows.
- Implication: Makers are independently converging on the idea that agents need capability stores and workbenches.

## Evidence shape

- Strongest evidence: MCP Registry’s explicit “app store for MCP servers” language plus Docker’s catalog/security framing.
- Supporting evidence: OpenAI Apps SDK packaging and high GitHub attention around MCP servers/SDKs.
- Weakest evidence: Product Hunt and HN signals are noisy and product-level, not adoption metrics.
- Main uncertainty: whether the durable primitive is a public registry, local trust ledger, signed package, evaluation receipt, or some combination.
