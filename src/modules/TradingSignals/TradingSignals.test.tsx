import React from 'react'
import { render, screen } from '@testing-library/react'
import TradingSignals from './TradingSignals'

describe('TradingSignals component', () => {
  it('renders without crashing', () => {
    render(<TradingSignals />)
    expect(screen.getByTestId('trading-signals-component')).toBeInTheDocument()
  })

  it('contains two Panels', () => {
    render(<TradingSignals />)
    expect(screen.getByText('Input And Button')).toBeInTheDocument()
    expect(screen.getByText('Grid With Data')).toBeInTheDocument()
  })
})
