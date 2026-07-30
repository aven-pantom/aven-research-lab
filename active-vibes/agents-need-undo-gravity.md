# Agents Need Undo Gravity: Autonomy Should Feel Reversible by Default

## Name

Agents Need Undo Gravity: Autonomy Should Feel Reversible by Default

## Signal

**Verified:** GitHub API readings on 2026-07-30 showed sustained public developer attention around computer-use and coding-agent tools: `anthropics/claude-code` at 139,682 stars, `browser-use/browser-use` at 107,327, `cline/cline` at 65,262, `microsoft/autogen` at 60,117, `microsoft/OmniParser` at 25,211, `humanlayer/humanlayer` at 11,187, and `getzep/graphiti` at 29,383.

**Verified:** A newly observed repository, `vedaant00/opendot`, describes itself as “a terminal AI agent you can fully undo” where “every file and shell action is snapshotted and reversible.” The repo had only 8 stars at scan time, so this is not popularity evidence. It is a weak design signal.

**Verified:** Several small recently-updated repos describe screen recording or local traces for agents: `adityas2410/skillsmith` transforms screen recordings into skills for AI agents; `codedbytahir/recit` describes a local screen recording CLI plus MCP server; `jlave-dev/record` describes local-first screen recording and transcription for people and AI agents.

The signal is not that these repos are mature. The signal is that people are independently reaching for reversibility, snapshots, screen memory, human approval, and local traces as agent use leaves toy chat and touches real workspaces.

## Intuition

Users will not trust stronger agents merely because the agents explain themselves better. They will trust them when the surrounding software makes autonomy feel physically recoverable.

Today, most agent UX frames safety as permission: approve this tool, allow this command, confirm this purchase, review this diff. Permission is necessary, but it happens before or during action. The more important feeling may be after action: can I see what changed, can I step backward, can I isolate damage, can I replay the path, and can I let the agent try again inside a bounded recovery envelope?

The missing interface is not just “undo.” It is **undo gravity**: every autonomous action should naturally fall into a reversible, inspectable, restartable state unless it explicitly crosses an irreversible boundary.

## Core Question

What would personal software look like if agent actions were designed around reversible state envelopes before they were designed around chat, permissions, or productivity claims?

## Emerging Capability

A local-first agent workspace where actions produce recoverable state objects:

- file snapshots before and after action,
- command receipts and environment diffs,
- browser/session transition cards,
- human approval gates for irreversible exits,
- redacted screen traces,
- memory/context receipts,
- sandbox branches for risky attempts,
- recovery recipes when expected and observed deltas diverge.

The agent becomes less like a conversational assistant and more like a pilot operating inside a simulator with live commit controls.

## Current Assumption

The path to trustworthy agents is better reasoning, better tool permissions, better summaries, and better benchmarks.

## Challenged Assumption

Trust may come more from **recoverability** than from predicted correctness. A slightly weaker agent inside a strong reversible envelope may feel safer and become more useful than a stronger opaque agent that can leave behind uncertain state.

## Enabling Changes

- **Verified:** Coding and browser agents have visible public momentum across GitHub repos and vendor docs.
- **Verified:** MCP exists as a public protocol and tool ecosystem for exposing external context/actions to agents.
- **Verified:** Claude Code documentation exposes concepts such as settings and hooks, indicating agent tools are becoming configurable runtime environments rather than only chat boxes.
- **Supported:** Local-first and self-hosted software momentum is visible in large public repos such as `actualbudget/actual`, `immich-app/immich`, and `mediar-ai/screenpipe`.
- **Inferred:** As agents get access to terminals, files, browsers, memory, and connectors, users will need action recovery surfaces that live below the agent’s own narration.

## Missing Primitive

An **Undo Envelope**: a standard local object wrapped around an autonomous action or task.

Minimum fields:

- objective,
- scope boundary,
- pre-state snapshot pointers,
- action sequence,
- touched surfaces,
- irreversible-boundary flags,
- expected delta,
- observed delta,
- human approvals,
- memory/context items used,
- redactions,
- rollback method,
- replay artifact,
- final judgment.

The envelope should be generated even for successful actions. If receipts only appear after failure, they will feel punitive instead of architectural.

## Adjacent Fields

- Version control and database transactions.
- Filesystem snapshots and Time Machine-style recovery.
- Browser automation traces.
- Aircraft flight recorders and simulator checkrides.
- Human-in-the-loop robotics supervision.
- Capability security and borrowed-room workspaces.
- Local-first personal software.
- Screen recording and process mining.

## Existing Evidence

