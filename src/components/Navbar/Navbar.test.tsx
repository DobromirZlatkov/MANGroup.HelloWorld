import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
  })

  it('displays the brand name', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('brand name links to root path', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const brandLink = screen.getByText('Hello World').closest('a')

    expect(brandLink).toHaveAttribute('href', '/')
  })
})
