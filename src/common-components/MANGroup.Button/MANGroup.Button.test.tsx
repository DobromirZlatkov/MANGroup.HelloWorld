import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './MANGroup.Button'

describe('Button', () => {
  const onClickMock = jest.fn()

  beforeEach(() => {
    render(
      <Button onClick={onClickMock} className="test-class">
        Click me
      </Button>
    )
  })

  it('renders with correct text', () => {
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('has the correct class', () => {
    expect(screen.getByRole('button')).toHaveClass('test-class')
  })

  it('calls onClick prop when clicked', () => {
    userEvent.click(screen.getByRole('button'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
