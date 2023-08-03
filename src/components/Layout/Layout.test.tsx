import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

describe('Layout component', () => {
  it('renders the navbar', () => {
    const TestComponent = () => <div>Test Child</div>
    render(
      <Router>
        <Layout>
          <TestComponent />
        </Layout>
      </Router>
    )
    const navBar = screen.getByRole('navigation')
    expect(navBar).toBeInTheDocument()
  })

  it('renders the children', () => {
    const TestComponent = () => <div>Test Child</div>
    render(
      <Router>
        <Layout>
          <TestComponent />
        </Layout>
      </Router>
    )
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
