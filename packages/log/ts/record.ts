/**
 * Creates a prototype-less object, optionally seeded with `value`.
 *
 * Inlined from `type-plus` so the CJS build does not `require()` the ESM-only `type-plus`.
 */
export function record<R extends Record<any, any>>(value?: R): R {
	const r = Object.create(null)
	return value ? Object.assign(r, value) : r
}
