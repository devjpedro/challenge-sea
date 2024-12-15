import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'styled-components'

import { Router } from './app/router'
import { queryClient } from './lib/react-query'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
