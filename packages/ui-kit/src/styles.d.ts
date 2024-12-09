import type { Theme } from './style'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}
