import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders the TradingSignals component when navigating to root path', () => {
    render(<App />)

    expect(screen.getByText('Input And Button')).toBeInTheDocument()
  })
})
