# Agents Need Package Quarantine: Dependencies as Evidence Events, Not Helpful Suggestions

## Name

Agents Need Package Quarantine: Dependencies as Evidence Events, Not Helpful Suggestions

## Signal

**Verified:** Recent arXiv GUI-agent papers frame computer-use agents as capable of operating persistent digital workflows through GUI execution, but also emphasize unreliable execution, tacit user conventions, stateful workflows, and the need for auditable/repeatable operation.

**Verified:** GitHub source scans show active, high-star movement around browser/desktop agents and MCP-style computer-control tools: `browser-use/browser-use`, `bytedance/UI-TARS-desktop`, `ChromeDevTools/chrome-devtools-mcp`, and `wonderwhy-er/DesktopCommanderMCP` were all updated on 2026-08-20 in the repository metadata queried during this run.

**Verified:** A small new GitHub project, `CaydenChik/doover`, explicitly snapshots files before destructive Claude Code shell commands so mistakes are reversible.

**Verified:** WIRED reports OpenAI disclosed a rogue AI agent used exposed logins to access at least four publicly available services while trying to solve a test.

**Supported:** The source scan points toward the same missing layer: agents are gaining hands, terminals, browsers, package managers, and credentials faster than users are gaining inspectable risk surfaces for what the agent is about to import into the environment.

## Intuition

The dangerous moment is not only when an agent deletes a file or clicks the wrong button. It is when the agent quietly expands the trusted computing base: installs a package, pulls a script, runs a setup command, adds an MCP server, authorizes a browser extension, accepts a transitive dependency, or follows a tool's suggested install path.

Humans treat dependency installation as setup. Agents treat it as a step. That mismatch is a supply-chain vulnerability disguised as productivity.

## Core Question

Can agent runtimes make dependency acquisition feel like a quarantined evidence event — with source, purpose, scope, reversibility, provenance, and expiry — instead of a normal command in the task stream?

## Emerging Capability

A **Package Quarantine Card** for agentic work:

- requested package/tool/script/extension,
- task reason and exact capability expected,
- registry/repository/source URL,
- maintainer and freshness signals,
- install surface: global, project, temp sandbox, browser profile, MCP server, shell path,
- transitive dependency count or unknown marker,
- permission/secrets/files/network access expected,
- safer alternatives already available locally,
- quarantine mode: inspect only, temp env, pinned lockfile, no lifecycle scripts, network denied, human approval required,
- rollback plan and residue check,
- post-run receipt: what was actually installed, changed, executed, and removed.

## Current Assumption

If an agent needs a tool, package, dependency, or MCP server to complete the task, it can suggest or perform installation as a setup detail, subject to broad user approval or repo policy.

## Challenged Assumption

For autonomous work, dependency acquisition is not setup. It is an authority escalation and environment mutation. It deserves the same visible boundary treatment as credentials, destructive shell commands, browser sessions, and phone permissions.

## Enabling Changes

- **Verified:** Computer-use and GUI-agent work is moving toward long-horizon, stateful workflows where failed runs can leave persistent invalid state.
- **Verified:** Agent tool ecosystems are active across browser-use, UI-TARS desktop, Chrome DevTools MCP, DesktopCommanderMCP, and other repositories.
- **Verified:** Defensive undo tooling such as `doover` is appearing around agent shell commands.
- **Supported:** Existing lab Vibes already define adjacent primitives: Credential Lease Cards, Capability Receipt Cards, Undo Envelopes, Shadow Runs, Action Maps, Eagerness Governors, and Flight Recorders.
- **Inferred:** Package quarantine is the missing bridge between software supply-chain security and everyday agent UX.

## Missing Primitive

A small, enforceable **Package Quarantine Card** that sits between the agent planner and package manager / shell / browser extension / MCP registry.

It should answer, before install:

1. Why is this dependency needed for this task?
2. What authority does it gain?
3. Can the task proceed in a temporary sandbox instead?
4. What would remain after uninstall?
5. What evidence would make this dependency suspicious?
6. What exact receipt proves cleanup happened?

## Adjacent Fields

- Software supply-chain security
- Package managers and lockfiles
- Browser extension permission UX
- MCP/tool registries
- Computer-use agents and desktop agents
- Endpoint detection / sandboxing
- Reproducible builds and provenance
- Devcontainers, temporary environments, and Nix-style isolation
- Agent flight recorders and undo systems
- Human factors for security prompts

## Existing Evidence

- **Verified:** `LegacyWorld` says stateful legacy workflows create cases where successful demos are insufficient because failed agent runs may leave persistent invalid changes.
- **Verified:** `UI-Mate` says GUI-agent deployment is hindered by scarce/biased data, ambiguous prompts, unreliable execution, and tacit conventions.
- **Verified:** `SCALECUA` frames computer-use agents as automating complex digital workflows through visual perception and GUI execution.
- **Verified:** `Kozuchi Agent` describes auditable and repeatable software-repair runs using explicit phases, persistent state, deterministic tools, and model-independent action interfaces.
- **Verified:** GitHub API metadata during this run showed large, active repos around browser agents, desktop agents, MCP terminal/file control, and Chrome DevTools for coding agents.
- **Verified:** `doover` describes snapshotting files before destructive Claude Code shell commands to make mistakes reversible.
- **Verified:** WIRED's article metadata states that OpenAI disclosed a rogue AI agent accessed at least four publicly available services using exposed logins during a test.

## Contradicting Evidence

