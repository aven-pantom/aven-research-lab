# Agents Need Eagerness Governors: Autonomy Should Have Throttles, Not Personality

## Name

Agents Need Eagerness Governors: Autonomy Should Have Throttles, Not Personality

## Signal

Agent platforms are starting to expose the same hidden problem from different angles: models can now act across tools, servers can ask users for more structured input inside workflows, coding agents can run long tasks, and prompt guides explicitly discuss controlling “agentic eagerness.” The frontier is no longer only whether the agent can act. It is how much initiative it should take at each boundary.

Evidence labels:

- **Verified:** OpenAI's GPT-5 prompting guide includes a section on “Controlling agentic eagerness” and describes calibrating proactivity versus awaiting guidance.
- **Verified:** The 2025-06-18 Model Context Protocol specification includes client-side elicitation, allowing servers to request structured user input through the client during nested workflows.
- **Verified:** MCP elicitation warns that servers must not request sensitive information and that applications should make the requesting server clear, allow review/modify, and provide decline/cancel options.
- **Verified:** Product Hunt's current feed includes multiple products around agent work and delegation, including Basedash Tasks (“Run your business on autopilot”), Munder Difflin (“Make clones with Claude Code and Codex to do your work”), Port22 (“Claude Code, Codex & more on your phone”), and BrowserAct Cloud (“Scrape any data from any website with one prompt”).
- **Supported:** The lab's recent Vibes around Shadow Runs, Credential Leases, Action Maps, Attention Airlocks, and Continuation Ports all point toward scoped autonomy rather than raw capability.
- **Inferred:** Consumer trust will depend on visible autonomy throttles: when to observe, ask, draft, stage, act, stop, or escalate.

## Intuition

Agents need **eagerness governors**: compact, visible policies that set how much initiative an agent may take in a task phase, surface, tool, or risk class. Today this is mostly buried in prompts: “be proactive,” “ask before doing X,” “do not overdo it,” “continue until done.” That is not enough for long-running, multi-tool, user-facing agents.

The missing layer is not another permission prompt. Permissions answer “may this action happen?” Eagerness answers “how hard should the agent push before asking, waiting, staging, or stopping?” A safe agent may still be too eager; a capable agent may still need to idle.

## Core Question

Can agent autonomy be governed through small inspectable eagerness envelopes instead of brittle personality prompts and implicit platform defaults?

## Emerging Capability

A task can carry an **Eagerness Governor Card** that defines:

- allowed initiative level by phase;
- context-gathering budget;
- tool-call budget;
- when to ask versus infer;
- when to use elicitation;
- reversible-only versus staged versus live-action mode;
- stale-state stop conditions;
- sensitive-info refusal boundaries;
- escalation triggers;
- receipt cadence;
- expiry and reset rules.

The card lets the user say: “For this work, be assertive in research, conservative in account changes, silent during routine checks, and interrupt me only when a stale assumption would change the outcome.”

## Current Assumption

Agent initiative is mostly treated as a model behavior or prompt style: make the system more autonomous, less autonomous, more thorough, less eager, or more concise.

## Challenged Assumption

Eagerness should be an interface primitive and runtime contract, not a vibe inside the prompt. The same agent may need radically different eagerness settings across the same task: wander during source discovery, ask during user-data elicitation, stage before account mutation, act automatically on reversible local formatting, and stop at credential boundaries.

## Enabling Changes

- **Verified:** Modern prompting guidance now explicitly names agentic eagerness as something to tune.
- **Verified:** MCP supports capability negotiation and nested elicitation, making agent/server/user interaction more structured than plain chat.
- **Supported:** Coding-agent and browser-agent products are normalizing delegated work that lasts beyond a single reply.
- **Supported:** The lab already has primitives for state, permission, transition, credential, action, and attention receipts; eagerness is the control layer that chooses between them.
- **Inferred:** As agents become resident, cross-surface, and mobile, users will need autonomy profiles they can inspect quickly without reading system prompts.

## Missing Primitive

**Eagerness Governor Card**

Minimum fields:

- task name and surface;
- phase list: observe, research, plan, draft, stage, act, verify, report;
- initiative level per phase: silent / conservative / normal / assertive / exploratory;
- ask-before rules;
- do-without-asking rules;
- tool-call and context budget;
- stale-state timeout;
- irreversible-action boundary;
- elicitation policy;
- sensitive-data policy;
- receipt rhythm;
- stop and escalation triggers;
- owner override;
- expiry.

## Adjacent Fields

- Computer-use agents and coding agents.
- MCP tools, elicitation, roots, sampling, and capability negotiation.
- Human factors, automation mode confusion, and aviation cockpit automation.
- Mobile notification controls and attention management.
- Workflow engines and runbooks.
- Security UX and least-privilege authorization.
- Local-first personal software and agent workbenches.

## Existing Evidence

- **OpenAI GPT-5 prompting guide:** names “agentic eagerness” and frames it as a controllable balance between proactive action and awaiting explicit guidance.
- **MCP specification:** defines hosts, clients, servers, resources, prompts, tools, sampling, roots, elicitation, progress, cancellation, errors, and logging — a more structured interaction substrate than raw prompt/tool blobs.
- **MCP elicitation:** gives servers a structured way to ask for information while recommending clear UI, review, modify, decline, and cancel controls.
- **Product movement:** current Product Hunt listings show delegated-work products around autopilot business operations, phone access to coding agents, browser scraping agents, and multi-agent coding clones.
- **IntegrityBench abstract:** recent arXiv work on LLM research integrity argues that models under pressure can fail integrity-critical decisions; even if the benchmark details require deeper review, it reinforces that “agent does the thing” is not the same as “agent acted with the right restraint.”

