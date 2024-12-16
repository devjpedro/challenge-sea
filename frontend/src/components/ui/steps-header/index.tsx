import { Flex } from 'antd'
import { FaBuilding } from 'react-icons/fa'
import { useNavigate } from 'react-router'

import { useSteps } from '../../../hooks/useSteps'
import {
  CustomButtonStep,
  StepCompleteLabel,
  StepHeaderContainer,
  StyledLabel,
} from './styles'

export function StepsHeader() {
  const { steps, setActiveStep, activeStepId, isStepCompleted } = useSteps()
  const navigate = useNavigate()

  const handleClickStep = (stepId: number) => {
    if (isStepCompleted(stepId) || stepId <= activeStepId) {
      setActiveStep(stepId)
      navigate(`/funcionarios/itens/${stepId}`)
    }
  }

  return (
    <StepHeaderContainer gap="3rem">
      {steps.map((step) => (
        <Flex key={step.id} vertical align="center" justify="center" gap={8}>
          <CustomButtonStep
            type="primary"
            icon={<FaBuilding />}
            size="large"
            disabled={!isStepCompleted(step.id) && step.id > activeStepId}
            onClick={() => handleClickStep(step.id)}
            selected={activeStepId === step.id}
          />
          <Flex vertical align="center" justify="center" gap={4}>
            <StyledLabel
              disabled={!isStepCompleted(step.id) && step.id > activeStepId}
            >
              Item {step.id}
            </StyledLabel>
            <StepCompleteLabel isComplete={isStepCompleted(step.id)}>
              Concluído
            </StepCompleteLabel>
          </Flex>
        </Flex>
      ))}
    </StepHeaderContainer>
  )
}
