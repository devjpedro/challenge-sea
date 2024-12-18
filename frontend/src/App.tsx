import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import { QueryClientProvider } from 'react-query'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Router } from './app/router'
import { queryClient } from './lib/react-query'
import { persistor, store } from './store'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  )
}