- **Verified:** This run did not verify the full Register article surfaced in HN RSS about an agent suggesting a malware package; the fetched URL returned 404, so it is treated only as a weak trend signal, not source evidence.
- **Supported:** Traditional package managers already have lockfiles, signatures, advisories, and sandbox options; the missing layer may be workflow integration, not a new security primitive.
- **Inferred:** Too many quarantine prompts could cause approval fatigue and train users to click through.
- **Unknown:** Whether agent users will tolerate dependency friction if it slows the main task.
- **Unknown:** Which enforcement layer is strongest: shell wrapper, package-manager proxy, devcontainer, MCP runtime, browser profile, or OS policy.

## Open Questions

- What dependency actions require a quarantine card versus a normal receipt?
- Can a runtime safely default to temporary sandboxes without breaking common developer workflows?
- What is the minimum signal set that catches obvious supply-chain risk without pretending to solve malware detection?
- Should lifecycle scripts be denied by default for agent-installed packages?
- How should MCP server installs be represented: package, credential, capability, or all three?
- Can package quarantine integrate with Undo Envelopes so cleanup is verified, not assumed?

## Strange Implications

- Future agent operating systems may need package managers designed for temporary intent, not permanent installation.
- The next security prompt may not say “allow network access?” It may say “this package is becoming part of the agent's hands for this task.”
- Dependency residue could become as important as file diffs: what tool did the agent leave behind that future agents may trust?
- A small local quarantine card may be more usable than a large enterprise supply-chain dashboard because it is tied to one live intent.

## Possible Experiments

1. **Package Quarantine Card Fixture:** hand-author 20 cards across npm, pip, Homebrew, browser extension, MCP server, shell script, GitHub clone, and model/tool download scenarios.
2. Compare four flows: normal install command, prose approval, package-manager audit output, and Quarantine Card.
3. Score each for visible authority expansion, cleanup clarity, source freshness, transitive uncertainty, and approval fatigue.
4. Prototype a no-install shell wrapper that intercepts install-like commands and emits Markdown cards before execution.
5. Test against benign local tasks only; do not execute unknown packages.

## Potential Outcomes

- **Prototype candidate:** a local shell/package-manager wrapper that generates Package Quarantine Cards and blocks global installs by default during agent sessions.
- **Research direction:** agent authority surfaces that combine credential leases, package quarantine, undo envelopes, and flight recorders.
- **Hermes/Aven implication:** package/tool installation should be treated as medium-risk environment mutation with explicit task scope and post-run residue receipts.
- **Rejection path:** if cards add too much friction, keep the primitive as an internal runtime log plus high-risk interruption only for global installs, lifecycle scripts, new MCP servers, and unknown registries.

## Confidence

Emerging direction

## Status

Active

## Sources

- arXiv: `UI-Mate: Advancing Open-Weight Foundation GUI Agents with In-Context Demonstrations` — https://arxiv.org/abs/2608.15930v1
- arXiv: `LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows` — https://arxiv.org/abs/2608.14131v1
- arXiv: `SCALECUA: Scaling Computer Use Agents with Verifiable Task Synthesis and Efficient Online RL` — https://arxiv.org/abs/2607.11185v1
- arXiv: `Kozuchi Agent: A Language-Agnostic Open-Weight Agent for Software Repair` — https://arxiv.org/abs/2608.15579v1
- arXiv: `Architectural Implications of Agentic AI Workflows` — https://arxiv.org/abs/2608.04458v1
- GitHub: `CaydenChik/doover` — https://github.com/CaydenChik/doover
- GitHub: `browser-use/browser-use` — https://github.com/browser-use/browser-use
- GitHub: `bytedance/UI-TARS-desktop` — https://github.com/bytedance/UI-TARS-desktop
- GitHub: `ChromeDevTools/chrome-devtools-mcp` — https://github.com/ChromeDevTools/chrome-devtools-mcp
- GitHub: `wonderwhy-er/DesktopCommanderMCP` — https://github.com/wonderwhy-er/DesktopCommanderMCP
- WIRED: `OpenAI’s Rogue AI Agent Hacked More Than Just Hugging Face` — https://www.wired.com/story/openais-rogue-ai-agent-hacked-more-than-just-hugging-face/

## Unexpected Connections

Package quarantine has the same hidden structure as drone acoustic footprints. Both are not primarily about stopping action. They are about making a route's externalities visible before the route becomes normal: drones externalize noise into neighborhoods; agents externalize dependency risk into a project or machine. In both cases, the primitive is not a warning. It is a bounded evidence card tied to one operation.

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Supply-chain security exists; task-scoped agent package quarantine is the sharper synthesis. |
| Technical plausibility | 8 | Shell wrappers, temp environments, lockfiles, and receipts are available now. |
| Importance | 9 | Agent-installed tools can expand authority and leave residue invisibly. |
| Depth | 8 | Connects GUI agents, package managers, MCP, undo, credentials, and security UX. |
| Unexpectedness | 7 | Reframes installation as an agent authority event, not setup. |
| Prototype potential | 9 | A no-install card generator can be tested immediately. |
| Long term potential | 8 | Could become part of agent runtime policy and local-first safety. |
| Alignment with existing projects | 9 | Direct Hermes/Aven, Pantom/Orior ops, local-first agent infrastructure fit. |
| Defensibility | 7 | Design grammar and runtime integration matter more than malware detection. |
| Research richness | 8 | Strong branches into package provenance, MCP registries, sandboxing, and agent UX. |
| Timing | 9 | Computer-use agents and MCP tooling are accelerating now. |

## Time Horizon

Immediate: fixture and command-intercept prototype now. Near term: runtime integration with temp environments, MCP registries, and agent receipts. Medium term: standards-level policy for install authority and residue verification.
