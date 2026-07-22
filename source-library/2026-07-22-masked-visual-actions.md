# Source Notes — Masked Visual Actions / Future Masks

Date captured: 2026-07-22

## Primary signal

### Masked Visual Actions for Unified World Modeling

- URL: https://arxiv.org/abs/2607.19343
- arXiv ID: `2607.19343v1`
- Published: 2026-07-21
- Authors listed by arXiv/project page: Hadi Alzayer, Wenlong Huang, Haonan Chen, Christopher Luey, Lvmin Zhang, Maneesh Agrawala, Gordon Wetzstein, Li Fei-Fei, Yilun Du, Jiajun Wu, Jia-Bin Huang.
- Institutions listed on project page: Stanford University; University of Maryland, College Park; Harvard University.
- Evidence captured: arXiv API abstract and project page HTML.

**Verified:** The abstract says video models contain useful priors about how the visual world moves, interacts, and responds to contact, but the challenge is communicating action in a representation aligned with visual space and grounded in physical manipulation.

**Verified:** The abstract introduces masked visual actions as a pixel-space control interface: a partially revealed trajectory of an arbitrary entity in a video.

**Verified:** The abstract claims revealing robot motion makes the model predict scene response; revealing desired object motion makes the same model recover robot behavior; and the finetuned checkpoint was trained with 15 hours of masked examples from real videos and simulation.

**Unknown:** I did not inspect the full PDF, supplementary videos, raw datasets, or evaluation tables during this session.

## Project page

- URL: https://masked-visual-actions.github.io
- Evidence captured: HTML text extraction.

**Verified:** The page frames the problem as: "How should we interact with video world models?"

**Verified:** The page describes masked visual actions as a simple representation intended to generalize across unseen robots and objects, where revealing parts of the video lets the model complete the rest of the scene.

**Verified:** The page states that each displayed video is generated from a single reference frame and a masked visual action, and that every shown embodiment is unseen during training.

**Unknown:** I did not independently inspect or validate the videos' physical correctness.

## GitHub repository

- URL: https://github.com/HadiZayer/masked-visual-actions
- GitHub API capture time: 2026-07-22
- Public repo metadata captured:
  - full name: `HadiZayer/masked-visual-actions`
  - created: 2026-07-03T01:19:06Z
  - updated: 2026-07-22T03:49:57Z
  - pushed: 2026-07-16T21:38:39Z
  - default branch: `main`
  - license: Apache-2.0
  - stars: 2
  - forks: 0
  - open issues: 0

**Verified:** The README says the repo is code for finetuning/running a robot-video control model: a LoRA on top of `PAI/Wan2.2-Fun-A14B-Control`.

**Verified:** The README says inputs are a control video rendered from a URDF robot, a reference image, and a text prompt; output is corresponding RGB video.

**Verified:** The README says the authors did not modify the video model or trainer; they used DiffSynth-Studio, and this repo is the thin layer: inference script, training recipe, and weights.

**Verified:** The README says CUDA GPU is required and that the base model is 14B. It also says URDF control-video rendering tools from DROID episodes are coming soon.

## Dependency/source context

### DiffSynth-Studio

- URL: https://github.com/modelscope/DiffSynth-Studio
- GitHub API capture time: 2026-07-22
- Public metadata captured:
  - full name: `modelscope/DiffSynth-Studio`
  - license: Apache-2.0
  - stars: 12,732
  - forks: 1,250

**Verified:** MVA README instructs users to install DiffSynth-Studio at pinned commit `3743b1307caf2562af60d475b22d4b6be68e7cd0`.

## Secondary signals

1. **Thin layer on a large video-control model.** The action-language novelty may live in conditioning/interface more than model architecture.
2. **URDF as action rendering.** Robot embodiment can be spoken to the model as visual geometry, not as a private action vector.
3. **Public code incomplete around data/control rendering.** The "coming soon" renderer limits reproduction and should temper confidence.

## Contradictions / uncertainty

- **Contradicted / limiting:** Plausible RGB futures are not necessarily physically valid or executable.
- **Contradicted / limiting:** The public repo is not yet a complete end-to-end reproduction package because rendering tools are not yet released.
- **Unknown:** No independent reproduction, robot execution, or metric verification was performed.
- **Unknown:** It is unclear whether this representation scales to force-sensitive tasks, deformables, transparent objects, fast contact, or occluded mechanics.

## Why it mattered tonight

The weak signal is not "video models for robotics." That is already obvious. The sharper signal is that a robot action can be represented as a **masked partial future**: a visual constraint the model completes. That aligns robot control with the grammar of video editing, inpainting, animation, and agent rehearsal.
