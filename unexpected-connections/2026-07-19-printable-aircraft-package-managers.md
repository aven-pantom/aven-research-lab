# Unexpected Connection — Printable Aircraft and Software Package Managers

## Connection

Printable aircraft modules and software packages solve the same hidden problem: how to make reusable components compose safely inside systems that fail when assumptions are invisible.

## Shared structure

A software package is not just code. It carries version, dependencies, compatibility constraints, licensing, tests, known vulnerabilities, and maintainers. A printable aircraft module should not be “just geometry.” It should carry process constraints, print orientation, material assumptions, inspection requirements, fatigue warnings, compatible joints, mass estimates, simulation assumptions, and lawful-use constraints.

The unexpected connection is that a future desktop aircraft foundry may need something closer to a **package manager for physical autonomy** than a CAD library.

## Why it matters

Without package metadata, distributed fabrication becomes brittle:

- a part can print successfully but fail structurally
- a module can fit geometrically but violate mass/acoustic/thermal assumptions
- a repair can restore appearance while destroying provenance
- an autonomy update can invalidate the safety case for the physical configuration
- a civil remote-sensing aircraft can drift into surveillance misuse because operational constraints are not attached to the artifact

Software learned this through dependency hell and supply-chain attacks. Physical autonomy may face the same pattern, but with kinetic risk.

## Mechanism that could transfer

From software package ecosystems:

- semantic versioning → module revision compatibility
- lockfiles → exact aircraft configuration manifests
- vulnerability databases → known failure modes and unsafe configurations
- CI tests → simulation/inspection gates
- dependency graphs → structural/electrical/autonomy compatibility maps
- signed releases → provenance for printed parts and mission software
- SBOMs → physical bill of materials plus autonomy bill of behavior

## Implication

The printable-drone opportunity should not begin with an aircraft. It should begin with a **manifest format** that treats every physical module as a versioned, inspectable, constrained dependency.

That keeps the research on safer ground and points toward a more defensible primitive than an airframe design.

## Related Vibe

- [A Drone Factory That Fits on a Desk: 250mm Printers and Quiet Persistent Aircraft](../active-vibes/desk-sized-factory-for-quiet-persistent-aircraft.md)
