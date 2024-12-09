import type { GeneralTheme } from './generalTheme'
import type { ModTheme } from './darkTheme'

export { generalTheme } from './generalTheme'
export { darkTheme } from './darkTheme'

export type Theme = GeneralTheme & ModTheme
export { ModTheme, GeneralTheme }