# AGENTS.md — Main Instructions for AI Agents

## Project Identity

This repository is for a premium controlled no-index yacht presentation tool.

Current domain context: `claudia-z.com`.
Domain is active.
Potential brand direction: Bell Rock / Bell Rock Way.
Current yacht focus: Sunseeker 76 / Claudia Z, but the structure must not lock the product to one yacht only. Future yachts may be added.

The site is a private digital presentation / yacht card for controlled sharing, not a public sales site, SEO site, or public charter marketplace.

## Primary Goal

Create a premium, discreet, mobile-first and tablet-first presentation tool for selected brokers, trusted partners, and direct private clients.

The presentation layer must feel like a private salon, not like a mass-market charter landing page.

## Content Source Discipline

Old site text may be used only as directional reference.

Do not reuse the old site's visual approach, layout patterns, interaction patterns, copy structure, section rhythm, WordPress theme behavior, or marketing mechanics.

When content is provided from the old site:

- extract factual direction, yacht details, topic coverage, and media references
- write new copy from scratch in the controlled presentation tone
- verify claims before publishing
- keep only approved content
- do not copy old wording, phrasing, UX, or SEO tactics

## Language And Locale

Primary language is English.

Supported languages for first release:

- `en`: primary/default
- `ru`: secondary

Language behavior:

- detect user/browser language when possible
- show Russian only when the detected/preferred language is Russian
- show English when the detected/preferred language is English
- fall back to English for every other language
- keep language switching discreet and compact
- do not duplicate large blocks on screen; show one active language at a time
- maintain content parity between `en` and `ru` for approved presentation content

## Main Devices

Prioritize in this order:

1. Smartphone / iPhone
2. iPad / tablet
3. Desktop

Desktop matters, but smartphone and tablet are the main client-facing surfaces.

## Commercial and Legal Wording Boundaries

The presentation must not:

- show prices
- say “book now”
- say “rent now”
- present a public charter offer
- behave like a public sales funnel
- rely on public SEO discovery
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
- hard no-index by default
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

## Controlled Presentation Scope

The first controlled presentation layer should include:

- premium first screen
- yacht identity
- beautiful yacht description
- exterior / interior / lifestyle media
- general plans / overview
- flybridge zone
- main deck zone
- foredeck zone
- cockpit zone
- aft swim platform / bathing platform
- calm experience narrative
- gallery / video layer
- private inquiry entry
- no prices
- no direct booking language

## No-Index And Access Discipline

The project is not intended for public search discovery.

Default publication rules:

- use `robots.txt` to disallow crawling
- use page-level robots meta such as `noindex, nofollow, noarchive`
- use `X-Robots-Tag` headers where hosting allows
- do not generate or publish a sitemap
- do not implement SEO growth strategy, public keyword targeting, or search landing pages
- do not add unnecessary analytics, pixels, or public tracking scripts
- treat any legacy page metadata as migration context only, not as a new-site goal

No-index is not access control. Anything sensitive, owner-identifying, commercially private, or client-specific must use private delivery, invite-only access, or another approved protection layer.

## CSS And Visual System Discipline

The presentation must use one shared visual system, not a set of unrelated page fragments.

Default UX standard: Interface-Light Media-First.

For CSS and layout work:

