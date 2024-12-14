import { Flex } from 'antd'
import { useState } from 'react'
import { FaBuilding } from 'react-icons/fa'
import { useNavigate } from 'react-router'

import { CustomButtonStep, StepHeaderContainer, StyledLabel } from './styles'

export function StepsHeader() {
  const [unlockedSteps, setUnlockedSteps] = useState(1)

  const navigate = useNavigate()

  const handleClickStep = (index: number) => {
    navigate(`/itens/${index}`)
  }

  return (
    <StepHeaderContainer gap="3rem">
      {Array.from({ length: 9 }).map((_, index) => (
        <Flex key={index} vertical align="center" justify="center" gap={12}>
          <CustomButtonStep
            type="primary"
            icon={<FaBuilding />}
            size="large"
            disabled={index > unlockedSteps}
            onClick={() => handleClickStep(index + 1)}
          />
          <StyledLabel disabled={index > unlockedSteps}>
            Item {index + 1}
          </StyledLabel>
        </Flex>
      ))}
    </StepHeaderContainer>
  )
}
