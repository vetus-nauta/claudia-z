# Project Map

This file describes the intended repository structure.

```text
/
  AGENTS.md
  .agent-start.md
  README_FIRST.md

  docs/
    PROJECT_BRIEF.md
    CURRENT_STATE.md
    DECISIONS.md
    NEXT_CHAT_HANDOFF.md
    PROJECT_MAP.md
    CONTENT_RULES.md
    SECURITY_PRIVACY_POLICY.md
    WORDPRESS_MIGRATION.md
    MEDIA_PIPELINE.md
    THREE_D_CAPTURE_GUIDE.md
    BACKEND_MESSENGER_PLAN.md
    DEPLOYMENT_RULES.md
    ACCEPTANCE_CRITERIA.md
    AUTHORSHIP.md
    text-deposit/
      README.md
      EMAIL_DELIVERY_RECORD_2026-06-24.md
      SEARCH_UNIQUENESS_AUDIT_2026-06-24.md
      claudia-z-texts-2026-06-24.*

  templates/
    empty-yacht-presentation/
      README.md
      index.html
      yacht.html
      template.css
      template.js

  .agents/
    skills/
      discovery-interview/
      safe-patch/
      premium-yacht-ux/
      editorial-copy-chief/
      css-architecture-guard/
      mobile-first-audit/
      content-legal-guard/
      media-extraction-pipeline/
      wordpress-migration/
      privacy-security-review/
      messenger-backend-architecture/
      three-d-guide-preparation/
      handoff-md/

  tasks/
    TASK_TEMPLATE.md
    CODEX_PROMPTS.md

  .github/
    pull_request_template.md
    ISSUE_TEMPLATE/
      feature_task.md
      bug_report.md
```

## Future App Structure

The future app structure may be decided later. Do not create a framework before architecture approval.

Possible options:

- static premium HTML/CSS/JS for first release
- Astro/Next.js for media-rich presentation
- Next.js + backend for private panel
- separate controlled presentation layer and private backend subdomain

Default first safe approach: controlled no-index presentation first, backend later.

## Current Production Structure

The production Claudia Z presentation is currently static:

- `index.html`
- `src/app.js`
- `src/styles.css`
- `assets/brand/`
- `assets/media/`
- `robots.txt`
- `.htaccess`

Do not deploy `docs/`, `templates/`, `.media-source/`, or source/private files.

## Empty Template

The reusable blank site shell lives in `templates/empty-yacht-presentation/`.

It is intentionally not connected to production.

It includes a hall with Yacht 1-5 and one reusable empty yacht template with placeholder zones.
