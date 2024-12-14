import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { Router } from './app/router'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ConfigProvider
          locale={ptBR}
          theme={{
            token: {
              colorPrimary: defaultTheme.colors.primaryColor,
            },
            components: {
              Layout: {
                bodyBg: defaultTheme.colors['gray-100'],
                siderBg: defaultTheme.colors['gray-100'],
                headerBg: defaultTheme.colors.white,
              },
            },
          }}
        >
          <Router />
        </ConfigProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
