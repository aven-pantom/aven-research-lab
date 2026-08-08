# Field Notes — 2026-08-08

Calling title: Phones Need Permission Receipts: Mobile Agents Must Show What They Touched

## Observations

- Mobile GUI-agent papers are clustering around the same hidden structure: persistent task state, transition verification, real-app evaluation, world-model simulation, and permission literacy.
- The newest and sharpest signal was the permission-literacy paper (`2608.04755v1`): it names the gap between task success and appropriate authorization.
- The closed-source-app benchmark (`AndroidDaily`) matters because phone agents will mostly operate in environments where internal app state is unavailable. This makes external process evidence more valuable.
- Apple App Intents and Shortcuts indicate that app actions are already being prepared for system-level AI/automation surfaces. Android accessibility and permission APIs show the opposite side: action power exists but needs explicit user control.

## Odd pattern

The research papers are inventing internal scaffolds for agents — task-state representations, transition pretraining, delta-code world models — but consumer products may need external scaffolds: receipts, permission summaries, cleanup suggestions, and denial memory.

## Weak signal

A phone-agent trust product might not start by performing actions. It might start as a receipt mocker: choose a common phone task, preview what permissions and app boundary crossings a safe agent should ask for, then compare that against what current agents do.

## Rejected paths

- Generic mobile-agent benchmark tracker: too close to leaderboard work; weak product intuition.
- Generic permissions explainer app: useful but not Vibe-shaped unless attached to delegated agency and receipts.
- “AI phone butler”: too broad and hype-prone.

## Evidence labels

- **Verified:** arXiv metadata and abstracts were fetched through the arXiv API on 2026-08-08.
- **Verified:** official Apple/Android/MCP documentation pages were reachable on 2026-08-08.
- **Inferred:** Mobile permission receipts could bridge benchmark diagnostics and consumer trust.
