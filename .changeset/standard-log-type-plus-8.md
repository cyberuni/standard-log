---
'standard-log': patch
---

Inline the `type-plus` helpers and the `StackTraceMeta` type so the CommonJS build no longer depends on the ESM-only `type-plus` and `@just-func/types`.
Both packages are removed from `dependencies`.
