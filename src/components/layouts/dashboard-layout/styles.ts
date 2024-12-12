import { Layout } from 'antd'
import styled from 'styled-components'

export const ContentLayout = styled(Layout)`
  padding: 2rem;
`

export const CustomSider = styled(Layout.Sider)`
  position: relative;

  height: 100vh;

  width: 60px !important;
  max-width: 60px !important;
  min-width: 60px !important;

  flex: auto !important;
`
