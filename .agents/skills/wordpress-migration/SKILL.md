---
name: wordpress-migration
description: Use when planning or executing migration from old WordPress on Namecheap public_html to the new GitHub-managed premium website.
---

# WordPress Migration

## Hard Rule

Do not delete or replace WordPress before backup and approval.

## Procedure

1. Backup `public_html`.
2. Backup WordPress database.
3. Extract `wp-content/uploads`.
4. Extract useful text and metadata.
5. Build new site outside production.
6. Test on staging/dev.
7. Review on iPhone and iPad.
8. Make final backup.
9. Replace `public_html` only after approval.
10. Verify production and rollback path.

## Output

- Current WordPress state
- Backup plan
- Extracted materials
- New site deployment plan
- Rollback plan
- Risks
