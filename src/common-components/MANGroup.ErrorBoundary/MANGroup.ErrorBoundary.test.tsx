import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from './MANGroup.ErrorBoundary'

describe('MANGroup.ErrorBoundary', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render children', () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>
    )
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  it('should render error message if child component throws', () => {
    const ErrorComponent = () => {
      throw new Error('Error thrown from problem child')
    }

    jest.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Sorry... there was an error')).toBeInTheDocument()
  })
})
