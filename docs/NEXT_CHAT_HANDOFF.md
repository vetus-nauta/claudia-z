# Next Chat Handoff

Last updated: 2026-06-24

## Project Status

The current Claudia Z presentation project is closed for the present complex task.

Production site: `https://claudia-z.com`

Repository: `git@github.com:vetus-nauta/claudia-z.git`

Branch: `main`

Latest known production/code commit before this documentation closeout: `bdcf224 Add first-party internal analytics`

This handoff itself may be followed by a docs-only commit.

Do not touch `/home/alexey/GitHub/Revoyacht`.

## Current Production State

The production site is a static no-index yacht presentation for Claudia Z / Sunseeker 76.

Core files:

- `index.html`
- `src/app.js`
- `src/styles.css`
- `src/analytics.js`
- `analytics/collect.php`
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
- first-party internal analytics for owner-only operational counts

## Full Functional Checklist

This checklist describes the production behavior that must not be accidentally lost.

Identity and access:

- Claudia Z private yacht presentation for Sunseeker 76.
- Static no-index public presentation at `https://claudia-z.com`.
- No public sales funnel, booking path, price, owner identity, contact form, or inquiry CTA.
- No sitemap and no SEO-growth mechanics.
- `robots.txt`, meta robots, and `X-Robots-Tag` headers are all active.
- Security headers are managed by `.htaccess`, including CSP, HSTS, frame denial, no-referrer, and nosniff.

Localization:

- Automatic language detection only.
- Russian browser/user language shows Russian.
- English and all other languages fall back to English.
- No visible language switcher.
- One active language is rendered into the UI; do not add duplicate visible RU/EN blocks.
- Any changed Russian text must receive matching English localization before deployment.
- Owner-supplied text must be inserted in source form unless editing/localization is explicitly requested.

Themes and branding:

- Dark/light theme is supported.
- Theme choice is stored in `localStorage`.
- Theme switcher remains visible on tablet/desktop when detail sheets are open.
- Claudia Z logo appears on the welcome screen.
- Sunseeker mark appears on the stage and inside yacht/details panels with light/dark variants.
- Do not place Sunseeker in a white card or oversized logo treatment.

Welcome and yacht details:

- First screen is a media-first presentation, not a marketing landing page.
- Overview/welcome uses concise yacht copy, key facts, and brand marks.
- Yacht details open in a glass-style panel.
- When yacht/zone details are open on tablet/desktop, other controls remain visible.
- On mobile, nonessential controls may hide behind the detail sheet for space.

Zone system:

- Active zones live in `src/app.js` under `const zones = [...]`.
- Current zones are `overview`, `exterior`, `flybridge`, `foredeck`, `cockpit`, `aft_swim_platform`, `tender`, `saloon`, `master_cabin`, `forward_vip`, `starboard_guest`, `port_guest`.
- Do not re-add generic `interior` or `main_deck` routes unless the owner explicitly asks.
- Each zone has bilingual `en` and `ru` objects.
- Zone tile labels and active states are generated from the active language.

Zone navigation:

- Zone navigation uses square visual tiles across mobile, tablet, and desktop.
- The selected zone is shown by the active tile state.
- Do not restore the old hamburger/popover zone menu on tablet/desktop.
- Do not turn tiles into stretched pills.
- Do not add a separate large bottom-left current-zone label.
- Zone tiles are centered/scrollable where needed and must not push photos out of position.

Primary media behavior:

- Portrait/vertical media goes in `media`.
- Landscape/horizontal media goes in `horizontalMedia`.
- Mobile and tablet portrait use `media` as the primary zone gallery.
- Tablet landscape and desktop use `horizontalMedia` as the primary gallery when it exists.
- Zones without `horizontalMedia` stay on `media`.
- The site remembers image index separately for each `zone + media mode`.
- Orientation/viewport changes preserve the current zone and switch to the correct media set.

Wide-screen media framing:

- Wide horizontal primary media is constrained to a centered `3:2` viewing window.
- Do not stretch horizontal photos to full viewport edges.
- Wide vertical-only zones such as Tender use a centered `3:4` portrait viewing window.
- Do not let vertical wide photos fall back to full-screen cover.
- Photo next/previous/expand controls sit as a compact vertical group on the right in wide zone mode.
- Those controls must not disappear behind the bottom zone rail.
- Gallery counter numbers must remain horizontal, not rotated sideways.

Secondary galleries:

- When primary is vertical, the secondary button opens horizontal media and says `Horizontal gallery` / `Горизонтальная галерея`.
- When primary is horizontal, the secondary button opens vertical media and says `Vertical gallery` / `Вертикальная галерея`.
- Secondary gallery uses the same clean full-screen gallery behavior.
- Secondary gallery captions show the zone name under horizontal photos.

Touch and fullscreen behavior:

