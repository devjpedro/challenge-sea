import { Flex } from 'antd'
import { useState } from 'react'
import { FaBuilding } from 'react-icons/fa'

import { CustomButtonStep } from './styles'

export function StepsHeader() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Flex gap="3rem">
      {Array.from({ length: 9 }).map((_, index) => (
        <CustomButtonStep
          type="primary"
          key={index}
          icon={<FaBuilding />}
          size="large"
          disabled={index > activeStep}
        />
      ))}
    </Flex>
  )
}
