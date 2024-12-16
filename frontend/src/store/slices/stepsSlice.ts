import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Step {
  id: number
  completed: boolean
}

interface StepsState {
  steps: Step[]
  activeStepId: number
}

const initialState: StepsState = {
  steps: [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
    { id: 4, completed: false },
    { id: 5, completed: false },
    { id: 6, completed: false },
    { id: 7, completed: false },
    { id: 8, completed: false },
    { id: 9, completed: false },
  ],
  activeStepId: 1,
}

const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setStepCompleted: (state, action: PayloadAction<number>) => {
      const step = state.steps.find((s) => s.id === action.payload)
      if (step) {
        step.completed = true
      }
    },
    setStepUncompleted: (state, action: PayloadAction<number>) => {
      const step = state.steps.find((s) => s.id === action.payload)
      if (step) {
        step.completed = false
      }
    },
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStepId = action.payload
    },
    nextStep: (state) => {
      const currentIndex = state.steps.findIndex(
        (s) => s.id === state.activeStepId,
      )
      if (currentIndex < state.steps.length - 1) {
        state.activeStepId = state.steps[currentIndex + 1].id
      }
    },
    previousStep: (state) => {
      const currentIndex = state.steps.findIndex(
        (s) => s.id === state.activeStepId,
      )
      if (currentIndex > 0) {
        state.activeStepId = state.steps[currentIndex - 1].id
      }
    },
  },
})

export const {
  setStepCompleted,
  setStepUncompleted,
  setActiveStep,
  nextStep,
  previousStep,
} = stepsSlice.actions

export default stepsSlice.reducer
