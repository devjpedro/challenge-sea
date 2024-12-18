import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import stepsReducer from './slices/stepsSlice'

const persistConfig = {
  key: 'steps',
  storage,
  whitelist: ['steps', 'activeStepId'],
}

const persistedStepsReducer = persistReducer(persistConfig, stepsReducer)

export const store = configureStore({
  reducer: {
    steps: persistedStepsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
