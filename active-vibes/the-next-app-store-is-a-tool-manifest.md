# The Next App Store Is a Tool Manifest: Agents Need Installable Capabilities With Receipts

## Name

The Next App Store Is a Tool Manifest: Agents Need Installable Capabilities With Receipts

## Signal

MCP is crossing from protocol into distribution surface.

- **Verified:** The MCP specification defines a standardized way for applications to share context with language models, expose tools/capabilities, and build composable integrations/workflows.
- **Verified:** The MCP Registry README explicitly says it provides MCP clients with a list of MCP servers, “like an app store for MCP servers.”
- **Verified:** Docker’s MCP registry positions a curated MCP catalog around discovery, container isolation, review, cryptographic signatures, provenance tracking, and SBOMs.
- **Verified:** OpenAI Apps SDK documentation describes distributable plugins built with skills, MCP servers, and optional UI.
- **Verified:** GitHub API scan on 2026-08-03 showed large current attention around MCP server and SDK repositories: `modelcontextprotocol/servers` at 89,142 stars, `punkpeye/awesome-mcp-servers` at 91,743 stars, and the official Python/TypeScript SDKs at 23,853 and 13,043 stars.

## Intuition

The agent ecosystem is recreating an app store, but the unit of software is changing. A human installs an app and decides later whether it is useful. An agent installs a capability and may use it inside a delegated task immediately. That makes normal app-store metadata too weak.

The missing layer is not only “where do I find tools?” It is “what exactly is this tool allowed to do, what has it proven, what evidence does it leave, and how do I revoke or compare it after real use?”

## Core Question

What if the next app store is not a storefront, but a local manifest ledger where agents install capabilities with permissions, proofs, evaluations, traces, rollback behavior, and trust history?

## Emerging Capability

- **Verified:** MCP servers can expose tools and capabilities to host applications through a standard protocol.
- **Verified:** Registries and catalogs already exist or are emerging for discovering MCP servers.
- **Verified:** Docker is bringing package-security primitives — signatures, provenance, SBOMs, isolation, review — into MCP distribution.
- **Verified:** OpenAI Apps SDK connects MCP servers with skills and optional UI, implying tool packages can become user-facing app surfaces.
- **Supported:** Agents are moving from chat-only assistance toward operating software through installed tools, browser control, local workbenches, and delegated workflows.
- **Inferred:** Once agents can choose among tools, capability selection becomes a runtime trust problem, not just marketplace discovery.

## Current Assumption

Agent tools should be listed in registries, installed by developers, secured through package provenance/isolation, and called by models when schemas match the user’s intent.

## Challenged Assumption

A tool schema and signed package are necessary but insufficient. For delegated autonomy, tools need receipts: observed behavior, task fit, approval requirements, reversibility, failure modes, eval results, and local trust history. The most important app-store primitive may become the manifest, not the store.

## Enabling Changes

- MCP standardizes the connector shape.
- Apps SDK-style platforms make MCP packages user-facing.
- Docker can package MCP servers with isolation and supply-chain evidence.
- GitHub and community lists create enough tool abundance to make selection painful.
- Local-first agent runtimes can store observed traces and permission history.
- Existing lab Vibes — Flight Recorders, Borrowed Rooms, Undo Gravity, Street Signs, Behavioral Canon — already define adjacent receipt and policy primitives.

## Missing Primitive

**Capability Receipt Manifest:** a small, inspectable file/object carried by every installed agent tool.

Minimum useful fields:

- identity: server/package/source/version/signature;
- declared capabilities and JSON schemas;
- permission class: read, write, purchase, publish, credentials, filesystem, browser, network;
- required user confirmations;
- reversibility and rollback notes;
- example successful traces;
- example failed traces;
- evaluation cards and benchmark caveats;
- data-retention and privacy behavior;
- UI surfaces/widgets exposed;
- local trust history: installed by, last used, success/failure, incidents;
- revocation path;
- compatibility with host, model, runtime, and sandbox;
- human-readable “why this tool exists” line.

