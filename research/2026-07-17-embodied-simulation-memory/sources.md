# Sources — Simulation Memory for Embodied Agents

Integrity rule: citations below use retrieved arXiv metadata. The “quotation or finding” field is a brief finding from the retrieved abstract unless explicitly marked as an interpretation. No experiments from this research package are claimed as completed.

## 1. World Models

- **Title:** World Models
- **Author or organization:** David Ha; Jürgen Schmidhuber
- **Publication year:** 2018
- **Link:** https://arxiv.org/abs/1803.10122
- **Source type:** arXiv paper
- **What it contributes:** Establishes the central premise that an agent can learn a compact predictive model of its environment and use that model internally for policy learning.
- **Reliability notes:** Highly influential research paper; simulation-memory proposal should not treat it as sufficient evidence for real-world embodied transfer.
- **Relevant quotation or finding:** The abstract reports that agents can use learned compressed spatial and temporal representations of the environment to train a compact policy.

## 2. Dream to Control: Learning Behaviors by Latent Imagination

- **Title:** Dream to Control: Learning Behaviors by Latent Imagination
- **Author or organization:** Danijar Hafner; Timothy Lillicrap; Jimmy Ba; Mohammad Norouzi
- **Publication year:** 2019
- **Link:** https://arxiv.org/abs/1912.01603
- **Source type:** arXiv paper
- **What it contributes:** Demonstrates learning behaviors through latent imagination, directly relevant to rehearsal before external action.
- **Reliability notes:** Strong technical precedent; evaluated in reinforcement-learning benchmarks rather than broad agentic software/physical environments.
- **Relevant quotation or finding:** The abstract presents Dreamer as learning long-horizon behaviors from predicted latent trajectories.

## 3. Mastering Diverse Domains through World Models

- **Title:** Mastering Diverse Domains through World Models
- **Author or organization:** Danijar Hafner; Jurgis Pasukonis; Jimmy Ba; Timothy Lillicrap
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2301.04104
- **Source type:** arXiv paper
- **What it contributes:** Shows broader applicability of world models across domains, supporting the idea that simulation memory may generalize beyond one narrow environment.
- **Reliability notes:** Strong benchmark evidence for world-model agents; not evidence that persistent user-level agent memory will work without new design.
- **Relevant quotation or finding:** The abstract frames DreamerV3 as a single algorithm mastering diverse domains through world models.

## 4. Voyager: An Open-Ended Embodied Agent with Large Language Models

- **Title:** Voyager: An Open-Ended Embodied Agent with Large Language Models
- **Author or organization:** Guanzhi Wang; Yuqi Xie; Yunfan Jiang; Ajay Mandlekar; Chaowei Xiao; Yuke Zhu; Linxi Fan; Anima Anandkumar
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2305.16291
- **Source type:** arXiv paper
- **What it contributes:** Demonstrates open-ended embodied skill acquisition with LLM-generated code and a skill library.
- **Reliability notes:** Minecraft is a useful sandbox but not a proxy for safety-critical physical action.
- **Relevant quotation or finding:** The abstract describes an LLM-powered embodied lifelong learning agent that explores, acquires skills, and stores them in a skill library.

## 5. RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control

- **Title:** RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control
- **Author or organization:** Anthony Brohan et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2307.15818
- **Source type:** arXiv paper
- **What it contributes:** Shows a path from web-scale vision-language learning to robotic action, making the interface between symbolic intent and physical control more important.
- **Reliability notes:** Strong industrial research signal; exact training data and deployment constraints are not fully reproducible by small labs.
- **Relevant quotation or finding:** The abstract presents vision-language-action models that transfer knowledge from web-scale data to robotic control.

## 6. Do As I Can, Not As I Say: Grounding Language in Robotic Affordances

- **Title:** Do As I Can, Not As I Say: Grounding Language in Robotic Affordances
- **Author or organization:** Michael Ahn et al.
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2204.01691
- **Source type:** arXiv paper
- **What it contributes:** Introduces the importance of grounding language-model plans in what a robot can actually do.
- **Reliability notes:** Relevant to action selection and feasibility filters; does not solve long-term memory or counterfactual rehearsal.
- **Relevant quotation or finding:** The abstract frames the system as using language models together with affordance functions to select actions that are both useful and possible.

## 7. Generative Agents: Interactive Simulacra of Human Behavior

- **Title:** Generative Agents: Interactive Simulacra of Human Behavior
- **Author or organization:** Joon Sung Park et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2304.03442
- **Source type:** arXiv paper
- **What it contributes:** Provides a memory/reflection/planning architecture for simulated social agents.
- **Reliability notes:** Useful architectural precedent, but social simulation is not the same as embodied control or safety validation.
- **Relevant quotation or finding:** The abstract describes computational agents that simulate believable human behavior through memory, reflection, and planning.

## 8. Paired Open-Ended Trailblazer (POET)

- **Title:** Paired Open-Ended Trailblazer (POET): Endlessly Generating Increasingly Complex and Diverse Learning Environments and Their Solutions
- **Author or organization:** Rui Wang; Joel Lehman; Jeff Clune; Kenneth O. Stanley
- **Publication year:** 2019
- **Link:** https://arxiv.org/abs/1901.01753
- **Source type:** arXiv paper
- **What it contributes:** Shows the value of generating environments and solutions together, relevant to automatically expanding a simulation-memory curriculum.
- **Reliability notes:** Strong conceptual precedent for open-endedness; not a complete architecture for real-world agent memory.
- **Relevant quotation or finding:** The abstract presents an algorithm that generates increasingly complex environments and their solutions.

