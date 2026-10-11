import type { LogStore } from './log_store.js'
import { record } from './record.js'
import type { LogMethodNames, StandardLogInstance } from './types.js'

export const ctx: {
	configured?: boolean
	gsl?: { store: LogStore; standardLog: StandardLogInstance<LogMethodNames> }
} = record()