## Adjacent Fields

- Mobile app stores and permission sheets
- Package managers and lockfiles
- SBOMs, provenance, and signing
- OAuth scopes and delegated authority
- MCP registries and Apps SDK plugins
- Browser-agent street signs
- Agent flight recorders and undo envelopes
- Local-first personal software
- Docker container isolation
- Evaluation cards and model/tool benchmarks

## Existing Evidence

- **Verified:** MCP specification: open protocol for LLM applications to integrate with data sources and tools; standardizes context sharing, tool exposure, and composable workflows.
- **Verified:** MCP Registry README: registry is “like an app store for MCP servers.” GitHub API scan showed active updates and 7,098 stars on 2026-08-03.
- **Verified:** Docker MCP Registry README: official curated catalog; entries appear in MCP catalog, Docker Desktop MCP Toolkit, and Docker Hub `mcp` namespace; highlights cryptographic signatures, provenance tracking, SBOMs, container isolation, curation/review, and discovery.
- **Verified:** OpenAI Apps SDK docs: plugins can be built/published with skills, MCP servers, and optional UI; reference says to prefer MCP Apps specification for shared UI fields when available.
- **Verified:** Apps SDK examples README: minimal integration lists tools, calls tools, and returns widgets; MCP keeps server, model, and UI in sync.
- **Verified:** GitHub API scan: `modelcontextprotocol/servers` 89,142 stars; `punkpeye/awesome-mcp-servers` 91,743 stars; `modelcontextprotocol/python-sdk` 23,853 stars; `modelcontextprotocol/typescript-sdk` 13,043 stars; `openai/openai-apps-sdk-examples` 2,293 stars.
- **Verified:** Product Hunt RSS surfaced agent/capability packaging signals such as `UniwebPay Skill` and `Termexo`; HN/Algolia surfaced `MCP Marketplace – an App Store for AI agent tools` and local-first AI agent frameworks.

## Contradicting Evidence

- **Verified:** Registry and catalog projects are still young; star counts and RSS entries are attention signals, not proof of durable market structure.
- **Supported:** Developers may prefer direct install commands and repo READMEs until non-technical users delegate real authority to agents.
- **Supported:** Supply-chain security can verify source/package integrity without proving useful, safe behavior under user tasks.
- **Inferred:** A manifest layer can become compliance theater if it is not tied to real traces and local observations.
- **Inferred:** Too much registry standardization too early could freeze bad abstractions before agents’ actual tool-use patterns stabilize.

## Open Questions

- What is the minimum receipt manifest that helps a user/agent choose safely without becoming enterprise paperwork?
- Should receipts be signed by tool authors, generated by hosts after use, or both?
- Can a local agent runtime maintain private trust scores without creating another opaque ranking system?
- Which permissions matter most for users: money, publishing, account mutation, filesystem mutation, credentials, private data, irreversible external actions?
- How should a tool store present “this tool is useful but dangerous” without burying the signal?
- Are registries public discovery layers while manifests and trust ledgers stay local?

## Strange Implications

- App discovery may move from stores to agents: the agent asks, “Which capability should I install for this task?”
- Reviews may become less important than replayable task traces.
- A good tool may advertise fewer capabilities, not more, because bounded authority is easier to trust.
- Local runtimes may become personal procurement departments for software.
- The future “install” button may require an eval card, sandbox class, and undo policy.
- The winning agent platforms may not have the most tools; they may have the clearest receipts.

## Possible Experiments

1. **Capability Receipt Card:** choose five MCP servers and hand-author a receipt manifest for each: permissions, data surfaces, reversibility, sample tasks, failure modes, and trust notes.
2. **Local Tool Shelf:** one-page local viewer over installed MCP servers with permission classes, last-used traces, revoke buttons, and source links.
3. **Install Decision Test:** compare a normal README/registry listing against a receipt card and measure whether a user can answer “would I let this touch my account?” faster and more accurately.
4. **Trace-Backed Trust:** run one harmless MCP tool in a sandbox and attach a Flight Recorder-style trace to the tool’s local manifest.
5. **Store Without Storefront:** prototype a command-line `tool-lock.json` that records tool identity, permissions, receipts, and observed behavior without building a marketplace.