## Contradicting Evidence

- **Supported:** Prompt-level eagerness control may be sufficient for narrow, low-risk coding tasks; a visible governor could be overkill if it becomes another settings panel.
- **Supported:** Too many knobs can create automation paralysis. The primitive must be compact and task-derived, not a cockpit of sliders.
- **Unknown:** It is not yet clear whether users can understand eagerness levels better than simple approve/deny prompts.
- **Unknown:** Platforms may solve much of this at the model/runtime layer, leaving little room for independent product primitives.
- **Contradicted risk:** Some tasks genuinely benefit from persistent initiative. A governor that makes every agent timid would destroy the value of delegation.

## Open Questions

1. What are the fewest eagerness states users can understand without reading policy text?
2. Should eagerness be set by task type, risk class, surface, user preference, or learned correction history?
3. Can an agent explain why it chose to ask, wait, continue, or stop in one sentence?
4. How should MCP elicitation requests inherit or override the task governor?
5. Can stale-state timeouts prevent unsafe continuation without annoying users?
6. Does visible eagerness reduce mode confusion, or merely move confusion into another card?
7. Which receipts matter: silence receipts, ask receipts, staged-action receipts, or boundary-crossing receipts?

## Strange Implications

- Autonomy may need a throttle before it needs better memory.
- “Helpful” could become a runtime mode, not a personality trait.
- The best consumer agent UI may feel less like chat and more like a set of small live contracts.
- A future app may publish not only its tools, but its recommended eagerness envelope for each action.
- Agent marketplaces may need to compare default initiative behavior, not only capabilities.

## Possible Experiments

1. **Eagerness Governor Card fixture:** hand-author 25 cards across coding, browser research, shopping, calendar, file organization, CRM, and phone-agent tasks.
2. **Prompt-only comparison:** run or simulate five tasks with normal prompt instructions versus governor cards; compare unnecessary asks, unsafe assumptions, tool sprawl, and user interruption.
3. **MCP elicitation inheritance test:** create a mock MCP workflow where a server requests user input; test whether the governor changes accept/decline/review behavior.
4. **Autonomy throttle UI:** build a tiny workbench with five modes — observe, draft, stage, act, stop — and receipts for each transition.
5. **Correction-derived governor:** extract governor rules from 20 user corrections: “don’t ask me about reversible formatting,” “ask before account writes,” “stop after 10 minutes stale.”

## Potential Outcomes

- **Immediate:** a Markdown/JSON Eagerness Governor Card and fixture set.
- **Near term:** a local agent workbench control strip that displays current phase, initiative level, next boundary, and stop/escalate controls.
- **Medium term:** MCP/tool-runner middleware that enforces eagerness budgets, elicitation policy, and stale-state stops.
- **Long term:** autonomy profiles that travel with users, tasks, apps, and agents as a behavioral canon extension.

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Prompt eagerness exists, but treating it as a portable runtime contract is sharper. |
| Technical plausibility | 8 | Cards, fixtures, and middleware are buildable now. |
| Importance | 8 | Multi-tool agents fail trust when initiative is wrong, not only when output is wrong. |
| Depth | 8 | Connects prompts, MCP, security UX, attention, credentials, and human factors. |
| Unexpectedness | 7 | The missing control may be a throttle, not a smarter model. |
| Prototype potential | 9 | A static card + small simulator can be made quickly. |
| Long term potential | 8 | Could become part of personal-agent canon and app action maps. |
| Alignment with existing projects | 9 | Strong fit with Aven/Hermes, local-first agents, Pantom tools, and prior agent Vibes. |
| Defensibility | 6 | Platform vendors may absorb the primitive; defensibility comes from taste and trace history. |
| Research richness | 8 | Strong source base across agent prompts, MCP, automation trust, and delegated work products. |
| Timing | 9 | Agent delegation products and protocols are live now. |

## Confidence

Emerging direction

## Status

Active

## Sources

- OpenAI Cookbook — GPT-5 prompting guide: https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/gpt-5/gpt-5_prompting_guide.ipynb
- Model Context Protocol specification 2025-06-18: https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/docs/specification/2025-06-18/index.mdx
- Model Context Protocol — Elicitation 2025-06-18: https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/docs/specification/2025-06-18/client/elicitation.mdx
- Product Hunt feed, 2026-08-14/15 snapshot: https://www.producthunt.com/feed
- arXiv — Diagnostic Foundation for Evaluating LLMs' Research Integrity as Co-Scientists: https://arxiv.org/abs/2608.12345

## Unexpected Connections

Eagerness governors share structure with aircraft automation modes. The danger is not only that automation fails; it is that the human misunderstands what mode it is in, how assertively it will continue, and where it will hand control back. Agents need the equivalent of mode awareness: active phase, initiative level, authority envelope, next boundary, and a clear way to disconnect or retune before the system crosses from helpful to hazardous.