## 9. MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge

- **Title:** MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge
- **Author or organization:** Fan et al.
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2206.08853
- **Source type:** arXiv paper
- **What it contributes:** Provides an open-ended embodied-agent benchmark and knowledge-rich environment.
- **Reliability notes:** Useful as a benchmark/ecosystem reference; Minecraft transfer to physical robotics is limited.
- **Relevant quotation or finding:** The abstract frames MineDojo as an environment suite for building generally capable embodied agents with internet-scale knowledge.

## 10. VIMA: General Robot Manipulation with Multimodal Prompts

- **Title:** VIMA: General Robot Manipulation with Multimodal Prompts
- **Author or organization:** Yunfan Jiang et al.
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2210.03094
- **Source type:** arXiv paper
- **What it contributes:** Connects multimodal prompting to robot manipulation, relevant to interfaces between human intent and simulated/real execution.
- **Reliability notes:** Important for manipulation tasks; the proposed project is broader than prompt-conditioned manipulation.
- **Relevant quotation or finding:** The abstract presents a robot-agent setting where tasks are specified through multimodal prompts.

## 11. AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles

- **Title:** AirSim: High-Fidelity Visual and Physical Simulation for Autonomous Vehicles
- **Author or organization:** Shital Shah; Debadeepta Dey; Chris Lovett; Ashish Kapoor
- **Publication year:** 2017
- **Link:** https://arxiv.org/abs/1705.05065
- **Source type:** arXiv paper / simulator platform
- **What it contributes:** Provides precedent for simulation as infrastructure for autonomous vehicles, especially drones and cars.
- **Reliability notes:** Useful for autonomous-system simulation; simulator fidelity does not guarantee real-world transfer.
- **Relevant quotation or finding:** The abstract describes AirSim as a high-fidelity simulator for autonomous vehicles built to support AI research.

## 12. Habitat: A Platform for Embodied AI Research

- **Title:** Habitat: A Platform for Embodied AI Research
- **Author or organization:** Manolis Savva et al.
- **Publication year:** 2019
- **Link:** https://arxiv.org/abs/1904.01201
- **Source type:** arXiv paper / simulator platform
- **What it contributes:** Establishes a platform for embodied AI tasks in realistic 3D environments.
- **Reliability notes:** Strong platform reference; does not by itself solve persistent memory or counterfactual replay.
- **Relevant quotation or finding:** The abstract describes Habitat as a platform for training embodied agents in photorealistic 3D environments.

## 13. ProcTHOR: Large-Scale Embodied AI Using Procedural Generation

- **Title:** ProcTHOR: Large-Scale Embodied AI Using Procedural Generation
- **Author or organization:** Matt Deitke et al.
- **Publication year:** 2022
- **Link:** https://arxiv.org/abs/2206.06994
- **Source type:** arXiv paper / generated environment benchmark
- **What it contributes:** Supports the idea that procedural generation can expand environment diversity for agent evaluation.
- **Reliability notes:** Strong relevance to scalable simulation memory; generated homes do not capture all real-world hazards.
- **Relevant quotation or finding:** The abstract presents procedurally generated interactive 3D environments for embodied AI.

## 14. AI2-THOR: An Interactive 3D Environment for Visual AI

- **Title:** AI2-THOR: An Interactive 3D Environment for Visual AI
- **Author or organization:** Eric Kolve et al.
- **Publication year:** 2017
- **Link:** https://arxiv.org/abs/1712.05474
- **Source type:** arXiv paper / interactive environment
- **What it contributes:** Early and widely used interactive 3D environment for embodied AI and visual interaction.
- **Reliability notes:** Good platform reference; limited to household-style simulated environments.
- **Relevant quotation or finding:** The abstract describes AI2-THOR as an interactive framework for visual AI research.

## 15. ThreeDWorld: A Platform for Interactive Multi-Modal Physical Simulation

- **Title:** ThreeDWorld: A Platform for Interactive Multi-Modal Physical Simulation
- **Author or organization:** Chuang Gan et al.
- **Publication year:** 2020
- **Link:** https://arxiv.org/abs/2007.04954
- **Source type:** arXiv paper / simulator platform
- **What it contributes:** Adds physical and multimodal simulation precedent, useful for a simulation-memory substrate that preserves more than language traces.
- **Reliability notes:** Platform paper; the proposed memory layer would need to sit above or beside systems like this.
- **Relevant quotation or finding:** The abstract presents ThreeDWorld as an interactive multi-modal physical simulation platform.

## 16. Eureka: Human-Level Reward Design via Coding Large Language Models

- **Title:** Eureka: Human-Level Reward Design via Coding Large Language Models
- **Author or organization:** Yecheng Jason Ma et al.
- **Publication year:** 2023
- **Link:** https://arxiv.org/abs/2310.12931
- **Source type:** arXiv paper
- **What it contributes:** Shows LLMs can participate in reward/program design for embodied learning, relevant to automated experiment generation inside simulation memory.
- **Reliability notes:** Strong technical signal; automated reward design can encode wrong objectives and needs guardrails.
- **Relevant quotation or finding:** The abstract describes using LLMs to write reward functions for reinforcement learning tasks.
