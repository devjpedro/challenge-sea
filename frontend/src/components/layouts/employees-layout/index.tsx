import { Flex, message } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { useSteps } from '../../../hooks/useSteps'
import { SideContent } from '../../ui/side-content'
import { StepsHeader } from '../../ui/steps-header'
import { ContentLayout, CustomContent, CustomHeader, StepBtn } from './styles'

export function EmployeesLayout() {
  const {
    steps,
    isStepCompleted,
    goToNextStep,
    activeStepId,
    completeStep,
    uncompleteStep,
    goToPreviousStep,
  } = useSteps()

  const location = useLocation()
  const navigate = useNavigate()

  const isStepOne = location.pathname.startsWith('/funcionarios/itens/1')

  const activeLastStep = activeStepId === steps.length

  const handleClickNextStep = () => {
    goToNextStep()
    completeStep(activeStepId)
    navigate(`/funcionarios/itens/${activeStepId + 1}`)
  }

  const handlePrevNextStep = () => {
    goToPreviousStep()
    uncompleteStep(activeStepId)
    navigate(`/funcionarios/itens/${activeStepId - 1}`)
  }

  const handleCheckCompleted = () => {
    completeStep(activeStepId)
    message.success('Todas as etapas foram concluídas!')
  }

  return (
    <ContentLayout>
      <CustomHeader>
        <StepsHeader />
      </CustomHeader>
      <CustomContent>
        {isStepOne && <SideContent />}
        <Flex
          align="end"
          vertical
          gap="2rem"
          style={{
            width: '100%',
            height: '100%',
            flex: 2,
          }}
        >
          <Outlet />
          <Flex
            justify={isStepOne ? 'flex-end' : 'space-between'}
            align={isStepOne ? 'start' : 'end'}
            style={{ width: '100%', height: '100%' }}
            gap="large"
          >
            {!isStepOne && (
              <StepBtn
                disabled={!isStepCompleted(1)}
                onClick={handlePrevNextStep}
                type="primary"
              >
                Passo anterior
              </StepBtn>
            )}
            <StepBtn
              disabled={
                !isStepCompleted(1) ||
                (activeLastStep && isStepCompleted(activeStepId))
              }
              onClick={
                activeLastStep ? handleCheckCompleted : handleClickNextStep
              }
              type="primary"
            >
              {activeLastStep ? 'Finalizar' : 'Próximo passo'}
            </StepBtn>
          </Flex>
        </Flex>
      </CustomContent>
    </ContentLayout>
  )
}
