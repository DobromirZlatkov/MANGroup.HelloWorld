import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../Navbar/Navbar'
import { LayoutProps } from './LayoutTypes'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavigationBar />

      <Container>{children}</Container>
    </div>
  )
}

export default Layout
