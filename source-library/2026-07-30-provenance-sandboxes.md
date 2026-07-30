# Source Notes — Creative Provenance Sandboxes

## Date

2026-07-30

## Primary signal

Media provenance infrastructure is maturing as defensive authenticity machinery while agent toolchains are making process traces operational. The research question is whether provenance can become a creative substrate: inspectable, redaction-aware, branchable, and partially replayable.

## Sources checked

### C2PA Specifications

- URL: https://c2pa.org/specifications/specifications/2.2/index.html
- Evidence label: **Verified**
- Notes: The C2PA site exposes technical specifications, explainer material, implementer guidance, UX recommendations, security considerations, harms modeling, and AI/ML guidance. This supports the claim that content provenance is not just a brand campaign; it has a structured specification effort behind it.
- Limitation: I did not fully audit the spec internals in this session; the source supports existence/scope, not implementation quality.

### Content Credentials

- URL: https://contentcredentials.org/
- Evidence label: **Verified**
- Notes: Public-facing provenance/authenticity layer associated with creator and consumer understanding of content credentials.
- Limitation: Landing-page evidence is weaker than implementation documentation; use as market/interface signal, not proof of adoption depth.

### TikTok Newsroom — Content Credentials announcement

- URL: https://newsroom.tiktok.com/en-us/tiktok-becomes-first-video-platform-to-implement-content-credentials
- Evidence label: **Verified**
- Notes: TikTok publicly announced platform support for Content Credentials in the AI-generated content labeling context. This is a useful platform-adoption signal.
- Limitation: Newsroom copy does not prove user comprehension or durability through repost/compression paths.

### Anthropic — Model Context Protocol

- URL: https://www.anthropic.com/news/model-context-protocol
- Evidence label: **Verified**
- Notes: Anthropic introduced MCP as a protocol for connecting assistants to external systems. This matters because provenance cards become more useful if agents can request, read, and write structured workflow context across tools.
- Limitation: MCP adoption does not directly imply creative provenance adoption.

### Cloudflare Agents docs — MCP

- URL: https://developers.cloudflare.com/agents/model-context-protocol/
- Evidence label: **Verified**
- Notes: Cloudflare documents MCP in agent infrastructure, reinforcing that protocol-mediated agent/tool connections are moving into infrastructure documentation.

### FAA Remote ID

- URL: https://www.faa.gov/uas/getting_started/remote_id
- Evidence label: **Verified**
- Notes: Remote ID is not media provenance, but it demonstrates a civic pattern: autonomous or remote systems may need externally legible claims about identity/status/location. Useful analogy only.
- Limitation: Drone regulation should not be imported into creative tools without care.

### GitHub repository movement checked via API

Checked 2026-07-30T05:01Z:

- browser-use/browser-use — 107,251 stars, 11,793 forks, updated 2026-07-30T04:42:19Z. Description: “Make websites accessible for AI agents. Automate tasks online with ease.”
- browserbase/stagehand — 23,674 stars, 1,631 forks, updated 2026-07-30T03:48:55Z. Description: “The SDK For Browser Agents.”
- google-gemini/gemini-cli — 106,239 stars, 14,346 forks, updated 2026-07-30T04:58:44Z. Description: “An open-source AI agent that brings the power of Gemini directly into your terminal.”
- openai/codex — 102,479 stars, 15,391 forks, updated 2026-07-30T04:56:59Z. Description: “Lightweight coding agent that runs in your terminal.”
- modelcontextprotocol/servers — 89,032 stars, 11,330 forks, updated 2026-07-30T04:30:36Z. Description: “Model Context Protocol Servers.”

Evidence label: **Verified** for API readings at scan time. **Inferred** for the broader claim that agents need structured receipts.

## Contradictions and caveats

- C2PA-style credentials can be stripped, lost, ignored, or misunderstood.
- Provenance can become surveillance if private creative process is over-exposed.
- Reproducibility is weaker for nondeterministic models and proprietary tools.
- Star counts measure attention, not technical quality or production use.

## Useful next source branch

Audit the current C2PA technical spec’s manifest/assertion model and compare it against a minimal agent flight-recorder schema. The key question: what fields survive as human-readable creative process, not just cryptographic assertion.