## Potential Outcomes

- A local-first MCP tool shelf for Hermes/Aven.
- A public Capability Receipt Manifest proposal.
- A design language for user-facing agent tool installation.
- A small benchmark for tool trust legibility.
- A stronger bridge between agent security, package management, UI design, and autonomous workflows.

## Confidence

Emerging direction

## Status

Active

## Scoring

| Dimension | Score | Notes |
|---|---:|---|
| Originality | 7 | “MCP app store” is explicit; the receipt-manifest/local-ledger framing is the differentiated layer. |
| Technical plausibility | 8 | Manifest and local viewer are easy; adoption and standardization are hard. |
| Importance | 8 | Tool abundance without trust will bottleneck delegated agents. |
| Depth | 8 | Connects protocols, app stores, package security, UX, traces, and local-first agent memory. |
| Unexpectedness | 6 | The shift from app store to manifest ledger is subtle but structurally useful. |
| Prototype potential | 9 | Can be tested with existing MCP servers and no external authority. |
| Long term potential | 8 | Could become a default layer for personal agent runtimes. |
| Alignment with existing projects | 9 | Strong fit with Hermes/Aven, agent flight recorders, Orior/Pantom tooling, and local-first systems. |
| Defensibility | 6 | Specs are copyable; defensibility comes from tooling, taste, installed trust history, and workflow depth. |
| Research richness | 8 | Source paths include MCP governance, Docker security, OpenAI Apps SDK, package management, OAuth, SBOM/provenance. |
| Timing | 9 | MCP distribution pressure is current and visible. |

## Time Horizon

Immediate: prototype now. Near term: useful product surface in 1–3 years if agent tool use keeps growing.

## Sources

- MCP specification 2025-06-18: https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/docs/specification/2025-06-18/index.mdx
- MCP Registry: https://github.com/modelcontextprotocol/registry
- Docker MCP Registry: https://raw.githubusercontent.com/docker/mcp-registry/main/README.md
- OpenAI Apps SDK / Plugins docs: https://developers.openai.com/apps-sdk/llms.txt
- OpenAI Apps SDK reference: https://developers.openai.com/apps-sdk/reference.md
- OpenAI Apps SDK examples: https://raw.githubusercontent.com/openai/openai-apps-sdk-examples/main/README.md
- GitHub API scan for MCP and Apps SDK repositories, 2026-08-03.
- Product Hunt RSS scan, 2026-08-03: https://www.producthunt.com/feed
- HN/Algolia scan, 2026-08-03: `mcp server app store ai agents`, `local first ai agents`, `screen recorder ai workflow`.

## Unexpected Connections

- [Tool manifests and aircraft type certificates](../unexpected-connections/2026-08-03-tool-manifests-aircraft-type-certificates.md)

## Research Questions

### RQ-20260804-014831-5344 — We need receipts, but what about the store?

Yes: there is still a store. But the store should be **downstream of receipts**, not the core trust primitive.

Best architecture:

- **Public store/catalog:** discovery, categories, screenshots, install path, author identity, package signature, changelog, examples.
- **Local shelf:** tools actually installed for Max/Aven, with permissions, last-used state, incidents, revocation, and fit notes.
- **Capability receipts:** observed traces from real use: what the tool did, what changed, what failed, what required approval.
- **Policy layer:** what the agent may install/use automatically versus what requires explicit approval.

The mistake would be building a generic MCP marketplace first. The better v1 is a **Tool Shelf**: five hand-curated tools with receipt cards. Once receipts are clear, the store can rank tools by trust fit, not just popularity.

Possible name: **Capability Shelf** for local product; **Tool Manifest Store** for public/discovery layer.

**Evidence label:** **Supported** by MCP registry/store movement; **Inferred** for local shelf architecture.
