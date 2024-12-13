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

export const CustomHeader = styled(Layout.Header)`
  padding: 1.5rem 2rem !important;
  height: auto !important;
  box-shadow: ${(props) => props.theme.shadows['shadow-1']};
  border-radius: 16px;
`

export const CustomContent = styled(Layout.Content)`
  margin-top: 2rem;
  display: flex;
  align-items: start;
  gap: 2rem;
`
