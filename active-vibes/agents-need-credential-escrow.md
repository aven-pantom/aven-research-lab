# Agents Need Credential Escrow: Secrets Should Be Leased, Not Remembered

## Name
Agents Need Credential Escrow: Secrets Should Be Leased, Not Remembered

## Signal
Agent platforms are gaining real tool access while authentication systems still assume a human or a conventional backend is the actor. OAuth 2.1, MCP authorization, GNAP, FedCM, WebAuthn, Vault leases, AWS STS temporary credentials, and GitHub fine-grained tokens all point toward scoped delegation, but none alone creates a user-readable operating primitive for autonomous agents that touch accounts over time.

## Intuition
The missing layer is not another password manager for agents. It is credential escrow: a task-scoped lease that lets an agent borrow authority under visible terms, produce receipts, expire naturally, and fail closed when context goes stale.

## Core Question
Can consumer and builder-facing agents operate through leased authority objects instead of remembered secrets, browser cookies, broad OAuth grants, or permanent personal access tokens?

## Emerging Capability
A user could delegate a task by minting a Credential Lease Card: actor, task, account, scopes, allowed surfaces, forbidden actions, expiry, refresh policy, approval gates, revocation path, receipt requirements, and recovery instructions.

## Current Assumption
Authentication is infrastructure below the product surface. If an app or agent has a token, the user only needs to see success/failure and maybe a permission dialog.

## Challenged Assumption
For autonomous agents, authority is part of the interface. The user needs to see what the agent is allowed to hold, for how long, where it may present the credential, and what evidence must be returned.

## Enabling Changes
- **Verified:** OAuth 2.1 continues OAuth's authorization-code and scoped access-token model as an active IETF draft.
- **Verified:** MCP has an authorization specification for protected resources and authorization servers.
- **Verified:** GNAP reached RFC 9635 after being developed as a grant negotiation protocol.
- **Verified:** FedCM and WebAuthn expose browser-level credential/federated identity primitives.
- **Verified:** Vault documents leases with expiry and revocation for secrets; AWS IAM documents temporary security credentials; GitHub supports fine-grained personal access tokens.
- **Inferred:** Agent runtimes, browser automation, and MCP servers create demand for delegation objects that humans can inspect without reading protocol details.

## Missing Primitive
The Credential Lease Card.

Minimum fields:

- principal: human, agent, workspace, receiving service
- task intent: what the credential is for
- credential type: OAuth token, STS session, PAT, browser session, API key, service account, passkey-mediated assertion
- scope and resource boundaries
- allowed actions and forbidden actions
- expiry and renewal rule
- storage location and custody
- approval gates for irreversible or sensitive actions
- stale-state checks before use
- receipt schema after use
- revocation URL/command
- recovery and incident path

## Adjacent Fields
OAuth/OIDC, GNAP, WebAuthn/passkeys, cloud IAM, secret management, MCP tool authorization, browser agents, enterprise PAM, local-first agents, computer-use observability, capability security, aviation maintenance sign-offs.

## Existing Evidence
- **Verified:** HashiCorp Vault frames secrets as leased objects that can be renewed and revoked.
- **Verified:** AWS IAM temporary credentials are short-lived credentials for delegated access.
- **Verified:** GitHub fine-grained tokens can be scoped to repositories and permissions rather than all account access.
- **Verified:** MCP authorization exists because tool/resource servers need access-control flows around agent clients.
- **Supported:** Prior lab Vibes around Room Contracts, Flight Recorders, Permission Receipts, Capability Manifests, Shadow Runs, and Continuation Ports all converge on explicit authority boundaries and receipts.

## Contradicting Evidence
- **Supported:** OAuth consent screens already exist, yet most users do not inspect them closely; simply making a nicer permission card may not change behavior.
- **Supported:** Browser cookies and app sessions are sticky because they are frictionless. Lease cards could add too much ceremony for low-risk tasks.
- **Inferred:** Platform owners may prefer proprietary agent permissions instead of portable user-owned credential leases.

