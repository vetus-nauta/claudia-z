# AGENTS.md — Main Instructions for AI Agents

## Project Identity

This repository is for a premium private yacht presentation website.

Current public site context: `claudia-z.com`.
Potential brand direction: Bell Rock / Bell Rock Way.
Current yacht focus: Sunseeker 76 / Claudia Z, but the structure must not lock the product to one yacht only. Future yachts may be added.

The site is a private digital presentation / yacht card, not a public charter marketplace.

## Primary Goal

Create a premium, discreet, mobile-first and tablet-first digital presentation for selected private clients, brokers, and trusted contacts.

The public layer must feel like a private salon, not like a mass-market charter landing page.

## Main Devices

Prioritize in this order:

1. Smartphone / iPhone
2. iPad / tablet
3. Desktop

Desktop matters, but smartphone and tablet are the main client-facing surfaces.

## Commercial and Legal Wording Boundaries

The public site must not:

- show prices
- say “book now”
- say “rent now”
- present a public charter offer
- create direct legal interpretation of public rental/charter terms
- expose ownership details
- expose owner identity
- make unverified claims

Use careful language:

- private yacht presentation
- private introduction
- availability by request
- selected dates
- guest experience
- private inquiry
- broker/client conversation
- details shared privately
- subject to confirmation

## Privacy and Security Boundaries

Privacy features must be lawful and compliance-aware.

Do not design features for fraud, illegal evasion, evidence destruction, harassment, or unlawful concealment.
Do not promise absolute anonymity or impossibility of legal attribution.

Use privacy-by-design:

- minimal public exposure
- minimal personal data collection
- no unnecessary analytics
- secure authentication
- HTTPS/TLS
- encrypted sensitive data at rest where practical
- role-based access
- short retention policy where legally acceptable
- no secrets committed to GitHub
- no public owner identity
- no public private-contact details unless approved

## Public Website Scope

The first public website layer should include:

- premium hero
- yacht identity
- beautiful yacht description
- exterior / interior / lifestyle media
- calm experience narrative
- gallery / video layer
- private inquiry entry
- no prices
- no direct booking language

## Private Panel / Future Backend Scope

A future private panel may include:

- admin account
- invited client/broker account
- invite-only access
- private inquiry threads
- private messenger
- MongoDB Atlas or equivalent managed database
- encrypted transport
- sensitive data encryption at rest where practical
- retention controls
- attachment controls
- admin dashboard

Do not build backend, database, or messenger unless the task explicitly requests it.

## WordPress / Namecheap Migration Context

Current site may exist as WordPress on Namecheap hosting.

Migration discipline:

1. Do not destroy old WordPress first.
2. Backup `public_html`.
3. Backup database.
4. Extract media from `wp-content/uploads`.
5. Extract useful text and SEO metadata.
6. Build new project separately in GitHub/dev.
7. Test on dev/staging.
8. Only after approval, replace `public_html` with the new build.
9. Keep rollback backup.

## Media Rules

Photos and videos are premium assets.

Before using media:

- inspect resolution and orientation
- classify by yacht zone
- prepare smartphone/tablet crops
- avoid low-quality compression
- avoid heavy mobile load
- use video poster images
- do not autoplay sound

## Future 3D Guide

The project must be architecturally ready for a future 3D or interactive yacht guide.

Do not build full 3D unless explicitly requested.

Prepare for:

- deck/zone structure
- hotspots
- walkthrough media mapping
- video-based guide fallback
- mobile-safe 3D loading

## Agent Workflow Discipline

For every non-trivial task:

1. Read `AGENTS.md`.
2. Read `.agent-start.md`.
3. Read relevant files in `/docs`.
4. Inspect current files before editing.
5. Explain diagnosis and proposed approach.
6. Ask `Пишем?` before applying code changes unless the user explicitly requested immediate implementation.
7. Keep patches small and reversible.
8. Do not rewrite large working files blindly.
9. Run available checks.
10. Report changed files and verification result.

## Git Discipline

Default workflow:

1. Work from a feature branch.
2. Commit small logical changes.
3. Do not commit secrets.
4. Do not commit raw private client documents.
5. Do not commit unoptimized heavy media unless explicitly approved.
6. Keep GitHub as the project memory and source of truth.

## Protected Files and Data

Never commit:

- `.env`
- API keys
- MongoDB URI
- private keys
- cPanel credentials
- registrar credentials
- admin passwords
- raw client private data
- private owner documents
- private correspondence exports

## Output Style for Agents

Be concise and practical.

When proposing work, use:

- diagnosis
- affected files
- risk level
- proposed approach
- verification plan
- question: `Пишем?`

Do not produce marketing fluff when the task is technical.
Do not produce technical noise when the task is visual/product-level.
