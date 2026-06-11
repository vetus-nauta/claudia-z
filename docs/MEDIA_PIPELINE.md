# Media Pipeline

## Goal

Turn existing yacht photos and videos into a premium, fast, mobile-first media system.

Media will be requested and received in owner-provided Google Drive folders/links.

Do not assume assets exist until the owner provides folders or links.

## Classification

Classify media by:

- general plans / overview
- exterior profile
- exterior details
- interior overview
- swim platform
- cockpit
- flybridge
- bow area
- foredeck
- main deck
- saloon
- galley
- helm
- master cabin
- VIP cabin
- guest cabins
- bathrooms
- detail shots
- lifestyle
- sea/coastline
- video overview
- hero video
- vertical mobile clips
- horizontal cinematic clips

## Initial Requested Folder Logic

When requesting media from the owner, prefer clear folders:

- `01_general_plans`
- `02_exterior`
- `03_interior`
- `04_flybridge`
- `05_main_deck`
- `06_foredeck`
- `07_cockpit`
- `08_swim_platform`
- `09_video`
- `10_details`

Folder names may vary, but agents must map them back to stable yacht zones.

## Metadata Per Asset

For every selected asset, define:

- source filename
- source folder/link
- presentation/private use
- yacht zone
- orientation
- resolution
- intended screen
- mobile crop
- tablet crop
- desktop crop
- alt text
- loading priority
- compression target
- poster image for video

## Performance Rules

- Use optimized images.
- Avoid heavy autoplay on mobile.
- Always provide video poster image.
- Never autoplay sound.
- Prepare mobile and tablet crops.
- Use lazy loading except critical hero media.
- Keep first screen fast.

## Output Expected From Agents

When working with media, produce:

1. Asset classification table
2. Recommended use
3. Missing media list
4. Crop requirements
5. Performance risks
6. Implementation notes
