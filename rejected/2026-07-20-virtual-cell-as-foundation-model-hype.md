# Rejected Path — Virtual Cell as Foundation-Model Hype

## Why it initially seemed promising

“AI Virtual Cell” sounds like a large category-forming phrase: train on massive single-cell datasets, predict perturbations, simulate biology, accelerate drug discovery.

## What weakened it

- **Verified:** A 2024 benchmark abstract reports a simple mean baseline outperforming scGPT for post-perturbation RNA-seq prediction.
- **Verified:** A 2026 critique argues that common differential-expression similarity metrics can be inflated by control-population reuse.
- **Verified:** eVAE’s abstract points out that direct next-token recipes do not transfer cleanly because genes have no natural left-to-right order.

## Failed assumption

The weak assumption is that “more pretraining + larger foundation model” automatically produces useful virtual biology.

## Useful remnants

The stronger residue is not “biology needs bigger LLM-style models.” It is: biology needs **intervention-native representations, leakage-resistant benchmarks, and traceable virtual experiments**.

## Reconsider if

- Perturbation benchmarks converge on leakage-resistant protocols.
- Models show robust cross-cell-type, cross-lab, or cross-assay generalization under held-out interventions.
- Virtual-cell systems expose causal trace structure rather than only output expression vectors.

## Status

Rejected as a framing, not as a field.
