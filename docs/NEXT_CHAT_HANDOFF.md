# Next Chat Handoff

Last updated: 2026-06-24

## Project Status

The current Claudia Z presentation project is closed for the present complex task.

Production site: `https://claudia-z.com`

Repository: `git@github.com:vetus-nauta/claudia-z.git`

Branch: `main`

Latest known pushed commit before this handoff update: `149b477 Add text authorship deposit`

Do not touch `/home/alexey/GitHub/Revoyacht`.

## Current Production State

The production site is a static no-index yacht presentation for Claudia Z / Sunseeker 76.

Core files:

- `index.html`
- `src/app.js`
- `src/styles.css`
- `assets/brand/`
- `assets/media/`

The site has:

- automatic `ru` / `en` localization
- no visible language switcher
- dark/light theme
- noindex through meta, robots, and headers
- zone media galleries
- vertical mobile/tablet portrait primary galleries
- horizontal tablet-landscape/desktop primary galleries when `horizontalMedia` exists
- secondary per-zone gallery button that switches between vertical and horizontal sets
- separate zone index memory for vertical and horizontal media modes
- square zone navigation tiles across mobile, tablet, and desktop
- disabled direct source-image opening from normal photo taps
- author/text deposit records in `docs/text-deposit/`

## Do Not Break

- Do not convert the project back into a public sales/SEO website.
- Do not add sitemap, analytics, contact forms, booking/rent CTAs, prices, owner identity, or public inquiry paths.
- Do not deploy `docs/`, `templates/`, `.media-source/`, or source/private files.
- Do not rewrite owner-supplied text unless explicitly asked.
- If the user asks to insert text, insert the supplied text in source form. Editing means punctuation/grammar only unless the user asks for rewriting or localization.
- When Russian text changes, update English localization before deployment.
- Do not leave stale English copy after Russian copy changes.
- Do not change gallery mechanics without testing mobile, tablet portrait, tablet landscape, and desktop.
- Do not restore the old hamburger/popover zone menu for tablet/desktop unless explicitly requested.
- Do not make zone tiles stretched pills; they should remain square visual tiles.
- Do not use real Claudia Z text or photos in the empty template.

## Where To Edit

Zone definitions, text, media arrays:

- `src/app.js`
- Look for `const zones = [...]`.
- Each zone has:
  - `id`
  - `media` for vertical/main mobile and portrait set
  - optional `horizontalMedia` for tablet-landscape/desktop set
  - `en`
  - `ru`

Layout and responsive rules:

- `src/styles.css`

HTML shell, cache-bust query versions:

- `index.html`

Public media derivatives:

- `assets/media/<zone>/`

Brand assets:

- `assets/brand/`

Project memory:

- `docs/ACTIVE_CONTEXT.md`
- `docs/CURRENT_STATE.md`
- `docs/NEXT_CHAT_HANDOFF.md`
- `docs/MEDIA_PIPELINE.md`
- `docs/CONTENT_RULES.md`

Authorship and text evidence:

- `docs/AUTHORSHIP.md`
- `docs/text-deposit/`

Reusable empty template:

- `templates/empty-yacht-presentation/`

## Adding Or Changing Text

Discipline:

1. Identify the target zone in `src/app.js`.
2. Insert owner text as supplied if requested.
3. Preserve paragraph meaning and order unless the user explicitly asks for editing.
4. If editing is requested, fix grammar, punctuation, sentence order, and readability without inventing new claims.
5. Update both `ru` and `en` sides.
6. Check for duplicate first paragraphs or stale placeholder text.
7. Run `npm run check`.
8. Commit and push.

## Adding Or Changing Photos

Discipline:

1. Use the target zone only.
2. Keep originals outside public output.
3. Create optimized derivatives in `assets/media/<zone>/`.
4. Put vertical iPhone/portrait set into `media`.
5. Put horizontal set into `horizontalMedia`.
6. Preserve first/opening frames when the owner says not to change them.
7. Verify that stage/fullscreen behavior still works.
8. Run `npm run check`.
9. Commit and push.

## Current Gallery Rule

Mobile and tablet portrait:

- primary zone gallery uses `media`
- secondary button opens `horizontalMedia` if present
- button text: `Горизонтальная галерея` / `Horizontal gallery`

Tablet landscape and desktop:

- primary zone gallery uses `horizontalMedia` when present
- secondary button opens `media`
- button text: `Вертикальная галерея` / `Vertical gallery`
- primary horizontal media is intentionally framed in a centered `3:2` window with margins; do not revert it to full-viewport `cover`

If a zone has no `horizontalMedia`, it stays vertical and the secondary button is hidden.

## Authorship Deposit

Text authorship was fixed in GitHub:

- commit `149b477 Add text authorship deposit`
- `docs/AUTHORSHIP.md`
- `docs/text-deposit/claudia-z-texts-2026-06-24.pdf`
- `docs/text-deposit/claudia-z-texts-2026-06-24.sha256`
- `docs/text-deposit/SEARCH_UNIQUENESS_AUDIT_2026-06-24.md`

Email delivery was later confirmed by the owner:

- original Gmail message id: `19efaf7d02647096`
- resend Gmail message id: `19efafbd80269ffd`
- recipient: `a.usov@mail.com`
- owner confirmed both messages were received
- record file: `docs/text-deposit/EMAIL_DELIVERY_RECORD_2026-06-24.md`

## Empty Template

A generic reusable empty template exists in:

- `templates/empty-yacht-presentation/`

It has:

- hall page with Yacht 1-5
- one reusable empty yacht template
- zones named Zone 1-8
- no Claudia Z text
- no Claudia Z photos
- no production deployment link

Use it as a starting shell for future yacht cards only after copying/adapting it intentionally.

## Verification Before Any Future Deployment

Run:

```bash
npm run check
git diff --check
```

Then verify:

- no docs/template/private files are in the deployment list
- no Drive links or `.media-source` references in public files
- `index.html` cache-bust version is bumped if JS/CSS changed
- noindex meta/robots/header behavior remains
- mobile portrait, tablet portrait, tablet landscape, desktop
- `ru` and `en` semantic parity

Deployment target remains FTP path `/claudia-z.com`.
