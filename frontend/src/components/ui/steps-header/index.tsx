import { Flex } from 'antd'
import { FaBuilding } from 'react-icons/fa'
import { useNavigate } from 'react-router'

import { useSteps } from '../../../hooks/useSteps'
import { CustomButtonStep, StepHeaderContainer, StyledLabel } from './styles'

export function StepsHeader() {
  const { steps, setActiveStep, activeStepId, completeStep, isStepCompleted } =
    useSteps()
  const navigate = useNavigate()

  const handleClickStep = (stepId: number) => {
    setActiveStep(stepId)
    completeStep(stepId)
    navigate(`/itens/${stepId}`)
  }

  isStepCompleted(2)

  return (
    <StepHeaderContainer gap="3rem">
      {steps.map((step) => (
        <Flex key={step.id} vertical align="center" justify="center" gap={12}>
          <CustomButtonStep
            type="primary"
            icon={<FaBuilding />}
            size="large"
            disabled={activeStepId < step.id}
            onClick={() => handleClickStep(step.id)}
            selected={activeStepId === step.id}
          />
          <StyledLabel disabled={activeStepId < step.id}>
            Item {step.id}
          </StyledLabel>
        </Flex>
      ))}
    </StepHeaderContainer>
  )
}