- Normal photo taps do not open raw source images.
- Fullscreen/gallery viewer is frameless and controlled by the site.
- Swipe/drag is supported for photo navigation.
- Vertical swipe/pull-to-refresh interference is suppressed where needed.
- Pinch/zoom support exists in gallery mode.
- Browser fullscreen is requested for gallery viewers where supported, but cannot be guaranteed on all mobile browsers.
- Mobile landscape is discouraged/handled so portrait viewing remains the intended phone experience.

Detail sheets:

- Detail sheet title lives in `.sheet__title` / `#detailsSheetTitle`.
- Close control is `.sheet__close`, a readable text cross with no circular button background.
- Title and close cross sit on the same row.
- Description body starts with `#zoneCopy` and `#zoneDetail`.
- Do not restore a separate body heading above the text.
- Zone detail copy must not duplicate the first `copy` sentence at the start of `detail`.
- Detail text uses a readable glass panel with internal scrolling, not a long page-length text block.

Photo/media pipeline:

- Public media files are optimized derivatives in `assets/media/<zone>/`.
- Source originals stay outside public output, typically in ignored `.media-source/`.
- Public UI must not expose Google Drive links or source folders.
- Preserve owner-specified first/opening frame when explicitly requested.
- Do not duplicate a first frame if it appears both as first file and inside a folder.
- New zone photos must be connected narrowly to the target zone only.

Internal analytics:

- Approved only as first-party internal operational accounting.
- Browser script: `src/analytics.js`.
- Collector: `analytics/collect.php`.
- Private log target: `/private/claudia-z-analytics/events-YYYY-MM.jsonl`.
- Local report script: `node tools/analytics-summary.mjs <events-file.jsonl>`.
- Counts unique browser visitors, sessions, repeat visits, zone/photo interactions, details/gallery/theme events, and active time heartbeat.
- No visual counter.
- No third-party analytics, pixels, Google Analytics, Yandex Metrica, Meta/Facebook pixel, or public tracking scripts.
- No raw public IP storage.
- Do not deploy private log files.

Reusable template:

- Empty template lives in `templates/empty-yacht-presentation/`.
- It is not production.
- It has a hall with Yacht 1-5 and a reusable blank yacht template.
- It must not contain Claudia Z text or photos.
- Do not publish the template unless explicitly requested.

Git and deployment discipline:

- GitHub `main` is the source of truth.
- Production FTP `/claudia-z.com` is only a publication target.
- Commit and push before FTP deployment.
- Deploy only public files.
- Never deploy `docs/`, `templates/`, `.media-source/`, source originals, private notes, authorship evidence, or analytics logs.
- Bump query-string versions in `index.html` when JS/CSS changes.
- After deployment, compare live hashes for changed public files.
- For PHP files, HTTPS returns executed output; verify source via FTP hash and behavior via POST/GET checks.

## Do Not Break

- Do not convert the project back into a public sales/SEO website.
- Do not add sitemap, third-party analytics, public counters, contact forms, booking/rent CTAs, prices, owner identity, or public inquiry paths.
- Do not remove the approved first-party internal analytics without owner confirmation.
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
- photo next/previous/expand controls sit as a vertical group on the right in wide zone mode, separate from the bottom zone-tile rail

If a zone has no `horizontalMedia`, it stays vertical and the secondary button is hidden.

On wide screens, vertical-only zones such as `tender` are framed in a centered `3:4` portrait window. Do not let them expand to full-screen cover.

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

## Detail Sheet UI Rule

Zone/yacht description windows use a header row:

- title is in `.sheet__title` / `#detailsSheetTitle`
- close control is `.sheet__close`, a readable text cross with no circular button background
- description body starts with `#zoneCopy` and `#zoneDetail`; do not restore a separate body heading above the text
- if copy changes, keep RU and EN synchronized and avoid duplicating the first `copy` sentence at the start of `detail`

## Internal Analytics

The site has owner-approved first-party internal analytics:

- public collector: `analytics/collect.php`
- browser script: `src/analytics.js`
- private server log target: `/private/claudia-z-analytics/events-YYYY-MM.jsonl`
- local report script: `node tools/analytics-summary.mjs <events-file.jsonl>`

Rules:

- no visual counter on the site
- no third-party analytics or pixels
- no raw public IP storage
- no report/admin page on the public site unless explicitly requested later
- deploy the collector and analytics JS with the public site, but never deploy private log files

## Verification Before Any Future Deployment

Run:

```bash
npm run check
php -l analytics/collect.php
git diff --check
```

Then verify:

- no docs/template/private files are in the deployment list
- no Drive links or `.media-source` references in public files
- `index.html` cache-bust version is bumped if JS/CSS changed
- `analytics/collect.php` is deployed if analytics code changes
- analytics logs remain outside public root and are not committed/deployed
- noindex meta/robots/header behavior remains
- CSP still includes `connect-src 'self'` for first-party analytics
- mobile portrait, tablet portrait, tablet landscape, desktop
- `ru` and `en` semantic parity
- if collector changes, test GET returns `405`, same-origin POST returns `ok`, and foreign `Origin` returns `403`

Deployment target remains FTP path `/claudia-z.com`.
