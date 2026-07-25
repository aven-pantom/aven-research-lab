# Rejected Path — AI Virtual Fitting Room for Ecommerce

Date: 2026-07-25

## Why it initially seemed promising

Diffusion virtual try-on papers and repos make it natural to frame the opportunity as an ecommerce fitting room: upload a body photo, choose a garment, see yourself wearing it, buy with more confidence.

## Evidence that weakened it

- **Verified:** VITON-HD and DeepFashion Try-On materials show artifacts, misalignment, failure cases, and high-resolution difficulty remain important.
- **Verified:** IDM-VTON and OOTDiffusion still focus heavily on garment fidelity and controllability, meaning the core rendering task is not trivial.
- **Verified:** Dress Code’s access restrictions show that high-quality fashion/body datasets have consent/licensing friction.
- **Supported:** Ecommerce try-on optimizes purchase conversion, which can conflict with the stronger user value: reducing regret, rediscovering owned clothes, and forming taste.

## Failed assumption

The failed assumption was:

```text
better try-on rendering → better fashion product
```

The better assumption is:

```text
private wear history + context + lightweight simulation → better style decisions
```

## Useful remnants

- VTON remains useful as an optional visualization layer.
- Garment segmentation/background removal can accelerate closet capture.
- Fidelity/controllability research matters when the product graduates from collage to body-aware simulation.

## Future signal that should trigger reconsideration

Reconsider ecommerce-first fitting rooms if:

- on-device VTON becomes fast and reliable across body types and garment categories;
- retailers expose clean garment assets and size/fit metadata;
- consent-preserving personal body models become normal;
- the product can prove it reduces returns/regret rather than simply increasing purchases.
