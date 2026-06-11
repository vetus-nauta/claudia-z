# Security and Privacy Policy

## Purpose

Protect owner privacy, client discretion, broker confidentiality, and project integrity using lawful privacy-by-design.

## Hard Boundary

Do not design systems for:

- fraud
- illegal evasion
- destruction of evidence
- unlawful concealment
- harassment
- impersonation
- illegal surveillance

Do not promise:

- absolute anonymity
- impossibility of legal attribution
- guaranteed non-disclosure under lawful process

## Public Privacy Principles

- no public owner identity
- no unnecessary personal data
- no public price history
- no unnecessary tracking
- no public admin URLs
- no private documents in the repo
- no exposed registrar/hosting details

## Technical Baseline

Required for private areas:

- HTTPS/TLS
- secure auth
- role-based access
- invite-only access where relevant
- secure sessions
- rate limiting
- encrypted secrets outside GitHub
- encrypted sensitive fields at rest where practical
- backup and retention policy
- account revocation

## Messenger Baseline

For future private messenger:

- admin/client/broker roles
- private threads
- encrypted transport
- message storage security
- optional message expiry/retention policy
- attachment controls
- no public message links by default
- no hardcoded admin credentials

## Data Retention

Use minimal retention.
Define retention before launch of private messaging.
Allow admin-controlled cleanup where legally acceptable.
Do not silently delete data in a way that creates legal or operational risk.
