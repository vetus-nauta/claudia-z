---
name: safe-patch
description: Use for any code or file modification. Enforces inspect-first, explain-first, small reversible patches, and verification.
---

# Safe Patch

## Rules

1. Inspect current files before editing.
2. Identify exact files affected.
3. Explain intended change.
4. Ask `Пишем?` unless user explicitly requested immediate implementation.
5. Make small targeted changes.
6. Do not replace large files blindly.
7. Do not remove working behavior unless explicitly requested.
8. Do not commit secrets.
9. Run available checks.
10. Report changed files and verification result.

## Output Before Patch

- Diagnosis
- Files likely affected
- Risk level
- Proposed patch
- Verification plan
- `Пишем?`

## Output After Patch

- Files changed
- What changed
- Checks run
- Remaining risks
