import { Button, Typography } from 'antd'
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
export const StyledLabel = styled(Typography.Text)`
  font-weight: 500;

  &:not(.ant-typography-disabled) {
    color: ${(props) => props.theme.colors.primaryColor} !important;
  }
`
