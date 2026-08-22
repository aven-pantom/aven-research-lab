# Agents Need Editors at the Door: Tool Output as Evidence, Not Token Sludge

## Name

Agents Need Tool Output Diets

## Signal

Agent runtimes are gaining access to MCP servers, browser drivers, codebase indexes, RAG stores, local memories, package managers, and logs. The newest friction is no longer simple tool access. It is deciding what form a tool result should take before it becomes working context.

## Intuition

A tool output should not automatically enter the agent's mind as raw text, compressed text, or a loose citation. It should pass through an evidence-intake layer that declares what it proves, what it cannot prove, what was transformed, what must remain raw, and what must be rechecked before action.

The missing primitive is not bigger context. It is a diet for context.

## Core Question

Can agents become safer and more reliable if every high-consequence tool result arrives with a Tool Output Diet Card before it is admitted into working memory?

## Emerging Capability

Tool ecosystems now expose enough raw material to create structured evidence objects: repository metadata, browser traces, DOM snapshots, code graphs, RAG chunks, logs, MCP capability lists, package-manager output, file diffs, screenshots, and model-router evaluations. These can be classified, compressed, quarantined, redacted, and linked to raw artifacts before the model reasons over them.

## Current Assumption

The main problem with tool output is quantity: too many tokens, too much JSON, too many logs, too much retrieved text.

## Challenged Assumption

The deeper problem is admissibility. A short summary can be more dangerous than a long raw output if it hides provenance, staleness, redaction, injection risk, or evidence loss.

## Enabling Changes

- **Verified:** `MidTool` treats real-world tool APIs, MCP skills, and document-grounded workflows as training material for general agentic tool use.
- **Verified:** GitHub API metadata for `headroomlabs-ai/headroom` describes a product surface for compressing tool outputs, logs, files, and RAG chunks before they reach the LLM.
- **Verified:** GitHub API metadata for `DeusData/codebase-memory-mcp`, `microsoft/playwright-mcp`, `github/github-mcp-server`, `ChromeDevTools/chrome-devtools-mcp`, and `vercel-labs/agent-browser` shows active high-star tool surfaces for code, browser, and product automation.
- **Verified:** `The Third Restructuring of Software Form` argues that software architecture is converging toward storage + models + agents, with deterministic logic retained as tools where needed.
- **Verified:** `Projecting BrowseComp-Plus onto ClimbMix` uses a source-grounding pipeline with automatic verification, independent-agent checking, and human review before retaining evidence, suggesting that evidence admission can be procedural.
- **Supported:** Context budgets, state barometers, task models, package quarantine, credential leases, and capability receipts already point toward structured boundaries around what agents may believe and do.

## Missing Primitive

A **Tool Output Diet Card**:

- Tool / source
- Authority used
- Raw artifact pointer
- Output type
- What it proves
- What it does not prove
- Transformation applied
- Compression method
- Preserved fields
- Omitted fields
- Redactions
- Prompt-injection risk
- Privacy sensitivity
- Staleness horizon
- Mutation eligibility
- Required recheck
- Quarantine decision
- Confidence
- Receipt

## Adjacent Fields

- Context engineering
- MCP/tool protocols
- RAG and retrieval evaluation
- Log summarization
- Data provenance
- Chain-of-custody systems
- Browser-agent safety
- Software supply-chain quarantine
- Customs inspection / border control
- Evidence law and admissibility

## Existing Evidence

- **Verified:** `MidTool` frames general tool use as a capability that can be shaped through synthetic data from APIs, MCP skills, and workflows.
- **Verified:** `headroomlabs-ai/headroom` is explicitly positioned around compressing tool outputs, logs, files, and RAG chunks before they enter the LLM.
- **Verified:** `DeusData/codebase-memory-mcp` describes persistent codebase knowledge graphs that reduce context usage; this is a concrete example of tool output being pre-shaped before model use.
- **Verified:** `Pandora's AI Model Routing Box` formalizes cases where estimating whether to use a specialist has its own cost; tool-output filtering has a parallel inspection-cost tradeoff.
- **Verified:** `BrowseComp-Plus` projection work decomposes answers into atomic reasoning hops and verifies evidence before retaining a benchmark item.
- **Supported:** Browser and code MCP servers can produce authority-rich outputs whose misuse can cause real account/file/code mutations.

## Contradicting Evidence