- **Verified:** `vedaant00/opendot` explicitly frames an agent around full undo and action snapshots.
- **Verified:** `humanlayer/humanlayer` positions itself around human-in-the-loop control for coding agents in complex codebases.
- **Verified:** `mediar-ai/screenpipe` describes local, private, persistent screen recording that can plug into agents.
- **Verified:** `browser-use/browser-use`, `simular-ai/Agent-S`, and `microsoft/OmniParser` indicate active interest in computer-use agents and GUI/screen parsing.
- **Verified:** Claude Code, MCP, and Cloudflare MCP docs show that agent runtime configuration and connector infrastructure are becoming normal surfaces.
- **Supported:** Previous lab Vibes — Agents Need Flight Recorders, Transition Tests, Borrowed Rooms, Peripheral Vision, and Street Signs — all converge on the same trust problem from different angles.

## Contradicting Evidence

- **Verified:** The most explicit “fully undoable agent” repo observed had only 8 stars at scan time. This is a weak signal, not market proof.
- **Supported:** Some actions cannot be rolled back: sent messages, purchases, credential exposure, public posts, destructive external API calls, and time-sensitive browser submissions.
- **Inferred:** Heavy snapshotting can become slow, storage-hungry, privacy-sensitive, and brittle across remote services.
- **Inferred:** Users may prefer vendor-native convenience until a visible failure creates demand for independent recovery layers.

## Open Questions

- What is the smallest Undo Envelope that feels useful rather than bureaucratic?
- Should rollback be automatic, suggested, or always human-confirmed?
- How does an envelope represent irreversible side effects outside the local machine?
- Can browser actions be made meaningfully reversible without cooperation from websites?
- Does the envelope live at OS level, IDE level, browser level, or agent runtime level?
- Can this become a portable primitive across agents rather than a feature inside one tool?

## Strange Implications

- Agent software may need “save points” more than chat threads.
- The decisive UX primitive for autonomy may be a recovery panel, not a prompt box.
- A personal agent could learn from failed rollbacks as much as from successful tasks.
- Local-first software becomes strategically important because rollback requires owning state.
- The line between agent benchmark and product UX may blur: a task is only complete when its state transition is both achieved and recoverable.

## Possible Experiments

1. **One-task Undo Envelope:** wrap a safe local agent-like task — edit a Markdown file, run a command, generate an artifact — with pre-state snapshot, action log, expected delta, observed delta, and rollback script.
2. **Browser irreversible-boundary card:** run a harmless browser flow and mark which steps are reversible, locally reversible, externally irreversible, or unknown.
3. **Agent receipt comparison:** compare a normal agent summary with an Undo Envelope for the same task; identify what the summary hides.
4. **Storage/friction test:** measure whether per-action snapshots are cheap enough for a day of realistic agent work.

## Potential Outcomes

- A local-first agent workspace where every run produces an Undo Envelope.
- A Pantom/Orior operations primitive: clients approve agent work from receipts with rollback/replay controls.
- A developer tool plugin that adds reversible envelopes to coding agents.
- A browser-agent safety layer that classifies irreversible boundaries before action.
- A new evaluation lens: task success plus recoverability score.

## Scoring

- Originality: 7
- Technical plausibility: 8
- Importance: 9
- Depth: 8
- Unexpectedness: 7
- Prototype potential: 9
- Long term potential: 8
- Alignment with existing projects: 9
- Defensibility: 7
- Research richness: 8
- Timing: 9

Shape: immediately testable as a local trace/snapshot layer; strategically valuable if agent vendors race toward capability faster than they solve recoverable state.

## Time Horizon

Immediate: prototype now.

Near term: viable in 1–3 years as agents become routine in terminals, browsers, and local personal software.

## Confidence

Emerging direction

## Status

Active

## Sources

- GitHub API readings on 2026-07-30 for `anthropics/claude-code`, `browser-use/browser-use`, `cline/cline`, `microsoft/autogen`, `microsoft/OmniParser`, `humanlayer/humanlayer`, `getzep/graphiti`, `mediar-ai/screenpipe`, `vedaant00/opendot`, `adityas2410/skillsmith`, `codedbytahir/recit`, `jlave-dev/record`, `adiabatichq/lamarck`.
- Claude Code hooks docs — https://docs.anthropic.com/en/docs/claude-code/hooks
- Claude Code settings docs — https://docs.anthropic.com/en/docs/claude-code/settings
- Model Context Protocol intro — https://modelcontextprotocol.io/docs/getting-started/intro
- Cloudflare Agents MCP docs — https://developers.cloudflare.com/agents/model-context-protocol/
- Previous lab Vibes: `agents-need-flight-recorders`, `agents-need-transition-tests`, `agents-need-borrowed-rooms-not-keys`, `agents-need-peripheral-vision`, `agents-need-street-signs`.

## Unexpected Connections

Undoable agents and civil aviation safety envelopes share a hidden structure: neither assumes the operator will always choose correctly. Instead, the system makes unsafe or unrecoverable transitions harder to enter, records what happened, and gives recovery procedures priority over explanation. Agent UX should borrow this posture. The goal is not to make the agent sound careful; it is to make the environment physically biased toward recoverable action.
