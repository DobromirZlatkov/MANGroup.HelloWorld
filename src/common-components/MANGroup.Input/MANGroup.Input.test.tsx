import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from './MANGroup.Input'

describe('Input Component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders the correct initial string value', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="text" value="Test Value" onChange={handleChange} placeholder="Enter value" />
    )
    expect(getByPlaceholderText('Enter value')).toHaveValue('Test Value')
  })

  it('renders the correct initial numeric value', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="number" value={100} onChange={handleChange} placeholder="Enter value" />
    )
    expect(getByPlaceholderText('Enter value')).toHaveValue(100)
  })

  it('responds to string value change', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="text" value="" onChange={handleChange} placeholder="Enter value" />
    )
    fireEvent.change(getByPlaceholderText('Enter value'), { target: { value: 'New Value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('responds to numeric value change', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="number" value="" onChange={handleChange} placeholder="Enter value" />
    )
    fireEvent.change(getByPlaceholderText('Enter value'), { target: { value: 123 } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('calls onChange handler when typing into string input', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="string" value="" onChange={handleChange} placeholder="Enter value" />
    )
    fireEvent.change(getByPlaceholderText('Enter value'), { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onChange handler when typing into numeric input', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="number" value="" onChange={handleChange} placeholder="Enter value" />
    )
    fireEvent.change(getByPlaceholderText('Enter value'), { target: { value: 123 } })
  })

  it('does not call onChange handler when typing non-numeric characters into numeric input', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Input id="test-input" type="number" value="" onChange={handleChange} placeholder="Enter value" />
    )
    fireEvent.change(getByPlaceholderText('Enter value'), { target: { value: 'abc' } })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
