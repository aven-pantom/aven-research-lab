# CAD Histories and Agent Action Logs

## Fields connected

- Parametric CAD / feature trees / physical design provenance
- AI agent action logs / local-first software workshops / workflow replay

## What made the connection visible

Fusion 360 Gallery and DeepCAD treat CAD models as operation sequences; CAD-Recode turns point clouds into executable Python CAD code. In a separate world, agent systems need action histories to explain, replay, debug, and safely modify software environments.

## Shared structure

Both fields expose the same hidden problem: **final state is not enough**.

A final CAD shape does not tell an agent which dimensions are functional, which operations were exploratory, what constraints must survive, or which features downstream features depend on. A final software/workflow state does not tell an agent why files changed, which action caused a bug, what assumption was being tested, or how to safely roll back.

Both need:

- ordered construction traces;
- dependency graphs;
- named intent;
- uncertainty labels;
- validation results;
- failed branches;
- rollback points;
- human-readable rationale attached to machine-executable operations.

## Why it matters

If agents are going to maintain physical designs, the CAD file cannot be treated like a static image. It has to behave more like a repo: inspectable history, diffs, tests, provenance, and reversible edits.

The same design principle applies to local software workshops. An agent that only sees the current app state is weak. An agent that sees the construction history can fit the tool to the user without breaking hidden assumptions.

## What it could unlock

- A Design History Ledger for physical objects.
- CAD diffs that explain intent instead of only geometry changes.
- Agent-maintained maker projects where every fabrication attempt updates the object’s memory.
- Safer hardware iteration for drones, robotics, furniture, fashion, and fixtures.
- Better evaluation: editability and recovery time, not only final-shape similarity.

## Evidence

- **Verified:** Fusion 360 Gallery presents human CAD design sequences and a CAD construction MDP.
- **Verified:** DeepCAD generates CAD operation sequences.
- **Verified:** CAD-Recode outputs Python CAD code from point clouds.
- **Supported:** Agent action logs and CAD feature trees both preserve the process by which a final state was reached.
- **Inferred:** A shared trace-card grammar could transfer across software tools and physical design tools.

## Uncertainty

- **Unknown:** CAD histories may contain noisy modeling habits that do not equal true intent.
- **Unknown:** Software action logs and CAD feature trees may need different enough semantics that only the high-level principle transfers.
- **Contradicted / limiting:** Real CAD assemblies and manufacturing contexts are much richer than current sketch/extrude benchmarks.

## Related Vibes

- [Machines Need Blueprints They Can Replay: CAD as Design History, Not Geometry](../active-vibes/cad-as-design-history-not-geometry.md)
- [The Next Software Company Might Be a Workshop: Personal Tools Built While You Work](../active-vibes/personal-software-workshops.md)
- [Actions Become Video Masks: Robots May Learn by Editing the Future](../active-vibes/actions-become-video-masks.md)
