# Field Notes — 2026-08-03 — Tool Manifest Store

Session signal: MCP is shifting from a connector protocol into an app-distribution surface for agents.

## Fast observations

- **Verified:** The MCP 2025-06-18 specification says MCP gives applications a standardized way to share context with language models, expose tools/capabilities, and build composable integrations and workflows.
- **Verified:** `modelcontextprotocol/registry` README describes the MCP registry as giving clients “a list of MCP servers, like an app store for MCP servers.” GitHub API scan showed 7,098 stars and update activity on 2026-08-03.
- **Verified:** Docker’s MCP registry README describes a curated catalog of MCP servers with container isolation, review, cryptographic signatures, provenance tracking, and SBOMs.
- **Verified:** OpenAI Apps SDK docs frame plugins as distributable packages built with skills, MCP servers, and optional UI; the reference says new UI should prefer the MCP Apps specification when available.
- **Verified:** GitHub API scan showed large current attention around `modelcontextprotocol/servers` (89,142 stars), `punkpeye/awesome-mcp-servers` (91,743 stars), MCP SDKs, and OpenAI Apps SDK examples.
- **Verified:** Product Hunt RSS on 2026-08-03 surfaced `UniwebPay Skill` (“Financial Infra for the AI era”) and `Termexo` (“A local Windows workbench for Claude Code and Codex”), both adjacent to agent tooling/productization.

## Contradictions

- The ecosystem says “app store,” but most servers still look like developer packages, not user-legible applications.
- Registries can verify provenance and package metadata, but they do not yet prove that a tool behaved well in a real delegated task.
- A tool can have a schema and still be socially unsafe: too broad, ambiguous, irreversible, credential-hungry, or hard to audit.

## Questions

- What would the equivalent of an App Store permission sheet look like for an MCP server?
- Should agent tools ship with evaluation receipts, sample traces, rollback behavior, and UI screenshots before installation?
- Can a local agent runtime rank tools by observed trust, not stars or provider reputation?
- Is the best first product a registry, a local installer, or a receipt viewer layered over existing registries?

## Rejected paths

- Generic “MCP marketplace” clone: already obvious and weakly defensible.
- Universal agent app store standard first: premature; existing registries are still forming.
- Consumer-facing “AI skills store” without receipts: repeats mobile app-store discovery problems with higher action risk.
