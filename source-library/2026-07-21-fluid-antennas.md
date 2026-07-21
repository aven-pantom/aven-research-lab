# Source Notes — Fluid Antennas and Embodied Radio Adaptation

## Session signal

The session began from a recent arXiv signal: `Spatial Limits of Fluid Antenna Systems` (2026), which treats continuous fluid antenna systems as an upper bound where antennas can be positioned anywhere inside a defined region.

Calling title: **Radios Need Moving Bodies: Antennas That Hunt for Better Physics**

## Source integrity

Sources were collected through arXiv API and Crossref DOI metadata. Claims below are limited to paper metadata and abstracts inspected during the session unless marked as interpretation.

## Primary / near-primary sources inspected

### Performance Limits of Fluid Antenna Systems

- Authors: Kai-Kit Wong, Arman Shojaeifard, Kin-Fai Tong, Yangyang Zhang
- Year: 2020
- arXiv: <https://arxiv.org/abs/2005.13737>

**Verified:** The abstract defines a fluid antenna as a mechanically flexible antenna able to switch its location freely within a given space.

**Verified:** The abstract says prior work reported that even with a tiny space, a single-antenna FAS can outperform an L-antenna MRC system in outage probability if the number of locations/ports is large enough.

**Interpretation:** This is the seed of the Vibe: the physical position of the antenna becomes a controllable variable, not merely an implementation detail.

### Fluid Antenna Multiple Access

- Authors: Kai-Kit Wong, Kin-Fai Tong
- Year: 2020
- arXiv: <https://arxiv.org/abs/2006.05508>

**Verified:** The abstract describes fluid antenna as making an antenna appear instantly at one of N preset locations in a predefined space.

**Verified:** The abstract says FAMA exploits moments of deep fade experienced by interference to achieve favorable channel conditions without sophisticated signal processing.

**Verified:** The abstract claims results indicate possible support for hundreds of users using one fluid antenna at each user in a few wavelengths of space.

**Caution:** This is an analytical claim from an abstract. It should not be repeated as product-ready evidence.

### Design and Implementation of mmWave Surface Wave Enabled Fluid Antennas and Experimental Results for Fluid Antenna Multiple Access

- Authors: Yuanjun Shen, Boyi Tang, Shuai Gao, Kin-Fai Tong, Hang Wong, Kai-Kit Wong, Yangyang Zhang
- Year: 2024
- arXiv: <https://arxiv.org/abs/2405.09663>

**Verified:** The abstract says FAMA lacked experimental validation and hardware implementation of FAS remained mysterious.

**Verified:** The paper reports single-channel and double-channel fluid antenna designs that were electromagnetically simulated, fabricated, and measured.

**Verified:** The abstract reports operation in 24–30 GHz bands, average gain variation up to 11 dBi, and for a 4-user FAMA case 57% outage probability reduction and multiplexing gain of 2.27 compared with a static omnidirectional antenna.

**Interpretation:** This source is important because it moves FAS from pure theory toward hardware evidence, while still not proving field deployment.

### A Survey on Reconfigurable and Movable Antennas for Wireless Communications and Sensing

- Authors: Wenyan Ma, Lipeng Zhu, Yanhua Tan, Beixiong Zheng, Yujie Zhang, Yuchen Zhang, Keke Ying, Zhen Gao, He Sun, Xiaodan Shao, Zhenyu Xiao, Dusit Niyato, Rui Zhang
- Year: 2026
- arXiv: <https://arxiv.org/abs/2602.17977>

**Verified:** The abstract frames reconfigurable and movable antennas as technologies that add degrees of freedom in tuning antenna radiation and/or placement.

**Verified:** It covers applications in wireless communication, sensing, and ISAC, with design considerations including mode selection, movement optimization, and channel acquisition.

**Interpretation:** The field is broadening from FAS alone into a wider category: adaptive electromagnetic bodies.

### Fast Fluid Antenna Multiple Access

- Authors: Noor Waqar, Kai-Kit Wong, Chan-Byoung Chae, Ross Murch
- Year: 2026
- arXiv: <https://arxiv.org/abs/2605.23642>

**Verified:** The abstract directly criticizes a common genie-aided premise in fast FAMA: every user terminal probes all ports every symbol and knows instantaneous signal-interference split.

**Verified:** It names hardware limits, switching limits, pilot overhead, and unknown signal/interference separation as problems.

**Verified:** It proposes copula-aided FAMA to infer unobserved channels/interference from partial observations.

**Interpretation:** This is the main contradiction/challenge source. FAS only becomes real if it can operate under partial, costly, stale observations.

### Spatial Limits of Fluid Antenna Systems

- Authors: Amy S. Inwood, Peter J. Smith, Rajitha Senanayake, Michail Matthaiou
- Year: 2026
- arXiv: <https://arxiv.org/abs/2607.07333>

**Verified:** The abstract defines continuous FAS as an upper bound where antennas can be positioned anywhere inside a defined spatial region.

**Verified:** It examines high SNR probability and a dimensional scaling law.

**Verified:** It reports that performance gains increase with dimensionality and region size under the scenarios studied.

**Interpretation:** This points toward spatial freedom as a measurable resource.

## DOI metadata checked

- `Fluid Antenna System—Part I: Preliminaries`, IEEE Communications Letters, 2023, DOI `10.1109/LCOMM.2023.3284320`.
- `Fluid Antenna System—Part II: Research Opportunities`, IEEE Communications Letters, 2023, DOI `10.1109/LCOMM.2023.3284318`.
- `Liquid Metal Bandwidth-Reconfigurable Antenna`, IEEE Antennas and Wireless Propagation Letters, 2020, DOI `10.1109/LAWP.2019.2959879`.

## Secondary signals

1. **Self-coherent over-the-air computation at sub-THz** — a separate arXiv signal about relaxing carrier synchronization through Kramers–Kronig reception. Possible future Vibe: radios that move complexity from synchronization protocols into signal-domain physical tricks.
2. **Dynamic beamwidth THz MAC for wireless data centers** — another signal that high-frequency networks are becoming control-heavy physical environments, not just packets.
3. **Liquid-metal reconfigurable antenna components** — older hardware work may become newly relevant if FAS needs real reconfigurable bodies rather than port abstractions.

## Rejected or weakened paths

See `rejected/2026-07-21-fluid-antenna-as-6g-hype.md`.

## Useful next search branches

- liquid-metal antenna fabrication constraints;
- MEMS/RF switch lifetime and speed;
- channel sounding datasets for movable antennas;
- FAS code repositories and simulators;
- ISAC use cases where position adaptation matters more for sensing than communication;
- patents around smartphone reconfigurable antennas.
