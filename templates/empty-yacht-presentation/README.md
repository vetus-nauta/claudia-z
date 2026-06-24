# Empty Yacht Presentation Template

This is a standalone clean template derived from the approved yacht-presentation discipline.

It is intentionally separate from any production yacht site.

Use it when a future yacht card needs the same interaction structure without carrying existing project text, photos, or private content.

## Files

- `index.html` - hall with five yacht choices.
- `yacht.html` - one reusable empty yacht presentation template.
- `template.css` - standalone visual system.
- `template.js` - standalone zone/gallery/theme behavior.

## Rules

- Do not copy authored production text into this template.
- Do not copy production photos into this template.
- Replace placeholder zones only through the `zones` array in `template.js`.
- Replace yacht cards only through the `yachts` array in `template.js`.
- Keep the hall and yacht template generic until a new project receives approved text and media.
- If this template is published later, repeat the same noindex/security/deployment audit used for the production site.

## Local Use

Open `index.html` directly or serve this folder with a static server.

The hall links to:

- `yacht.html?yacht=1`
- `yacht.html?yacht=2`
- `yacht.html?yacht=3`
- `yacht.html?yacht=4`
- `yacht.html?yacht=5`

All five links open the same empty template with a different yacht number.
