# Current State

Last updated: 2026-06-24

## Status

The current Claudia Z static presentation is implemented, deployed, verified, and considered closed for the present complex task.

Production: `https://claudia-z.com`

Repository: `git@github.com:vetus-nauta/claudia-z.git`

Branch: `main`

Do not touch `/home/alexey/GitHub/Revoyacht`.

## What Exists

The production site is a controlled no-index presentation for Claudia Z / Sunseeker 76.

It includes:

- full-screen media-first welcome hall
- Claudia Z and Sunseeker brand marks
- yacht details glass panel
- dark/light theme
- automatic English/Russian localization
- no visible language switcher
- zone navigation as square visual tiles
- vertical and horizontal gallery logic per viewport
- per-zone details popup
- optimized public media derivatives
- no public search/SEO mechanics
- no booking/contact/pricing flow

## Current Zone Structure

The active zones are defined in `src/app.js` inside `const zones = [...]`.

Current public zones:

- Overview
- Exterior
- Flybridge
- Foredeck
- Cockpit
- Aft Swim Platform
- Tender
- Saloon
- Master Cabin
- Forward VIP
- Starboard Guest
- Port Guest

No standalone generic `interior` or `main_deck` route should be reintroduced unless the owner explicitly asks.

## Gallery Behavior

Mobile and tablet portrait:

- `media` is the primary visible set
- `horizontalMedia` opens from the secondary gallery button when present

Tablet landscape and desktop:

- `horizontalMedia` is the primary visible set when present
- `media` opens from the secondary gallery button
- horizontal primary photos are constrained to a centered `3:2` viewing window so they do not stretch to the screen edges

Zones without `horizontalMedia` stay on `media`, and the secondary gallery button is hidden.

The system remembers image index separately for each `zone + media mode`.

## Text State

Texts are bilingual in `src/app.js`.

Rules:

- Owner-supplied Russian text must not be creatively rewritten unless requested.
- If the user asks to insert text, insert the text as supplied.
- Editorial cleanup means grammar, punctuation, syntax, and sequence only unless broader rewriting is explicitly requested.
- English localization must follow Russian updates before deployment.
- Do not keep stale placeholders in either language.

## Media State

Final media is connected through public derivatives in `assets/media/`.

General rule:

- vertical/portrait sets go in `media`
- horizontal/landscape sets go in `horizontalMedia`
- source originals stay outside public output
- public UI must not open raw original files

## Privacy And Security State

The site is intentionally private/no-index:

- `robots.txt` disallows all
- `index.html` has noindex meta
- production headers include `X-Robots-Tag`
- no sitemap
- no analytics
- no owner identity
- no public contact flow
- no price/booking/rental CTA

Security headers are managed through `.htaccess`.

## Authorship Records

Text authorship evidence exists in:

- `docs/AUTHORSHIP.md`
- `docs/text-deposit/`

The PDF and SHA-256 deposit were emailed to `a.usov@mail.com`.

Owner confirmed both emails were received.

See:

- `docs/text-deposit/EMAIL_DELIVERY_RECORD_2026-06-24.md`

## Reusable Template

An empty future-yacht template exists in:

- `templates/empty-yacht-presentation/`

It is not part of production deployment.

It contains:

- `index.html` hall with Yacht 1-5
- `yacht.html` empty presentation shell
- `template.css`
- `template.js`

The template deliberately contains no Claudia Z photos or authored Claudia Z text.

## Future Work

Future changes may include:

- new photos
- replacement photos
- text changes
- new zones
- reuse of the empty template for another yacht

Every future change should be narrow, verified, committed, pushed, and documented if it changes project rules.
