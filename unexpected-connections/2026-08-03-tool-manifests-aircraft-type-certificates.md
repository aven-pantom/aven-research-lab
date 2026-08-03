# Unexpected Connection — Tool Manifests and Aircraft Type Certificates

## Fields

- Agent tool distribution / MCP registries
- Aviation certification / type certificates / maintenance logs

## Shared structure

Both fields have the same hidden problem: a capability is dangerous when its interface looks simple but its operational envelope is invisible.

An aircraft is not trusted because it has wings. It is trusted because a long evidence system surrounds it: type design, operating limitations, maintenance history, inspections, airworthiness directives, approved configurations, pilot authority, and incident records.

An agent tool should not be trusted because it has a clean schema or many stars. It needs its own operating envelope: declared capabilities, forbidden actions, permissions, reversibility, sandbox class, known failure modes, test traces, version history, and incident receipts.

## Mechanism transfer

Aviation suggests that tool trust should be separated into layers:

1. **Type evidence:** what the tool is designed to do.
2. **Configuration evidence:** exactly which version/source/build is installed.
3. **Operational limitations:** what it must not do without approval.
4. **Maintenance/incident history:** what happened during real use.
5. **Authority boundary:** who can authorize consequential action.

Docker-style provenance and SBOMs cover part of layer 2. MCP schemas cover part of layer 1. Agent Flight Recorders cover layer 4. The missing primitive is the unified operating envelope that lets a user or runtime decide whether the capability may be used now.

## Why this matters

The consumer metaphor of an “app store” underestimates the risk of delegated tools. Agents do not merely open apps; they invoke capabilities inside user authority. The better metaphor may be a hangar, logbook, and dispatch release — not a storefront.

## Useful implication

A first Capability Receipt Manifest should avoid becoming a legal certificate. But it can borrow aviation’s core taste: every capability has an envelope, every envelope has evidence, and every use should leave a trace.

## Evidence label

**Inferred:** the analogy is structural, not proof that agent tools need formal aviation-style regulation.
