# Rejected Path — Video World Models Solve Robotics

Date: 2026-07-22

## Why it initially seemed promising

`Masked Visual Actions for Unified World Modeling` is a strong signal: video models are being adapted into robot world models through visually specified action. The abstract claims forward dynamics, policy evaluation, and inverse modeling with one finetuned checkpoint.

## What weakened it

- **Verified:** The public repo is a thin layer on a 14B video-control model and requires CUDA.
- **Verified:** The README says tools for rendering URDF robot control videos from DROID episodes are coming soon, limiting public reproduction.
- **Contradicted / limiting:** RGB video prediction does not directly represent forces, friction, compliance, torque, mass, or hidden mechanical state.
- **Unknown:** No independent reproduction or real-world execution results were verified tonight.

## Failed assumption

The weak assumption was that better video priors directly imply better robot control. The stronger, narrower assumption is that video models may enable a new **action interface** for planning and rehearsal, while still requiring separate validity checks.

## Could it become viable later?

Yes. Reconsider if future-mask systems include:

- released end-to-end data/control rendering pipelines;
- physics-validity audits;
- real robot execution comparisons;
- force/contact-aware conditioning;
- closed-loop correction rather than one-shot imagined rollouts.

## Useful remnants

The valuable remnant is the future-mask primitive: actions as partial visible futures, not commands.
