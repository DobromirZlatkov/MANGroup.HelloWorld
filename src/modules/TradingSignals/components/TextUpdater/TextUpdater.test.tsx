import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextUpdater from './TextUpdater'

describe('TextUpdater component', () => {
  it('should display initial text', () => {
    const { getByText } = render(<TextUpdater />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })

  it('should update the text when typing into the input field and clicking the button', () => {
    const { getByRole, getByText } = render(<TextUpdater />)
    const button = getByRole('button')
    const input = getByRole('textbox')

    fireEvent.change(input, { target: { value: 'New Text' } })
    fireEvent.click(button)

    expect(getByText('New Text')).toBeInTheDocument()
  })
})
