import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello World</h1>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}
