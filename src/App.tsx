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
            colorPrimary: defaultTheme.primaryColor,
          },
          components: {
            Layout: {
              bodyBg: defaultTheme['gray-100'],
              siderBg: defaultTheme['gray-100'],
              headerBg: defaultTheme.white,
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
