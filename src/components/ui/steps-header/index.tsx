import { Flex } from 'antd'
import { useState } from 'react'
import { FaBuilding } from 'react-icons/fa'

import { CustomButtonStep, StepHeaderContainer, StyledLabel } from './styles'

export function StepsHeader() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <StepHeaderContainer gap="3rem">
      {Array.from({ length: 9 }).map((_, index) => (
        <Flex key={index} vertical align="center" justify="center" gap={12}>
          <CustomButtonStep
            type="primary"
            icon={<FaBuilding />}
            size="large"
            disabled={index > activeStep}
          />
          <StyledLabel disabled={index > activeStep}>
            Item {index + 1}
          </StyledLabel>
        </Flex>
      ))}
    </StepHeaderContainer>
  )
}
