import { record } from './record.js'
import type { ConsoleLike, LogEntry } from './types.js'

export const toInspectLogEntry = (e: LogEntry) => e

export const polyfill: { console?: ConsoleLike } = record()
