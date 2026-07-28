# Agents Need Street Signs: Websites Should Declare How Machines May Act

## Name

Agents Need Street Signs: Websites Should Declare How Machines May Act

## Signal

The scan started from a small Hacker News item, **OpenTrust — Browser trust signals for the AI era**, then widened into a repeated web-agent contradiction:

- **Verified:** `browser-use/browser-use` describes itself as making websites accessible for AI agents and had 107,127 GitHub stars when scanned on 2026-07-28.
- **Verified:** arXiv search surfaced recent web-agent/browser-agent work including **Building Browser Agents: Architecture, Security, and Practical Solutions** (2511.19477v1), **WAAA! Web Adversaries Against Agentic Browsers** (2605.05509v1), and **WebCanvas: Benchmarking Web Agents in Online Environments** (2406.12373v3).
- **Verified:** RFC 9309 standardizes `robots.txt` as a way for service owners to control crawler access.
- **Verified:** `AnswerDotAI/llms-txt` proposes `/llms.txt` as a file helping language models use a website.
- **Verified:** OpenTrust exposes privacy-preserving browser trust signals such as automation detection and browser integrity signals.

The web is starting to receive machine actors, but most of its signs still talk to either crawlers or humans. Agents that click, buy, fill forms, ask for permissions, and act for users need a middle layer: not just bot detection, and not just docs, but public machine-action street signs.

## Intuition

Browser agents will not become trustworthy by pretending to be people. Websites will not stay safe by treating every autonomous browser as a hostile bot. The missing primitive is a negotiated legibility layer: sites declare what machine actions are allowed, risky, forbidden, rate-limited, reversible, or require human confirmation; agents declare scope, provenance, authority, and receipts.

This is less like SEO and more like road signage. Roads do not trust cars blindly; they publish lanes, speed limits, stop signs, turn restrictions, loading zones, and emergency rules. Civil web agents may need the same grammar before they can act at scale without creating a silent permission war.

## Core Question

What if websites need machine-action street signs: a small public grammar that tells agents not only what content exists, but how they may safely act?

## Emerging Capability

- **Verified:** Browser automation and computer-use agents can already operate websites through ordinary browser surfaces.
- **Verified:** `robots.txt` demonstrates that web-wide voluntary machine-readable policy files can become normalized infrastructure.
- **Verified:** `/llms.txt` demonstrates current demand for model-readable website context, though it is not an action-permission protocol.
- **Verified:** OpenTrust and browser-agent security papers point to rising pressure around distinguishing trustworthy, automated, and adversarial browser interactions.
- **Supported:** Agent ecosystems are moving toward tool protocols, MCP servers, browser control, managed workers, and local session recording.
- **Inferred:** A compact action-policy layer could reduce brittle scraping, hidden bot detection, prompt-injection traps, and accidental user-harm by making safe paths explicit.

## Current Assumption

Websites should defend against bots through detection, rate limits, CAPTCHAs, authentication, and server-side heuristics. Agents should act through the same visual UI that humans use, then recover when blocked.

## Challenged Assumption

The web may need to stop treating machine action as an illegitimate side channel. Some agent work should be declared, scoped, logged, and guided through explicit rules. The valuable boundary is not human versus machine; it is authorized, legible, bounded action versus opaque action.

## Enabling Changes

- Browser agents are becoming easy enough that automation is no longer limited to specialists.
- Web-agent benchmarks make online interaction a research object rather than an edge case.
- Tool protocols such as MCP normalize explicit machine-callable capabilities.
- Local-first agent traces and flight-recorder patterns can attach receipts to action.
- Crawler policy (`robots.txt`) and model-readable docs (`llms.txt`) provide familiar deployment shapes.
- Security pressure around agentic browsers creates incentive for cooperative alternatives to pure bot detection.

## Missing Primitive

**Agent Street Signs:** a site-published, machine-readable action policy layer.

Minimum useful fields:

- site identity and policy version;
- allowed agent classes: crawler, summarizer, shopper, form assistant, support agent, developer agent;
- safe read surfaces;
- safe action surfaces;
- forbidden actions;
- consequential actions requiring human confirmation;
- rate limits and retry etiquette;
- auth/session expectations;
- anti-prompt-injection notes and untrusted-content zones;
- preferred APIs or MCP/tool endpoints when available;
- receipt requirements: action id, user authority, timestamp, outcome, reversible/delta field;
- contact/escalation route for agent failures;
- expiration/caching rules.

It could begin as a simple `/.well-known/agent-policy.json` or `/agents.txt`, but the important part is the grammar, not the filename.

## Adjacent Fields

- Robots Exclusion Protocol / `robots.txt`
- `/llms.txt` and model-readable documentation
- Browser automation and Playwright traces
- Web-agent benchmarks
- Bot detection and browser integrity signals
- MCP and tool registries
- OAuth scopes and app permissions
- Aviation, road, and maritime signaling systems
- Agent flight recorders and room contracts
- Website terms of service and platform governance

## Existing Evidence

- **Verified:** RFC 9309 specifies the Robots Exclusion Protocol and describes it as a method for service owners to control how automatic clients known as crawlers may access served content.
- **Verified:** The `AnswerDotAI/llms-txt` GitHub repository describes `/llms.txt` as “helping language models use your website” and had 2,531 stars at scan time.
- **Verified:** The OpenTrust README describes privacy-first browser trust signals and includes automation detection, browser integrity, webcam integrity, passive liveness, and microphone integrity checks.
- **Verified:** The OpenTrust GitHub repository was newly updated around the scan window and appeared in HN as “Browser trust signals for the AI era.” Its star count was small, so this is a weak but current signal, not proof of adoption.
- **Verified:** `browser-use/browser-use` had 107,127 GitHub stars and frames websites as accessible to AI agents.
- **Verified:** arXiv has recent browser/web-agent papers on practical architecture/security, adversarial agentic browsers, and online web-agent benchmarking.
- **Supported:** Recent HN scans also surfaced Screenpipe, ChatPanel, Freeact, and agent/browser tooling, indicating sustained developer attention around agent-mediated computer use.

