# Experiment — Capability Receipt Card

## Objective

Test whether a small receipt-style manifest makes an MCP server/tool easier to evaluate for delegated agent use than a normal README or registry listing.

## Hypothesis

A Capability Receipt Card will help a user answer trust questions faster: what the tool can do, what authority it needs, what could go wrong, how it can be revoked, and what evidence it leaves.

## Materials

- Five existing MCP servers or Apps SDK examples.
- Public README/registry metadata.
- Hand-authored receipt cards.
- A simple Markdown or local HTML viewer.

## Receipt fields

- Name/source/version
- Declared capabilities
- Permission class
- Data touched
- External side effects
- Required confirmations
- Reversibility/rollback
- Sandbox/isolation notes
- Example success trace
- Example failure mode
- Revocation path
- Local trust notes
- Evidence label

## Procedure

1. Select five harmless/public MCP tools.
2. Read only existing public metadata first and write down what remains unclear.
3. Author a Capability Receipt Card for each tool using source-backed claims only.
4. Build a minimal viewer that compares README summary vs receipt card.
5. Run a decision test: would this tool be allowed to read local files, mutate an account, spend money, publish content, or access credentials?

## Success criteria

- The card exposes at least three important trust questions not obvious from the README.
- The card can be completed in under 20 minutes per tool from public metadata plus one sandbox run.
- The viewer makes permission differences legible without security jargon.

## Failure criteria

- The card duplicates README content without improving decisions.
- The fields become too broad or compliance-heavy.
- The key questions require private vendor/security data unavailable to users.

## Stopping condition

Stop after five tools. Do not build a marketplace until the receipt card proves useful.

## Connected Vibes

- [The Next App Store Is a Tool Manifest](../active-vibes/the-next-app-store-is-a-tool-manifest.md)
- [Agents Need Flight Recorders](../active-vibes/agents-need-flight-recorders.md)
- [Agents Need Borrowed Rooms](../active-vibes/agents-need-borrowed-rooms-not-keys.md)
- [Agents Need Undo Gravity](../active-vibes/agents-need-undo-gravity.md)
