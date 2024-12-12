import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'

import { DashboardLayout } from './components/layouts/dashboard-layout'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ConfigProvider
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
        <DashboardLayout />
      </ConfigProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
