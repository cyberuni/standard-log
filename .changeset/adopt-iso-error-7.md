---
"standard-log": minor
---

Bump `iso-error` from `^6.0.5` to `^7.0.0`.

`iso-error@7.0.0`'s major came from raising `engines.node` to `>= 20` (needed for
`type-plus@8`'s `unpartial@^1.0.7` dependency) and pinning `type-plus` as a
devDependency — not from an API change. `IsoError` and `ModuleError`, the types
`standard-log` re-exports from `iso-error` in `errors.ts` (and which leak into the
emitted `.d.ts`), are unchanged in shape between `6.0.5` and `7.0.0`, so this ships
as `minor` rather than `major` here, matching the same reasoning used for the
identical bump in `cyberuni/assertron#359`.

This lets consumers of `standard-log` drop a duplicate `iso-error@6` from their
dependency tree now that `iso-error@7` is the only version other parts of the graph
(e.g. `@unional/fixture`) resolve.