- use `premium-yacht-ux`, `mobile-first-audit`, `css-architecture-guard`, and `safe-patch`
- create or preserve a shared CSS base before adding complex sections
- keep colors, typography, spacing, buttons, media frames, overlays, and gallery patterns consistent
- design mobile first, then tablet, then desktop
- maximize meaningful information and minimize non-meaningful interface fields
- avoid unnecessary header, footer, oversized cards, oversized headings, and decorative fields
- do not spend first-screen space on navigation chrome when the same job can be done with compact controls, overlay, drawer, or sheet
- avoid card collections as the main presentation pattern
- make the first mobile viewport feel like a complete premium experience, not the top of a generic landing page
- make the first 10 seconds clear: what this is, what level it is, and how to continue
- respect that serious clients may study longer, but only after the opening is clear
- prefer compact modern media patterns such as full-screen viewer, swipe gallery, media rail, zone gallery, drawer, or progressive reveal
- avoid long stacked gallery pages when a focused interactive media experience is better
- reserve the information architecture for a future 3D yacht guide: zones, hotspots, media mapping, and deck navigation must remain compatible
- use `three-d-guide-preparation` whenever gallery, media zones, deck navigation, walkthrough, hotspots, or spatial guide decisions are involved
- do not keep layering CSS overrides when the result is unstable
- if CSS fixes start looping, stop, diagnose cascade/layout conflicts, clean the smallest affected area, and rebuild it according to the shared base
- avoid casual `!important`, inline fixes, deep selectors, duplicated breakpoints, and one-off section styling

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
5. Extract factual direction and legacy metadata for audit/reference only.
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

Do not design media, gallery, navigation, or CSS in a way that blocks future 3D integration.

Prepare for:

- deck/zone structure
- hotspots
- walkthrough media mapping
- video-based guide fallback
- mobile-safe 3D loading
- zone-based URLs or state where useful
- 3D placeholder entry points in the media experience
- graceful fallback when 3D is unavailable or too heavy for mobile

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

## Memory And Handoff Protocol

The repository must preserve one active truth without accumulating contradictory instructions.

Use these layers:

- `AGENTS.md`: stable project rules and behavioral postulates only
- `docs/DECISIONS.md`: approved strategic decisions and what they supersede
- `docs/CURRENT_STATE.md`: current active project state
- `docs/NEXT_CHAT_HANDOFF.md`: short current context for the next chat; update or replace, do not append endlessly
- `tasks/`: concrete task notes, not permanent rules

After significant work, update the smallest necessary memory layer:

- changed rule or project logic -> update `AGENTS.md`
- approved strategic decision -> append `docs/DECISIONS.md`
- changed active state -> update `docs/CURRENT_STATE.md`
- next-chat context changed -> replace relevant parts of `docs/NEXT_CHAT_HANDOFF.md`

## Contradiction Cleanup Protocol

Do not layer contradictory project rules.

When an approved decision supersedes earlier guidance:

1. Search the repository for old wording and related terms.
2. Remove or rewrite old guidance everywhere it appears.
3. Do not leave old and new rules side by side unless the old rule is explicitly marked as superseded in `docs/DECISIONS.md`.
4. Keep `CURRENT_STATE.md` and `NEXT_CHAT_HANDOFF.md` current-only.
5. Run `rg` checks for replaced terms before finishing.
6. Report what was replaced and what verification was run.

## Analyst Behavior

When acting as analyst, strategist, architect, reviewer, or discovery interviewer:

- Do not agree automatically.
- Be helpful, human, and direct.
- Separate facts, assumptions, unknowns, risks, and recommendations.
- Say clearly when an idea is weak, risky, premature, or internally inconsistent.
- Offer a safer or sharper alternative when rejecting or challenging an idea.
- Do not invent yacht facts, ownership details, legal status, availability, prices, technical specs, or operational promises.
- Ask only useful questions; prefer the smallest set needed to reach a decision.
- Give a conclusion, not only options.
- Protect premium positioning, privacy, legal wording, mobile/tablet quality, and migration safety.

For early-stage discovery, use the core 10-question model:

1. What must the project achieve first: trust, private inquiry, broker credibility, media presentation, migration, or backend readiness?
2. Who is the primary audience: direct client, broker, partner, concierge, captain, owner-side contact, or internal team?
3. What should the visitor feel in the first 10 seconds?
4. What must never be public?
5. Which yacht facts are verified and safe to publish?
6. What is the preferred private inquiry path?
7. What privacy level is required for the first release?
8. What must be preserved from the current WordPress/site state?
9. What outcome counts as a successful first release?
10. Which decisions require explicit owner approval before implementation?

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
