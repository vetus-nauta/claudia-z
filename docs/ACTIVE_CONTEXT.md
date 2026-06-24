# Active Context

Last updated: 2026-06-24

## Read This First

This is the compact source of truth for future work.

Do not touch `/home/alexey/GitHub/Revoyacht`.

Repository: `git@github.com:vetus-nauta/claudia-z.git`

Branch: `main`

Production: `https://claudia-z.com`

Current project status: implemented, deployed, verified, and closed for the present complex task.

## Work Discipline

Before changing anything:

1. Read this file.
2. Read `docs/NEXT_CHAT_HANDOFF.md`.
3. Read only the target code/docs area needed for the task.
4. Do not broadly refactor the site for a narrow request.
5. Do not rewrite user-supplied text unless asked.
6. Do not deploy docs/templates/private files.

## Hard Rules

- No public indexing.
- No sitemap.
- No SEO growth strategy.
- No public prices.
- No booking/rent/charter CTA.
- No public inquiry or contact form.
- No owner identity or private client data.
- No unnecessary analytics or tracking.
- No raw source photo opening from normal UI.
- No production deployment of `docs/`, `templates/`, `.media-source/`, source exports, or private notes.
- No creative rewriting of supplied text unless the user asks.
- English and Russian must stay semantically aligned.
- One active language at a time; no visible language switcher.
- `ru` browser/user language shows Russian; English and other languages show English.

## Production Site Structure

Main public files:

- `index.html`
- `src/app.js`
- `src/styles.css`
- `assets/brand/`
- `assets/media/`
- `robots.txt`
- `.htaccess`

Zones, media arrays, and bilingual text live in:

- `src/app.js`
- `const zones = [...]`

CSS/layout/theme/navigation live in:

- `src/styles.css`

Cache-bust query versions live in:

- `index.html`

## Current Zones

Active zones:

- overview
- exterior
- flybridge
- foredeck
- cockpit
- aft_swim_platform
- tender
- saloon
- master_cabin
- forward_vip
- starboard_guest
- port_guest

Do not re-add generic `interior` or `main_deck` routes unless explicitly requested.

## Gallery Logic

Mobile and tablet portrait:

- primary zone media comes from `media`
- secondary button opens `horizontalMedia` if available
- secondary button text is `Horizontal gallery` / `Горизонтальная галерея`

Tablet landscape and desktop:

- primary zone media comes from `horizontalMedia` if available
- secondary button opens `media`
- secondary button text is `Vertical gallery` / `Вертикальная галерея`
- wide horizontal primary media is displayed inside a centered `3:2` viewing window with internal screen margins; do not stretch it to the full viewport edges
- wide horizontal photo navigation buttons are a compact vertical group at the right side of the frame; do not place them back behind the bottom zone tiles

Zones without `horizontalMedia` remain vertical and hide the secondary button.

State remembers image index separately for each `zone + media mode`.

Do not change this behavior without testing mobile portrait, tablet portrait, tablet landscape, and desktop.

## Navigation Rules

Zone navigation is square visual tiles across mobile, tablet, and desktop.

Do not restore:

- old hamburger/popover zone menu for tablet/desktop
- stretched pill buttons
- two-row half-screen tablet menu
- old constructor-like section menu

Selected zone is shown through the active tile state, not by adding a separate large zone-title label.

## Text Rules

When the user supplies text:

- Insert it in source form if they ask to insert it.
- Grammar/punctuation/syntax cleanup is allowed only when clearly requested.
- Do not invent claims, equipment, atmosphere, or marketing language.
- Do not mix old placeholder text with new supplied text.
- Remove duplicate first paragraphs.
- Update English localization after Russian changes.
- Use natural American English for localization, but preserve meaning.

Authored text evidence is fixed in:

- `docs/AUTHORSHIP.md`
- `docs/text-deposit/`

Email delivery of the authorship deposit was confirmed by the owner:

- `docs/text-deposit/EMAIL_DELIVERY_RECORD_2026-06-24.md`

## Media Rules

For zone media:

- vertical/portrait set goes into `media`
- horizontal/landscape set goes into `horizontalMedia`
- source originals stay outside public output
- public files are optimized derivatives only
- keep owner-specified first frame when explicitly requested
- do not duplicate a first frame if it also appears in the folder

For new media:

1. Use only the requested zone/folder.
2. Review composition and crop risk.
3. Generate derivatives.
4. Connect in `src/app.js`.
5. Verify paths.
6. Test responsive gallery behavior.

## Authorship And Email Record

Authorship deposit commit:

- `149b477 Add text authorship deposit`

Deposit files:

- `docs/AUTHORSHIP.md`
- `docs/text-deposit/claudia-z-texts-2026-06-24.pdf`
- `docs/text-deposit/claudia-z-texts-2026-06-24.sha256`
- `docs/text-deposit/SEARCH_UNIQUENESS_AUDIT_2026-06-24.md`

Email record:

- original message id `19efaf7d02647096`
- resend message id `19efafbd80269ffd`
- recipient `a.usov@mail.com`
- owner confirmed both emails were received
- record file `docs/text-deposit/EMAIL_DELIVERY_RECORD_2026-06-24.md`

## Empty Template

Reusable blank template:

- `templates/empty-yacht-presentation/`

Contents:

- `index.html` - hall with Yacht 1-5
- `yacht.html` - reusable blank yacht presentation
- `template.css`
- `template.js`

Rules:

- no Claudia Z texts
- no Claudia Z photos
- no production deployment unless explicitly requested
- zones are placeholders named Zone 1-8

## Deployment Rules

Before deployment:

```bash
npm run check
git diff --check
```

Verify:

- changed public paths exist
- no `.media-source` in public files
- no Drive links in public files
- no docs/template files in deployment set
- `index.html` cache-bust version changed if JS/CSS changed
- noindex remains active
- localization parity
- mobile/tablet/desktop behavior

Deploy only public files:

- `index.html`
- `404.html`
- `robots.txt`
- `.htaccess`
- `site.webmanifest`
- `favicon.ico`
- `apple-touch-icon.png`
- `src/`
- `assets/`

Production FTP path: `/claudia-z.com`.

## If Unsure

Prefer asking a short question before changing:

- text meaning
- zone structure
- first-frame choice
- public deployment scope
- whether a template should become production

For straightforward fixes, implement narrowly, verify, commit, push, and report.
