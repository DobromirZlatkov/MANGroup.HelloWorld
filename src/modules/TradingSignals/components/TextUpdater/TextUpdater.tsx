import React, { useState, ChangeEvent } from 'react'
import Input from '../../../../common-components/MANGroup.Input/MANGroup.Input'
import Button from '../../../../common-components/MANGroup.Button/MANGroup.Button'

const TextUpdater: React.FC = () => {
  const [text, setText] = useState('Hello World')
  const [headerText, setHeaderText] = useState('Hello World')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleButtonClick = () => {
    setHeaderText(text)
  }

  return (
    <>
      <h1 className="mt-3">{headerText}</h1>
      <Input id="input" type="text" value={text} onChange={handleInputChange} placeholder="Enter new text" />
      <Button onClick={handleButtonClick} className="mt-2">
        Update Text
      </Button>
    </>
  )
}

export default TextUpdater
