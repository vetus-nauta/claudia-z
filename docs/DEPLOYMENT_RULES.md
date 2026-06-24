# Deployment Rules

## Source of Truth

GitHub is the source of truth.
Namecheap `public_html` is the publication target, not the project memory.

## Deployment Procedure

1. Build and test locally from `/home/alexey/GitHub/claudia-z`.
2. Run `npm run check`.
3. Verify all `localMedia` and `localGalleryMedia` paths exist.
4. Verify public files do not contain Drive links or `.media-source` paths.
5. Verify no-index controls: `robots.txt`, meta robots, sitemap absence, and `X-Robots-Tag`.
6. Verify the changed zones in a browser before deployment.
7. Commit and push to GitHub before FTP upload.
8. Deploy only public files: `index.html`, `404.html`, `robots.txt`, `.htaccess`, `site.webmanifest`, `favicon.ico`, `apple-touch-icon.png`, `src/`, `assets/`, `analytics/`.
9. Do not deploy `docs/`, `templates/`, `.media-source/`, source exports, temporary test folders, private notes, or authorship evidence files.
10. After FTP upload, compare live hashes for changed public files.
11. Smoke-test the live site on HTTPS.
12. Keep the previous Git commit hash as the rollback point.

## Rollback Procedure

FTP has no clean transactional deploy. Rollback is Git-driven:

1. Identify the last good commit.
2. Check out or archive the public files from that commit.
3. Upload the last-good public files back to the same server paths.
4. Re-run live hash checks for `index.html`, `src/app.js`, `src/styles.css`, and changed media.
5. Re-run the live browser smoke test.

For large media releases, keep the previous live media files on the server unless the replacement has passed live hash checks. Delete stale media only when it has been intentionally superseded.

## Current Static Deployment Baseline

- `index.html` and `404.html` are `noindex` and should not be cached.
- CSS and JS are loaded with query-string versions from HTML.
- Static assets may use long cache headers when their filename or HTML query version changes.
- `favicon.ico`, `apple-touch-icon.png`, and `site.webmanifest` are part of the public root.
- `analytics/collect.php` is the approved first-party internal analytics collector; logs must stay outside the public root.
- Security headers live in `.htaccess`: noindex, nosniff, no-referrer, frame deny, HSTS, permissions policy, and CSP.

## Do Not

- Do not hot-edit production as the main workflow.
- Do not overwrite without backup.
- Do not deploy secrets.
- Do not deploy the empty template folder unless the owner explicitly requests a separate template publication.
- Do not deploy authorship/evidence documents.
- Do not deploy public indexing behavior.
- Do not publish a sitemap.
- Do not leave old WordPress admin exposed if WordPress is removed.

## Publication Target

Likely production target:

```text
Namecheap hosting / claudia-z.com
```

Actual FTP path used in deployment: `/claudia-z.com`.
