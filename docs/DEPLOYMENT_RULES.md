# Deployment Rules

## Source of Truth

GitHub is the source of truth.
Namecheap `public_html` is the publication target, not the project memory.

## Deployment Procedure

1. Build and test in GitHub/dev/staging.
2. Review on smartphone and tablet.
3. Backup current production files.
4. Backup database if WordPress still exists.
5. Deploy only approved build.
6. Verify domain and HTTPS.
7. Verify no-index controls: robots, meta robots, sitemap absence, and headers where available.
8. Verify media and forms.
9. Keep rollback backup.

## Do Not

- Do not hot-edit production as the main workflow.
- Do not overwrite without backup.
- Do not deploy secrets.
- Do not deploy public indexing behavior.
- Do not publish a sitemap.
- Do not leave old WordPress admin exposed if WordPress is removed.

## Publication Target

Likely production target:

```text
Namecheap hosting / public_html
```

But actual server path must be discovered and recorded before deployment.
