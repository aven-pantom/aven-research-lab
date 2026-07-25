# Source Library — Wardrobes Need Simulation Memory

Date: 2026-07-25
Slug: `wardrobes-need-simulation-memory`

## Primary signal cluster

The session began from a fresh signal: diffusion virtual try-on is improving while consumer wardrobe apps are already teaching users to digitize closets. The interesting gap is not rendering alone; it is whether a wardrobe can become a memory system that learns what actually works in lived context.

## Sources inspected

### CatVTON

- URL: https://arxiv.org/abs/2407.15886
- Repo: https://github.com/Zheng-Chong/CatVTON
- Type: arXiv paper + official implementation
- Evidence label: **Verified**
- Notes:
  - Paper title: `CatVTON: Concatenation Is All You Need for Virtual Try-On with Diffusion Models`.
  - Abstract says diffusion VTON methods can require additional encoding modules, many training parameters, and complex preprocessing.
  - CatVTON proposes concatenating person/garment inputs along spatial dimensions and frames the method as simple/efficient.
- Implication:
  - If VTON can become lighter, it can migrate from ecommerce demos into everyday wardrobe workflows.

### IDM-VTON

- URL: https://arxiv.org/abs/2403.05139
- Repo: https://github.com/yisol/IDM-VTON
- Type: arXiv paper + official implementation
- Evidence label: **Verified**
- Notes:
  - Paper title: `Improving Diffusion Models for Authentic Virtual Try-on in the Wild`.
  - Abstract frames the task as rendering a person wearing a curated garment from person + garment images.
  - The paper emphasizes garment fidelity and authentic try-on images.
- Implication:
  - The research frontier is still strongly visual/fidelity-oriented, which supports but also narrows current VTON progress.

### OOTDiffusion

- URL: https://arxiv.org/abs/2403.01779
- Repo: https://github.com/levihsu/OOTDiffusion
- Type: arXiv paper + official implementation
- Evidence label: **Verified**
- Notes:
  - Paper title: `OOTDiffusion: Outfitting Fusion based Latent Diffusion for Controllable Virtual Try-on`.
  - Abstract describes a latent diffusion architecture for realistic/controllable VTON, garment feature alignment, and controllability through outfitting dropout/classifier-free guidance.
- Implication:
  - Controllability matters. A wardrobe simulator needs control over context, taste, and constraints, not only garment placement.

### VITON-HD

- URL: https://github.com/shadow2496/VITON-HD
- Paper linked by repo: https://arxiv.org/abs/2103.16874
- Type: official research implementation / dataset reference
- Evidence label: **Verified**
- Notes:
  - Repo identifies VITON-HD as `High-Resolution Virtual Try-On via Misalignment-Aware Normalization` from CVPR 2021.
  - README abstract says increasing resolution introduces misalignment/artifact challenges.
- Implication:
  - Photoreal fitting is not solved enough to make the whole product depend on it initially.

### Dress Code

- URL: https://github.com/aimagelab/dress-code
- Paper: https://arxiv.org/abs/2204.08532
- Type: dataset + paper
- Evidence label: **Verified**
- Notes:
  - Dataset presents `High-Resolution Multi-Category Virtual Try-On`.
  - README states dataset use requires terms compliance, dataset is not released to private companies, non-institutional emails are not allowed, and requests are manually validated.
- Implication:
  - Fashion/body datasets have real consent/licensing constraints. Consumer products need their own lawful data strategy and privacy posture.

### DeepFashion Try-On

- URL: https://github.com/switchablenorms/DeepFashion_Try_On
- Type: research implementation
- Evidence label: **Verified**
- Notes:
  - README says virtual try-on is difficult, the solution is not perfect, and users should review failure cases and limitations.
- Implication:
  - Strong contradiction against treating VTON as commodity solved infrastructure.

### Whering

- URL: https://whering.co.uk/
- Type: consumer wardrobe/styling product page
- Evidence label: **Verified**
- Notes:
  - Site describes Whering as a social wardrobe and styling app.
  - Page text says users can manage/style their closet and see/style friends.
- Implication:
  - The social wardrobe behavior already exists; a new product must be deeper than inventory plus sharing.

### GetWardrobe

- URL: https://www.getwardrobe.com/
- Type: consumer wardrobe/styling product page
- Evidence label: **Verified**
- Notes:
  - Page claims AI creates outfit ideas from clothes users already own.
  - Describes photographing clothes, AI background removal, category/color detection, generated outfits, week planning, weather context, cross-device sync.
  - Page emphasizes wearing more of what users own and buying fewer things they will not wear.
- Implication:
  - The everyday wedge is not abstract fashion intelligence; it is reducing morning friction and wasted wardrobe value.

### Stylebook

- URL: https://stylebookapp.com/
- Type: consumer closet app
- Evidence label: **Verified**
- Notes:
  - Site frames Stylebook around organizing real clothes, creating outfits, planning what to wear, and packing lists.
  - Product has existed since 2009.
- Implication:
  - Digital closet behavior is old enough that the new frontier needs memory/simulation, not merely closet digitization.

## Reliability notes

- arXiv API search was rate-limited during the session, so direct arXiv abstract pages and official GitHub READMEs were used instead.
- Product claims are treated as product-page claims, not independently verified usage metrics.
- No generated try-on outputs were tested in this session.

## Source gaps

- Need a deeper recommender-system literature pass on fashion personalization and outfit compatibility.
- Need HCI/privacy sources on body-image-sensitive wardrobe tools.
- Need a small audit of whether any existing wardrobe app records after-action outfit feedback in a first-class way.
