# Source Notes — Agent Street Signs

## Scan date

2026-07-28

## Primary signal

A current developer signal around browser trust and agent automation: HN surfaced **OpenTrust — Browser trust signals for the AI era**, while adjacent HN results surfaced Screenpipe, Freeact, ChatPanel, Palmier Pro, and multiple agent-control utilities. The stronger pattern is not OpenTrust itself; it is that websites and browsers are entering a phase where autonomous actors need declared trust, permissions, and legibility.

## Sources checked

### RFC 9309 — Robots Exclusion Protocol

- URL: https://www.rfc-editor.org/rfc/rfc9309.txt
- Evidence label: **Verified**
- What it says: RFC 9309 standardizes the Robots Exclusion Protocol and describes it as a method for service owners to control how content may be accessed by automatic clients known as crawlers.
- Relevance: Provides the closest mature precedent for simple site-published machine-readable policy.
- Limitation: Crawler-oriented and advisory; does not describe delegated user actions, form submission, purchases, account changes, receipts, or agent provenance.

### AnswerDotAI `/llms.txt`

- URL: https://github.com/AnswerDotAI/llms-txt
- Evidence label: **Verified**
- GitHub API scan: 2,531 stars; updated 2026-07-28T21:15:35Z.
- Repository description: “The /llms.txt file, helping language models use your website.”
- Relevance: Shows live demand for model-readable website context.
- Limitation: Documentation/context layer, not a policy/action-permission layer.

### OpenTrust

- URL: https://github.com/rafaelEt/opentrust
- Evidence label: **Verified weak signal**
- GitHub API scan: 3 stars; updated 2026-07-27T00:41:04Z.
- Repository description: “OpenTrust is an open-source SDK that helps developers collect privacy-first browser trust signals — browser integrity, automation detection, webcam integrity, and passive liveness.”
- README claim checked: exposes browser-side trust signals such as automation detection, browser integrity, webcam integrity, passive liveness, and microphone integrity.
- Relevance: A fresh small signal that trust/bot/agent detection is becoming productized at the browser edge.
- Limitation: Very early adoption; should not be treated as market proof.

### browser-use

- URL: https://github.com/browser-use/browser-use
- Evidence label: **Verified**
- GitHub API scan: 107,127 stars; updated 2026-07-28T21:24:54Z.
- Repository description: “Make websites accessible for AI agents. Automate tasks online with ease.”
- Relevance: Strong evidence that browser-based agent action is a major developer behavior.
- Limitation: Star counts signal attention, not safe real-world adoption.

### arXiv — Building Browser Agents

- URL: https://arxiv.org/abs/2511.19477
- Evidence label: **Verified metadata**
- arXiv search result: **Building Browser Agents: Architecture, Security, and Practical Solutions**, 2511.19477v1, submitted 2025-11-22.
- Abstract snippet from API: browser agents enable autonomous web interaction but face reliability and security challenges in production.
- Relevance: Near-primary research signal for browser-agent production issues.
- Limitation: Full paper not read in this run; only metadata/abstract snippet scanned.

### arXiv — WAAA! Web Adversaries Against Agentic Browsers

- URL: https://arxiv.org/abs/2605.05509
- Evidence label: **Verified metadata**
- arXiv search result: 2605.05509v1, submitted 2026-05-06.
- Abstract snippet from API: LLMs are being integrated into browsers to create agentic browsing systems executing actions on behalf of users.
- Relevance: Security pressure around agentic browsers.
- Limitation: Full paper not read in this run.

### arXiv — WebCanvas

- URL: https://arxiv.org/abs/2406.12373
- Evidence label: **Verified metadata**
- arXiv search result: **WebCanvas: Benchmarking Web Agents in Online Environments**, 2406.12373v3.
- Abstract snippet from API: web agents must adapt to continuously evolving web environments; most benchmarks are insufficiently online/realistic.
- Relevance: Web-agent action is treated as an environmental interaction problem, not only language output.
- Limitation: Benchmark framing does not directly solve site-agent policy negotiation.

### HN Algolia scans

- Evidence label: **Verified scan results**
- Queries checked: `AI agent browser automation`, `Show HN browser trust AI`, `Show HN local first AI app`, `Show HN AI video editor macOS`, `Show HN agent status menubar`, plus several fashion/creator/drone queries.
- Notable results:
  - 2026-07-23 — OpenTrust — Browser trust signals for the AI era.
  - 2026-07-23 — Screenpipe — Record how you work and turn that into agents.
  - 2026-07-20 — Freeact — browser automation CLI for AI agents via real browsers.
  - 2026-07-21 — ChatPanel — privacy-first AI Agent browser side panel.
  - 2026-07-23 — Palmier Pro — open-source macOS video editor built for AI.
  - 2026-06 to 2026-04 — multiple agent menu-bar/status tools such as VibeBar, Whiplash, Claudebar, Adrafinil.
- Relevance: Developer/community movement around long-running agents, browser control, trust signals, local capture, and AI-native creative tools.
- Limitation: HN visibility is not mainstream consumer validation.

## Source assessment

The source base is strong enough for an **Emerging direction** but not for a standards claim. The most reliable evidence is that browser agents and website-readable machine docs are real; the speculative leap is that these will converge into an action-policy/street-sign layer.

## Follow-up sources

- W3C Verifiable Credentials / Decentralized Identifiers for agent identity and receipts.
- `.well-known` URI registry and security best practices.
- OAuth scopes and dynamic client registration.
- Terms-of-service research around delegated user agents.
- Bot-detection papers focused on LLM browser agents.
- MCP server discovery and capability declaration patterns.
