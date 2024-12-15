import { Button } from 'antd'
import styled from 'styled-components'

export const TriggerMenu = styled(Button)`
  border: 0;
  background: transparent !important;
  position: absolute;
  top: 1rem;
  right: 0.5rem;

  @media (min-width: 769px) {
    display: none;
  }
`

export const NavItemBtn = styled(Button)`
  width: 100%;
`
