# Source Notes — Acoustic Waveguide Touch

Date captured: 2026-07-23
Session signal: recent arXiv cluster around tactile sensing through wave-bearing structures.
Calling title: Robots Could Feel Through Their Bones: Tactile Skin Without Sensor Arrays

## Primary signal

### Metallic ultrasound waveguides as distributed tactile sensors

- **Source:** Alexandros Rosakis, Alessio Tamborini, Basile Fakhoury, Cole Bailey, Morteza Gharib. `Metallic Ultrasound Waveguides as a Distributed Tactile Sensing Platform for Contact Localization, Force Estimation, and Material Class Discrimination`. arXiv:2607.02827v1. Submitted 2026-07-02.
- **URL:** https://arxiv.org/abs/2607.02827
- **Producer:** Academic robotics / fluid mechanics / sensing researchers; Morteza Gharib is at Caltech, but affiliation details were not fully verified in this session.
- **Evidence captured:** arXiv metadata and abstract via arXiv API/ar5iv.
- **Verified claims from abstract:**
  - Metallic ultrasound waveguides are investigated as distributed tactile sensors interrogated from a single proximal transducer.
  - Single-point indentation force estimation uses the ratio of reflection to transmission coefficients; abstract reports `R2 >= 0.95` across nine tested materials.
  - Calibration slope correlates with effective contact modulus with log-log Pearson `r = -0.98`.
  - Reflected energy partition is described as load-independent and related to contacting material properties.
  - Two-indenter experiment recovered two contact forces with `R2 = 0.97` and `R2 = 0.95` against reference load cells.
- **Unverified:** full experimental setup, raw data, hardware BOM, reproducibility, 2D extension details, and any code/supplement.

## Adjacent source cluster

### Passive flexible acoustic waveguides

- **Source:** Guimin Long, Changhong Linghu, Chuanping Liu, Ke Xu, Xingjian Jing. `Scalable Dynamic Tactile Sensing Enabled by Passive and Flexible Acoustic Waveguides`. arXiv:2606.13746v1. Submitted 2026-06-11.
- **URL:** https://arxiv.org/abs/2606.13746
- **Verified claims from abstract:**
  - Uses deep sub-wavelength acoustic waveguides with elastic-membrane-capped Helmholtz resonators and spring-reinforced microtubes.
  - Sparse microphones are used for real-time localization and waveform reconstruction.
  - Abstract reports 4 mm best spatial resolution, greater than 99% accuracy in a 4-microphone 64-node array, and 5.5 ms inference.
  - Demonstrations include fingertip arrays, tactile glove, large-area skins, single-hair contact, 5 mg particle impacts, arterial pulse waves, feather touches, and finger contact.
- **Unverified:** whether results survive real robot actuation noise or repeated wear.

### Acoustic tactile sensing for robot wheels

- **Source:** Wilfred Mason, David Brenken, Falcon Z. Dai, Ricardo Gonzalo Cruz Castillo, Olivier St-Martin Cormier, Audrey Sedal. `Acoustic tactile sensing for mobile robot wheels`. arXiv:2402.18682v1. Submitted 2024-02-28.
- **URL:** https://arxiv.org/abs/2402.18682
- **Verified claims from abstract:**
  - Wheel-mounted acoustic waveguides with a single off-the-shelf acoustic rangefinder.
  - Sensing along entire wheel circumference.
  - Demonstrated terrain discrimination, obstacle geometry classification, and collision/contact localization.
- **Implication:** waveguide touch is not limited to flat lab surfaces; rolling terrain contact is a plausible early application.

### Older Lamb-wave multi-touch plate

- **Source:** Yuan Liu, Jean-Pierre Nikolovski, Moustapha Hafez, Nazih Mechbal, Michel Vergé. `Acoustic Wave Approach for Multi-Touch Tactile Sensing`. arXiv:0909.3361v1. Submitted 2009-09-18.
- **URL:** https://arxiv.org/abs/0909.3361
- **Verified claims from abstract:**
  - Uses Lamb wave absorption in a thin finite copper plate to localize one or two contact fingers.
  - Reports less than 10 ms localization and 2 mm spatial resolution for one finger.
  - Reports single-point localization accuracy improvement from 94.63% to 99.5% with double validation check.
- **Implication:** this is an old primitive newly worth revisiting, not a brand-new concept.

## Structural health monitoring branch

### Guided waves + FBG fusion in aerospace SHM

- **Source:** Xin Yang et al. `Transformer-based Multisensor Data Fusion of Ultrasonic Guided Wave and FBG-based Strain Measurements for Multitask Aerospace Structural Health Monitoring`. arXiv:2607.02545v1. Submitted 2026-06-24.
- **URL:** https://arxiv.org/abs/2607.02545
- **Verified claims from abstract:**
  - Integrates PZT ultrasonic guided wave signals and fiber Bragg grating strain measurements.
  - Uses transformer-based data fusion for health indicator prediction and damage localization.
  - Experimentally validated on aircraft composite structures under compression-compression fatigue cycling.
- **Use for Vibe:** not a tactile sensor paper, but confirms adjacent methods for inferring hidden physical state from wave traces in engineered structures.

### Manifold representations for guided-wave structural awareness

- **Source:** Yiming Fan, Dimitris G. Giovanis, Fotis Kopsaftopoulos. `Guided Wave-Based Structural Awareness Under Varying Operating States via Manifold Representations`. arXiv:2504.11235v1. Submitted 2025-04-15.
- **URL:** https://arxiv.org/abs/2504.11235
- **Verified claims from abstract:**
  - Guided-wave SHM faces high-dimensional megahertz data streams and environmental/operational condition shifts.
  - Explores lower-dimensional manifold representations and autoencoder-style compression.
- **Use for Vibe:** this field has already confronted calibration drift and state-change problems that robot waveguide touch will inherit.

## Search path

Queries run through arXiv API included:

- `cat:cs.RO AND all:tactile`
- `cat:cs.RO AND all:ultrasound`
- `all:"acoustic waveguide" AND all:tactile`
- `all:"Lamb waves" AND all:tactile`
- `all:"guided wave" AND all:tactile sensor`
- `all:"acoustic emission" AND all:robot tactile`

## Integrity notes

- No claims were made from inaccessible full papers except where arXiv abstracts directly stated them.
- `pdftotext` was unavailable in the environment; ar5iv/abstract pages were used for text capture.
- No code repositories, patents, hardware schematics, or independent reproductions were verified this session.
