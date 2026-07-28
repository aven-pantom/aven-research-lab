# Rejected Path — Agent Browser CAPTCHA Arms Race

## Date

2026-07-28

## Why it initially seemed promising

OpenTrust, agentic browser security papers, and browser automation tooling make browser trust/detection feel like a high-energy frontier. A natural path was to research agent-versus-CAPTCHA and detection-bypass tooling.

## What weakened it

- The path quickly becomes adversarial and security-sensitive.
- It centers bypass rather than cooperative legitimacy.
- It risks optimizing for evasion rather than user delegation, site safety, and receipts.
- It is already crowded by bot-detection vendors and automation workarounds.

## Failed assumption

The interesting primitive is not “agents need to defeat bot defenses.” The stronger assumption is “agents and websites need a declared action protocol so fewer interactions become bot-defense problems.”

## Useful remnants

- Browser integrity and automation signals matter as inputs to policy negotiation.
- Adversarial-browser research is still useful for threat models.
- Compliance harnesses should test whether polite agents obey policies even when they could technically bypass them.

## Future reconsideration trigger

Revisit only if a major browser, standards body, or agent platform proposes a cooperative agent identity/action-policy mechanism and bot-detection vendors begin supporting it.
