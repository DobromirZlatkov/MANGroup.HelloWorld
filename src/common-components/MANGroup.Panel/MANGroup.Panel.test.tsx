import React from 'react'
import { render } from '@testing-library/react'
import Panel from './MANGroup.Panel'

describe('Panel Component', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders the title correctly', () => {
    const { getByText } = render(<Panel title="Test Panel Title" />)
    expect(getByText('Test Panel Title')).toBeInTheDocument()
  })

  it('renders the children correctly', () => {
    const { getByText } = render(
      <Panel title="Test Panel Title">
        <p>Test Child Element</p>
      </Panel>
    )
    expect(getByText('Test Child Element')).toBeInTheDocument()
  })
})
