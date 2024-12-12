import { Button } from 'antd'
import styled from 'styled-components'

export const CustomButtonStep = styled(Button)`
  width: 56px !important;
  height: 56px !important;

  border-radius: 1rem;

  font-size: 1.5rem;

  box-shadow: ${(props) => props.theme.shadows['shadow-3']};

  &:not(:disabled) {
    border: 2px solid #202020;
  }
`
