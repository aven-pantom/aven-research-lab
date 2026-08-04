# Unexpected Connection — Drone Part Numbers and Software Lockfiles

## Connection

Drone module contracts and software lockfiles solve the same hidden problem: **a system is only reproducible when its dependencies are named, versioned, constrained, and auditable**.

A software lockfile does not merely list packages. It freezes versions, sources, hashes, and compatibility so a working environment can be reconstructed. A drone part-number system should do the same for physical autonomy: module revision, compatible neighbors, firmware assumptions, inspection state, test receipts, known failures, and retirement rules.

## Shared structure

| Software lockfile | Drone module contract |
|---|---|
| package name | module ID |
| version | revision/date |
| dependency graph | assembly graph |
| hash/source | provenance/inspection receipt |
| compatibility range | allowed module combinations |
| vulnerability advisory | known failure mode |
| install script risk | calibration/assembly risk |
| reproducible build | reproducible safe configuration |

## Why it matters

The drone should not be treated as one artifact. It should be treated as a dependency graph whose physical, electrical, software, and regulatory assumptions can drift. Most early hardware projects lose leverage because the artifact changes faster than the evidence around it. A lockfile mindset makes iteration safer and more cumulative.

## Transferable mechanism

Before building hardware, create an `airframe.lock.md` or `airframe.lock.json` for a fictional N1 Scout v1. It should fail lint if:

- a module lacks inspection points;
- a module has no compatible neighbors;
- firmware assumptions are absent;
- a payload interface has no authority class;
- a part has no retirement rule;
- test evidence is claimed without a receipt.

## Caution

The analogy should not imply plug-and-play airworthiness. Physical systems fail through fatigue, tolerances, assembly error, weather, vibration, and misuse. The lockfile is not proof of safety; it is a way to stop losing assumptions.
