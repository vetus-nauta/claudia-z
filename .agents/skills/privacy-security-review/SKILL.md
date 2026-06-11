---
name: privacy-security-review
description: Use for privacy, security, domain exposure, client data, admin panel, messenger, database, authentication, and retention decisions.
---

# Privacy Security Review

## Purpose

Design lawful privacy-by-design protections for a premium private yacht presentation and communication system.

## Hard Boundary

Do not design systems for fraud, illegal evasion, evidence destruction, harassment, or unlawful concealment.

Do not promise absolute anonymity, legal non-attribution, or impossibility of disclosure.

## Privacy Goals

- reduce unnecessary exposure
- protect owner identity
- protect client/broker discretion
- minimize collected data
- secure communications
- limit internal access
- prevent public indexing of the presentation and all private areas
- avoid unnecessary analytics and tracking

## Security Baseline

Require:

- HTTPS/TLS
- secure auth
- strong passwords or passwordless magic links
- role-based access
- encrypted secrets management
- no secrets in GitHub
- MongoDB Atlas security controls for private backend phase
- encrypted sensitive fields at rest where practical
- rate limiting
- audit boundaries
- backup policy
- retention policy
- no-index controls for presentation surfaces

## Output

1. Risk summary
2. Data collected
3. Data avoided
4. Encryption approach
5. Access control
6. Retention policy
7. Domain/exposure risks
8. Indexing/crawling risks
9. Required technical tasks
10. What must not be promised
