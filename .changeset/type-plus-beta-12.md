---
'standard-log': patch
---

Update `type-plus` to `8.0.0-beta.12` and `@just-func/types` to `^0.6.1`.

`type-plus` 8.0.0-beta.12 no longer exports `unpartial` or `reduceKey`, so `standard-log` now depends on `unpartial` directly and uses `reduceByKey`.
