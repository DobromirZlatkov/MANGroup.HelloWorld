import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import { MANGroupButtonProps } from './MANGroup.ButtonTypes'

const Button: React.FC<MANGroupButtonProps> = ({ onClick, children, className }) => {
  return (
    <BootstrapButton onClick={onClick} className={className}>
      {children}
    </BootstrapButton>
  )
}

export default Button
