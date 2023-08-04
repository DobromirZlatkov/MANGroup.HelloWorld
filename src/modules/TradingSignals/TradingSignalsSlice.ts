import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { TradingSignalsState } from './TradingSignalsTypes'

// Define the initial state using that type
const initialState: TradingSignalsState = {
  text: 'Hello World',
}

export const tradignSignalsSlice = createSlice({
  name: 'tradingSignals',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      const s = state
      s.text = action.payload
    },
  },
})

export const { setText } = tradignSignalsSlice.actions

export const getText = (state: RootState) => state.tradingSignals.text

export default tradignSignalsSlice.reducer
