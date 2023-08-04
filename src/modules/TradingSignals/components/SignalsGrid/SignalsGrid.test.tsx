import React from 'react'
import { render, waitFor } from '@testing-library/react'
import SignalsGrid from './SignalsGrid'
import tradingSignalsApi from '../../../../data-provider/trading-signals-api/trading-signals-api'
import { TradingSignal } from '../../../../data-provider/trading-signals-api/trading-signals-api.types'

// Mocking the getTradingSignals API function
jest.mock('../../../../data-provider/trading-signals-api/trading-signals-api', () => ({
  getTradingSignals: jest.fn(),
}))

describe('SignalsGrid component', () => {
  it('renders without crashing', () => {
    render(<SignalsGrid />)
  })

  it('fetches and displays trading signals', async () => {
    // Mock API response
    const mockSignals: TradingSignal[] = [
      {
        asset: 'BTC',
        timestamp: new Date(),
        period: '1d',
        takeProfit: 10000,
        stopLoss: 5000,
        source: 'Test',
        success: true,
        finished: true,
        side: 'buy',
      },
    ]

    // Cast the mock function to access mock implementations
    const mockedGetTradingSignals = tradingSignalsApi.getTradingSignals as jest.MockedFunction<
      typeof tradingSignalsApi.getTradingSignals
    >

    // When getTradingSignals is called, we'll return the mocked signals
    mockedGetTradingSignals.mockImplementation((callback) => callback(null, mockSignals))

    const { getByText } = render(<SignalsGrid />)

    // Wait for the effect to run and re-render component
    await waitFor(() => {
      expect(getByText('BTC')).toBeInTheDocument()
    })
  })
})
