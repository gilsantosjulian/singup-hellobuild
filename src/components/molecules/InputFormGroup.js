import React from 'react'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

export const InputFormGroup = ({
  name,
  placeholder,
  text,
  type,
}) => {
  return (
    <>
      <Label text={text}/>
      <Input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  )
}
