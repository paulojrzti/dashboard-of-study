import 'styled-components'
import { Theme } from './theme' // caminho relativo à interface

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    __brand?: 'theme'
  }
}