## Contradicting Evidence

- **Verified:** `robots.txt` is advisory and historically limited to crawlers; bad actors can ignore it. An agent-policy file would share the same weakness unless paired with auth, receipts, enforcement, or incentives.
- **Verified:** OpenTrust is very early by stars; it is a signal of direction, not evidence of market pull.
- **Supported:** Websites may resist publishing machine-action policies because doing so exposes attack surfaces, commercial rules, or enforcement logic.
- **Supported:** Users may not understand when an agent is acting under site policy versus human instruction.
- **Inferred:** A standard could become bureaucratic slop if it tries to encode every possible website action instead of a few high-risk primitives.

## Open Questions

- What is the smallest policy grammar that covers useful action without becoming a second API spec?
- Should policy live in a text file, JSON under `.well-known`, embedded page metadata, MCP endpoint, or authenticated capability registry?
- How should sites express “you may read this but not submit this form” in a way agents actually obey?
- Can an agent receipt become an enforcement primitive, or is it only an audit artifact?
- How do policies interact with terms of service, privacy law, accessibility requirements, and user delegation rights?
- Can agent identity remain privacy-preserving while still proving user authorization?

## Strange Implications

- Bot detection may become less important than bot diplomacy.
- Web design could gain a hidden signage layer parallel to visual UI.
- SEO may split into “content visibility” and “action hospitality.”
- The safest path for agents may be neither scraping nor full APIs, but declared micro-affordances with receipts.
- Websites might compete on how well they host trusted agents.
- Personal agents may need to read road signs before they need better reasoning.

## Possible Experiments

1. **Static agent-policy sketch:** define a tiny `agent-policy.json` for one public documentation site with read, quote, summarize, contact, and forbidden purchase/form actions.
2. **Browser-agent compliance harness:** run a harmless browser-use/Playwright agent against a synthetic site and test whether it obeys policy hints before acting.
3. **Receipt handshake:** combine an agent policy with an Agent Flight Recorder receipt: policy version, allowed action, user scope, final delta.
4. **Prompt-injection signage test:** mark untrusted page zones and test whether an agent treats them differently from trusted site instructions.
5. **Policy compression study:** compare `robots.txt`, `llms.txt`, API docs, and terms pages; extract the smallest recurring fields useful to agents.

## Potential Outcomes

- A practical proposal for `/.well-known/agent-policy.json` or `/agents.txt`.
- A tiny open-source demo: synthetic site + policy file + browser-agent compliance viewer + receipt.
- A new primitive for Hermes/Aven-style agents: check site street signs before action.
- A bridge between Max's Agent Flight Recorder, Borrowed Rooms, Peripheral Vision, and civil drone intent-card research.
- A defensible interface language for “polite agents” rather than personality-first assistants.

## Confidence

Emerging direction

## Status

Active

## Scoring

| Dimension | Score | Notes |
|---|---:|---|
| Originality | 7 | Many pieces exist separately; the street-sign/action-policy framing is the useful synthesis. |
| Technical plausibility | 8 | Simple files and browser-agent checks are easy; adoption and enforcement are hard. |
| Importance | 8 | Browser agents need a trust path that is not permanent bot warfare. |
| Depth | 8 | Connects web standards, security, UX, agent traces, permissions, and governance. |
| Unexpectedness | 7 | The road-sign/drone-intent analogy clarifies a hidden shared structure. |
| Prototype potential | 8 | A synthetic demo can be built quickly without touching real accounts. |
| Long term potential | 8 | Could become part of a web-agent civility layer. |
| Alignment with existing projects | 9 | Strong fit with Hermes/Aven, local-first agents, agent receipts, Orior/Pantom operations. |
| Defensibility | 6 | Protocol proposals are easy to copy; defensibility comes from tools, taste, and adoption. |
| Research richness | 8 | Good source paths across standards, HCI, security, benchmarks, and product movement. |
| Timing | 8 | Browser agents are crossing from demos into everyday tooling now. |

## Time Horizon

Near term: a useful prototype is viable now; broad adoption would require 1–3 years of standardization, incentives, and product pressure.

## Sources

- RFC 9309 — Robots Exclusion Protocol: https://www.rfc-editor.org/rfc/rfc9309.txt
- AnswerDotAI `/llms.txt` repository: https://github.com/AnswerDotAI/llms-txt
- OpenTrust repository and README: https://github.com/rafaelEt/opentrust
- browser-use repository: https://github.com/browser-use/browser-use
- arXiv 2511.19477v1 — Building Browser Agents: Architecture, Security, and Practical Solutions: https://arxiv.org/abs/2511.19477
- arXiv 2605.05509v1 — WAAA! Web Adversaries Against Agentic Browsers: https://arxiv.org/abs/2605.05509
- arXiv 2406.12373v3 — WebCanvas: Benchmarking Web Agents in Online Environments: https://arxiv.org/abs/2406.12373
- HN Algolia scan for “AI agent browser automation,” “browser trust AI,” and local-first AI tooling, 2026-07-28.

## Unexpected Connections

- [Agent street signs and drone intent cards](../unexpected-connections/2026-07-28-agent-street-signs-drone-intent-cards.md)
