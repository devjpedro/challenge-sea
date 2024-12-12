import 'styled-components'

import type { defaultTheme } from '../styles/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends ThemeType {}
}
