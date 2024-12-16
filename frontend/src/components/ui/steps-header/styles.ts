import { Button, Flex, Typography } from 'antd'
import styled from 'styled-components'

export const StepHeaderContainer = styled(Flex)`
  overflow-x: auto;
  padding: 0 0.75rem;
`

interface CustomButtonStepProps {
  selected: boolean
}

export const CustomButtonStep = styled(Button)<CustomButtonStepProps>`
  width: 56px !important;
  height: 56px !important;

  border-radius: 1rem;

  font-size: 1.5rem;

  box-shadow: ${(props) => props.theme.shadows['shadow-3']};

  &:not(:disabled) {
    border: 2px solid ${(props) => (props.selected ? '#202020' : 'transparent')};
  }
`

export const StyledLabel = styled(Typography.Text)`
  font-weight: 500;

  &:not(.ant-typography-disabled) {
    color: ${(props) => props.theme.colors.primaryColor} !important;
  }
`
