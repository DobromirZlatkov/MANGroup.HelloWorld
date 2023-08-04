import React from 'react'
import { FormControl } from 'react-bootstrap'
import { InputProps } from './MANGroup.InputTypes'

const Input: React.FC<InputProps> = ({ id, type, value, onChange, placeholder, disabled, className }) => {
  return (
    <FormControl
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
    />
  )
}

export default Input
