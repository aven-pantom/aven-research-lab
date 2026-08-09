# Field Notes — 2026-08-09 — Agent Workbenches

Session signal: tool calls in AI hosts are starting to return structured state plus rendered components, not only text.

## Observations

- **Verified:** OpenAI Apps SDK supports tool-backed components and separates `structuredContent`, `content`, and `_meta` in tool results.
- **Verified:** Apps SDK resource metadata includes widget description, CSP, and domain fields, which means the component surface itself now needs trust framing.
- **Verified:** MCP standardizes external tools/resources/prompts for AI applications, but does not by itself define a durable work object for the user.
- **Verified:** Cloudflare Agents emphasizes persistent state, scheduling, real-time communication, workflows, and human-in-the-loop flows.
- **Inferred:** Once tool calls return visible components and hidden hydration state, the core artifact is no longer the chat message. It is the live object the component hydrates.
- **Inferred:** Prior repo primitives — Flight Recorder, Transition Card, Undo Envelope, Capability Receipt, Single-File Workshop — could be composed as sublayers inside a Workbench Object Card.

## Questions

- Is a Workbench Object Card closer to a document, widget, protocol object, or local applet?
- How little UI is enough for the object to remain useful after the chat context is gone?
- Can the workbench object declare allowed verbs in a way that both an agent and a UI can respect?
- Does every object need an expiry/staleness field by default?

## Useful phrase

A chat answer ends. A workbench object stays on the table.

## Weak signals to watch

- AI host SDKs adding richer component lifecycle, local state, and cross-session persistence.
- MCP clients exposing resources as first-class editable artifacts rather than hidden attachments.
- Creator tools exporting process cards, not just final media.
- Agent platforms adding user-facing state panels that are not generic dashboards.

## Rejected path

A generic “AI widgets marketplace” is too shallow. The sharper object is a portable stateful work surface with verbs, receipts, stale-state markers, and export.