## Open Questions
- What is the smallest lease card users will actually read?
- Should lease cards be local artifacts, protocol-level manifests, or both?
- How can leases cover browser-session authority, not just API tokens?
- What counts as a stale credential context: time, account page change, user setting change, location, device, or task mutation?
- Can receipts show enough for trust without exposing private account data?
- How does a receiving agent verify a lease without learning more than necessary?

## Strange Implications
- A future agent inbox may organize work by authority leases, not by chats.
- Credential managers may become task managers: each secret has a job, expiry, receipt trail, and owner.
- Browser sessions may need visible subleases: “this agent may use this login for these three actions for ten minutes.”
- The boundary between password manager, agent runtime, and local OS permissions may collapse.

## Possible Experiments
1. Hand-author 10 Credential Lease Cards for common safe tasks: draft PR comment, check order status, pull analytics export, schedule calendar hold, read-only GitHub issue triage, local file sync, creator asset export, budget CSV import, outfit-board publish, and MCP server install.
2. Compare lease cards against normal OAuth/PAT/API-key setup instructions: time to understand risk, ability to spot overbroad permission, and confidence in revocation.
3. Build a static lease-card viewer with “allowed / forbidden / stale / revoke / receipt required” states.
4. Test one local-only mock browser agent task where a lease expires mid-task and must fail closed.

## Potential Outcomes
- A local-first agent credential wallet.
- A browser extension that turns delegated sessions into visible leases.
- MCP Capability Receipt Manifests extended with credential lease requirements.
- A small product surface for Aven/Hermes: authority cards attached to every autonomous task.

## Confidence
Emerging direction

## Status
Active

## Scoring

| Dimension | Score | Note |
|---|---:|---|
| Originality | 7 | Secret leasing exists, but not as a consumer-facing agent work object. |
| Technical plausibility | 8 | Uses existing scopes, leases, revocation, and local manifests. |
| Importance | 9 | Agent adoption will bottleneck on account authority and trust. |
| Depth | 8 | Connects identity, security UX, agent operations, and local-first custody. |
| Unexpectedness | 7 | The strong move is treating credentials as task cards, not secrets. |
| Prototype potential | 8 | Can be tested with mock cards before real integrations. |
| Long term potential | 9 | Could become a core primitive in agent operating systems. |
| Alignment with existing projects | 9 | Directly fits Aven/Hermes, Pantom agent tooling, and Orior trust dossiers. |
| Defensibility | 7 | Defensible through UX taste, receipt grammar, and local trust history. |
| Research richness | 8 | Standards, IAM, browser identity, agent protocols, and HCI all matter. |
| Timing | 8 | Agent tools are spreading faster than user-readable authority models. |

## Time Horizon
Immediate: prototype static cards now. Near term: integrate with MCP/OAuth/PAT flows in 1–3 years. Long term: browser/OS-level agent leases need platform support.

## Sources
- Model Context Protocol. “Authorization.” 2025-06-18 specification. https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- IETF OAuth WG. “The OAuth 2.1 Authorization Framework.” Active Internet-Draft. https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1
- IETF. “Grant Negotiation and Authorization Protocol.” RFC 9635 / GNAP. https://datatracker.ietf.org/doc/html/rfc9635
- W3C. “Federated Credential Management API.” https://www.w3.org/TR/fedcm/
- W3C. “Web Authentication: An API for accessing Public Key Credentials - Level 3.” https://www.w3.org/TR/webauthn-3/
- HashiCorp Developer. “Lease, Renew, and Revoke.” https://developer.hashicorp.com/vault/docs/concepts/lease
- AWS IAM User Guide. “Temporary security credentials in IAM.” https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html
- GitHub Docs. “Managing your personal access tokens.” https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

## Unexpected Connections
Credential leases resemble aircraft maintenance release-to-service signoffs more than passwords: both authorize a bounded operation only after scope, evidence, responsibility, expiry/review, and revocation/recovery are legible.
