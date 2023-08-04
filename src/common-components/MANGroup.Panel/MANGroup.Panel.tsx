import React from 'react'
import Card from 'react-bootstrap/Card'
import { PanelProps } from './MANGroup.PanelTypes'

const Panel: React.FC<PanelProps> = ({ title, children, className }) => {
  return (
    <Card className={className}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  )
}

export default Panel