- **Supported:** In many ordinary coding-agent cases, simple compression may be enough; not every tool call deserves a card.
- **Inferred:** A Diet Card can become compliance theater if it repeats the output instead of making an admissibility decision.
- **Inferred:** Some outputs lose value when compressed. Raw pointers and sealed artifacts must remain first-class.
- **Unknown:** There is no direct benchmark yet showing Tool Output Diet Cards outperform compressed summaries or citation lists.

## Open Questions

- Which tool outputs require a Diet Card by default?
- What is the smallest card that changes agent behavior without becoming bureaucracy?
- Should tools produce these cards themselves, or should the runtime wrap them?
- Can a model be trained to respect mutation eligibility and recheck triggers?
- How should raw artifacts be sealed, redacted, expired, and replayed locally?
- Can the card become a standard MCP result envelope without bloating every tool response?

## Strange Implications

- Context windows may need border control, not just compression.
- Tool outputs may become inadmissible evidence even when technically available.
- Agent trust may depend on what the runtime refuses to let the model casually absorb.
- RAG systems may need quarantine receipts for untrusted retrieved text.
- The future agent debugger may inspect diets: what the model was allowed to eat before acting.

## Possible Experiments

1. Hand-author 20 Tool Output Diet Cards across git output, package suggestions, browser DOM, codebase search, arXiv metadata, logs, RAG chunks, file diffs, screenshots, MCP capabilities, and local memory retrieval.
2. Compare raw output, compressed summary, and Diet Card plus raw pointer.
3. Measure whether reviewers catch stale evidence, prompt-injection risk, private data, unsafe mutation eligibility, and hidden evidence loss faster with the card.
4. Add one deliberately lossy compressed summary to test whether the card forces a raw-evidence recheck.

## Potential Outcomes

- **Prototype candidate:** a local wrapper that converts tool results into Markdown/JSON Diet Cards for Hermes/Aven runs.
- **Agent-runtime primitive:** tool APIs return admissibility envelopes, not just payloads.
- **MCP extension:** capability schemas include output-risk classes and required raw-artifact pointers.
- **Rejected path:** generic context compression remains useful but insufficient for high-consequence work.

## Confidence

Emerging direction

## Status

Active

## Sources

- `source-library/2026-08-22-tool-output-diets.md`
- MidTool: <https://arxiv.org/abs/2608.20314v1>
- The Third Restructuring of Software Form: <https://arxiv.org/abs/2608.20201v1>
- Pandora's AI Model Routing Box: <https://arxiv.org/abs/2608.20316v1>
- Projecting BrowseComp-Plus onto ClimbMix: <https://arxiv.org/abs/2608.20317v1>
- Inducing Task Models from Computer-Use Traces: <https://arxiv.org/abs/2608.20319v1>
- Headroom: <https://github.com/headroomlabs-ai/headroom>
- Codebase Memory MCP: <https://github.com/DeusData/codebase-memory-mcp>
- Playwright MCP: <https://github.com/microsoft/playwright-mcp>
- GitHub MCP Server: <https://github.com/github/github-mcp-server>
- Chrome DevTools MCP: <https://github.com/ChromeDevTools/chrome-devtools-mcp>
- Vercel Agent Browser: <https://github.com/vercel-labs/agent-browser>

## Unexpected Connections

- [Tool Output Diets and Customs Inspection](../unexpected-connections/2026-08-22-tool-output-diets-customs-inspection.md)

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Compression, provenance, and quarantine exist separately; the distinct move is treating tool output as evidence crossing a context border. |
| Technical plausibility | 8 | Can be tested with Markdown/JSON cards before runtime integration. |
| Importance | 8 | Tool output is becoming the material agents think with; silent evidence loss will compound. |
| Depth | 8 | Connects context budgets, RAG, MCP, package quarantine, state verification, and model routing. |
| Unexpectedness | 7 | The useful analogy is customs inspection rather than summarization. |
| Prototype potential | 8 | A fixture can be built immediately around existing tool logs. |
| Long term potential | 8 | Could become an agent-runtime result envelope or MCP convention. |
| Alignment with existing projects | 9 | Direct fit for Aven/Hermes, local-first agents, agent receipts, and personal software workshops. |
| Defensibility | 6 | Easy to imitate unless tied to real traces, raw-artifact custody, and workflow-specific policy. |
| Research richness | 8 | Strong source base across tool-use training, MCP growth, context compression, and evidence verification. |
| Timing | 9 | Tool/MCP surfaces and context-compression products are visibly expanding now. |

## Time Horizon

Immediate: prototype now as a 20-card local fixture. Near term: wrap selected Hermes tool outputs with Diet Cards. Medium term: test as an MCP/tool-result envelope with mutation eligibility and raw-artifact custody.
