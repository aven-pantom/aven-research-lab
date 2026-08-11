# Source Notes — Credential Escrow for Agents

## Date
2026-08-11

## Calling title
Agents Need Credential Escrow: Secrets Should Be Leased, Not Remembered

## Source scan

### Model Context Protocol authorization
- URL: https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization
- **Verified:** The MCP site exposes a 2025-06-18 authorization specification for MCP clients, authorization servers, and protected resources.
- **Implication:** Agent tool protocols are not just about tool schemas; they need explicit authority flows.

### OAuth 2.1
- URL: https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1
- **Verified:** The IETF datatracker identifies OAuth 2.1 as an active Internet-Draft under the OAuth working group.
- **Implication:** Modern delegated authorization remains token/scope centered, but the user-facing grammar is still consent-screen oriented.

### GNAP / RFC 9635
- URL: https://datatracker.ietf.org/doc/html/rfc9635
- **Verified:** GNAP exists as RFC 9635 after the draft-ietf-gnap-core-protocol series.
- **Implication:** There is standards-level pressure toward richer grant negotiation than simple app consent.

### FedCM and WebAuthn
- URLs: https://www.w3.org/TR/fedcm/ and https://www.w3.org/TR/webauthn-3/
- **Verified:** W3C maintains browser-level identity and public-key credential specifications.
- **Implication:** Browser identity surfaces can become part of agent authority mediation, but browser specs do not themselves define task-level agent leases.

### Vault leases
- URL: https://developer.hashicorp.com/vault/docs/concepts/lease
- **Verified:** HashiCorp documents secrets as leased objects that expire and can be renewed or revoked.
- **Implication:** Expiry/revocation is a mature backend primitive that can be translated into a visible user-facing agent primitive.

### AWS temporary credentials
- URL: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html
- **Verified:** AWS IAM documents temporary security credentials.
- **Implication:** Short-lived delegated authority is normal in infrastructure; the gap is bringing the same idea to human-agent workflows.

### GitHub fine-grained PATs
- URL: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
- **Verified:** GitHub documents fine-grained personal access tokens with permission and repository scoping.
- **Implication:** Developer tools already expose scope granularity, but most agent products do not convert those scopes into readable work contracts and receipts.

## Failed / weak source path
- arXiv queries for delegated authorization and computer-use credential management hit API timeouts/429s during this run. I did not cite any paper from that failed search.

## Synthesis
The source base is not one breakthrough paper. The signal is convergence: standards and infrastructure already know how to scope, lease, revoke, and negotiate authority, while agent UX still tends to hide authority behind broad tokens, cookies, or prose instructions. The research opportunity is to make authority an inspectable work object.
