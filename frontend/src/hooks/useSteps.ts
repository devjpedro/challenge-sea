import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from '../store'
import {
  nextStep,
  previousStep,
  setActiveStep,
  setStepCompleted,
  setStepUncompleted,
} from '../store/slices/stepsSlice'

export const useSteps = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { steps, activeStepId } = useSelector((state: RootState) => state.steps)

  return {
    steps,
    activeStepId,
    activeStep: steps.find((step) => step.id === activeStepId),
    completeStep: (stepId: number) => dispatch(setStepCompleted(stepId)),
    uncompleteStep: (stepId: number) => dispatch(setStepUncompleted(stepId)),
    setActiveStep: (stepId: number) => dispatch(setActiveStep(stepId)),
    goToNextStep: () => dispatch(nextStep()),
    goToPreviousStep: () => dispatch(previousStep()),
    canGoNext: activeStepId < steps.length,
    canGoPrevious: activeStepId > 1,
    isStepCompleted: (stepId: number) =>
      steps.find((step) => step.id === stepId)?.completed || false,
  }
}
