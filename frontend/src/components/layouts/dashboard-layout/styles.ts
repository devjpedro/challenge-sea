import { Layout } from 'antd'
import styled from 'styled-components'

export const CustomSider = styled(Layout.Sider)`
  position: fixed;

  height: 48rem;

  width: 60px !important;
  max-width: 60px !important;
  min-width: 60px !important;

  flex: auto !important;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CustomImageBg = styled.img`
  position: fixed;
  bottom: -5.5rem;
  right: -5.5rem;
`
