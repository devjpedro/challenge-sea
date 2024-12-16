import { Button, Flex, Typography } from 'antd'
import styled from 'styled-components'

export const StepHeaderContainer = styled(Flex)`
  overflow-x: auto;
  overflow-y: hidden;
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
  line-height: 1;
  font-size: 0.875rem;

  &:not(.ant-typography-disabled) {
    color: ${(props) => props.theme.colors.primaryColor} !important;
  }
`

interface StepCompleteLabelProps {
  isComplete: boolean
}

export const StepCompleteLabel = styled(
  Typography.Text,
)<StepCompleteLabelProps>`
  line-height: 1;

  font-weight: 500;
  font-size: 0.875rem;

  opacity: ${(props) => (props.isComplete ? 1 : 0)};
  visibility: ${(props) => (props.isComplete ? 'visible' : 'hidden')};

  color: ${(props) => props.theme.colors['black-500']};
`
