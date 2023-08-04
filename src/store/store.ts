import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

import tradignSignalsReducer from '../modules/TradingSignals/TradingSignalsSlice'

export const store = configureStore({
  reducer: {
    tradingSignals: tradignSignalsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
