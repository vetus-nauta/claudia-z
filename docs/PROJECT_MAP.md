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
    PROJECT_MAP.md
    CONTENT_RULES.md
    SECURITY_PRIVACY_POLICY.md
    WORDPRESS_MIGRATION.md
    MEDIA_PIPELINE.md
    THREE_D_CAPTURE_GUIDE.md
    BACKEND_MESSENGER_PLAN.md
    DEPLOYMENT_RULES.md
    ACCEPTANCE_CRITERIA.md

  .agents/
    skills/
      discovery-interview/
      safe-patch/
      premium-yacht-ux/
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
- separate static public layer and private backend subdomain

Default first safe approach: public presentation first, backend later.
