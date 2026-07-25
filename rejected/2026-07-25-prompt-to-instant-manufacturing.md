# Rejected Path — Prompt to Instant Manufacturing

## Why it initially seemed promising

Text-to-CAD papers make it tempting to frame the Vibe as: “type what you want and receive a manufacturable part.” That would be a clean consumer/product story.

## What evidence weakened it

- **Verified:** Text2CAD-Bench says existing benchmarks focus on basic primitives and simple sketch-extrude sequences, lack advanced features needed for real-world applications, and mainly cover traditional mechanical parts.
- **Verified:** Fusion 360 Gallery’s concise language centers on sketch/extrude operations, not the full complexity of assemblies, tolerances, materials, fabrication methods, and regulatory/safety context.
- **Inferred:** Final geometry can look plausible while hiding wrong tolerances, load paths, fit assumptions, or manufacturing constraints.

## Which assumption failed

The weak assumption was that CAD generation equals physical readiness. A generated model is not a manufactured object; it is one artifact in a chain of constraints, checks, sourcing, fabrication, and testing.

## Whether it may become viable later

Yes, but likely after narrower domains develop validators, process-aware datasets, and design-history ledgers. “Prompt to bracket for this known extrusion system under these known loads” is more plausible than “prompt to any manufactured product.”

## Useful remnants

- Natural language is still valuable as one input into a replayable design process.
- Prompt annotations may teach systems to map beginner intent onto expert construction sequences.
- Consumer-grade interfaces may hide CAD complexity while preserving an auditable trace underneath.

## Future signal that should trigger reconsideration

A benchmark or tool that proves generated CAD survives real edit requests, tolerance checks, simulation, CAM/slicer export, and physical fabrication across a meaningful class of objects.
