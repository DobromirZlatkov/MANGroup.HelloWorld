import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hello World
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
