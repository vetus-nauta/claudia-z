# WordPress to New Site Migration

## Goal

Replace the old WordPress website with a new premium presentation website only after safe extraction, build, review, backup, and approval.

## Procedure

1. Backup current `public_html`.
2. Backup WordPress database.
3. Extract media from `wp-content/uploads`.
4. Extract page text and useful SEO metadata.
5. Build the new project separately in GitHub/dev.
6. Classify and optimize media.
7. Test new website on staging/dev URL.
8. Review on iPhone and iPad.
9. Create final pre-replacement backup.
10. Clear old WordPress files from `public_html` only after approval.
11. Upload/deploy new site to `public_html`.
12. Verify domain, HTTPS, media, forms, redirects, and mobile layout.
13. Keep rollback archive.

## Do Not

- Do not delete WordPress first.
- Do not edit production blindly.
- Do not lose `wp-content/uploads`.
- Do not replace site without a rollback plan.
- Do not keep old WordPress admin exposed if no longer used.

## Important WordPress Sources

Typical useful paths:

```text
public_html/wp-content/uploads/
public_html/wp-content/themes/
public_html/wp-content/plugins/
```

The main asset source is usually:

```text
wp-content/uploads
```
