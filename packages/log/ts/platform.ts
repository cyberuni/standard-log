import { inspect } from 'node:util'
import { record } from './record.js'
import type { ConsoleLike, LogEntry } from './types.js'

export const toInspectLogEntry = (e: LogEntry) => (
	(e.args = e.args.map(value => (typeof value === 'object' && value !== null ? inspect(value) : value))), e
)

export const polyfill: { console?: ConsoleLike } = record()
