# Source Notes — Bodies May Have a Hidden Programming Language

## Calling title

**Bodies May Have a Hidden Programming Language: Bioelectricity as the Interface to Living Form**

## Primary signal

A 2025 arXiv paper proposes combining deep reinforcement learning, lab automation, and real-time bioelectric measurement/manipulation to guide cellular topology, regeneration, and morphogenesis.

This is not evidence that such control already works at practical scale. It is evidence that several fields are beginning to describe living tissue as a closed-loop control substrate rather than a passive material.

## Sources inspected

### 1. AI-driven control of bioelectric signalling for real-time topological reorganization of cells

- **ID:** arXiv:2503.13489v2
- **Author:** Gonçalo Hora de Carvalho
- **Year:** 2025
- **Categories:** cs.AI, eess.SY, physics.bio-ph, q-bio.CB, q-bio.QM
- **URL:** https://arxiv.org/abs/2503.13489
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The paper proposes a DRL + lab automation framework for real-time manipulation of bioelectric signals using feedback from optogenetics, voltage-sensitive dyes, fluorescent reporters, and microscopy.

**Verified:** The abstract frames bioelectric signals as voltage gradients across cell membranes caused by ionic movements, involved in differentiation, proliferation, apoptosis, and tissue morphogenesis.

**Supported implication:** The author is treating bioelectricity as a controllable feedback variable, not merely as descriptive physiology.

**Limitation:** I inspected metadata/abstract, not the full PDF. The proposal may be conceptual rather than experimentally demonstrated.

### 2. Modeling somatic computation with non-neural bioelectric networks

- **PubMed:** 31819119
- **PMCID:** PMC6901451
- **Authors:** S. Manicka, M. Levin
- **Journal:** Scientific Reports
- **Year:** 2019
- **DOI:** 10.1038/s41598-019-54859-8
- **Evidence inspected:** PubMed ESummary metadata.

**Verified:** The paper explicitly uses the phrase “somatic computation” and “non-neural bioelectric networks.”

**Supported implication:** The source base for bioelectricity is not only about nerves or electrophysiology; it includes computational language for body-scale control.

### 3. Re-membering the body: applications of computational neuroscience to the top-down control of regeneration of limbs and other complex organs

- **PubMed:** 26571046
- **PMCID:** PMC4667987
- **Authors:** G. Pezzulo, M. Levin
- **Journal:** Integrative Biology
- **Year:** 2015
- **DOI:** 10.1039/c5ib00221d
- **Evidence inspected:** PubMed ESummary metadata.

**Verified:** The paper links computational neuroscience to top-down control of regeneration of limbs and complex organs.

**Supported implication:** Developmental biology may be approachable with control-theoretic and cognitive metaphors, but this risks over-analogizing unless grounded in experiments.

### 4. Bioelectric memory: modeling resting potential bistability in amphibian embryos and mammalian cells

- **PubMed:** 26472354
- **PMCID:** PMC4608135
- **Authors:** R. Law, M. Levin
- **Journal:** Theoretical Biology & Medical Modelling
- **Year:** 2015
- **DOI:** 10.1186/s12976-015-0019-9
- **Evidence inspected:** PubMed ESummary metadata.

**Verified:** The paper title directly claims “bioelectric memory” and models resting-potential bistability.

**Supported implication:** Bioelectric state may function as a form of biological memory or hysteresis, not just momentary signal.

### 5. Calcium fluctuations drive morphological patterning at the onset of Hydra morphogenesis

- **ID:** arXiv:2111.01251v1
- **Author:** Erez Braun
- **Year:** 2021
- **Category:** physics.bio-ph
- **URL:** https://arxiv.org/abs/2111.01251
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The abstract reports external electric fields used to control the developmental process in whole-body Hydra regeneration and frames calcium fluctuations as an integrator field of electrical-mechanical morphogenesis.

**Supported implication:** Electric fields and calcium dynamics may be tied to large-scale morphological transitions, not just local signaling.

### 6. A global sensitivity analysis approach for morphogenesis models

- **ID:** arXiv:1507.08504v2
- **Authors:** Sonja E. M. Boas, Maria I. Navarro Jimenez, Roeland M. H. Merks, Joke G. Blom
- **Year:** 2015
- **Journal ref:** BMC Systems Biology 9, 85
- **DOI:** 10.1186/s12918-015-0222-7
- **URL:** https://arxiv.org/abs/1507.08504
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The paper proposes global sensitivity analysis for morphogenesis models and argues it can help falsify models and identify operative mechanisms.

**Connection:** Any attempt to control bioelectric morphogenesis needs sensitivity analysis and falsification discipline, otherwise it becomes oracle-seeking.

### 7. The Control of Branching Morphogenesis

- **ID:** arXiv:1308.2123v1
- **Authors:** Dagmar Iber, Denis Menshykau
- **Year:** 2013
- **URL:** https://arxiv.org/abs/1308.2123
- **Evidence inspected:** arXiv API metadata and abstract.

**Verified:** The review asks whether branching morphogenesis across organs follows common regulatory principles and how physical/geometric constraints shape branching.

**Connection:** Bioelectric control is one candidate control layer, but morphology is also constrained by geometry, mechanics, chemistry, and tissue history.

## Strongest pattern

The hidden frontier is not “AI for biology.”

The sharper pattern is:

```text
living form may be controlled by readable, writable state variables that sit between genes and anatomy
```

If true, biology needs interfaces closer to debuggers, control panels, and simulation environments than static wet-lab protocols.

## Evidence quality

- **Strong:** PubMed-backed existence of bioelectric memory/somatic computation literature; arXiv abstract evidence for closed-loop AI-control proposal.
- **Medium:** conceptual convergence between bioelectricity, morphogenesis models, and control theory.
- **Weak:** immediate practical ability to reliably program morphology.

## Main uncertainty

The field may be rich in metaphors but poor in controllable, generalizable interventions. The useful primitive may be limited to narrow organisms, tissues, or assay conditions.
