import React from 'react'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

export const InputFormGroup = ({
  name,
  placeholder,
  text,
  type,
  labelClass,
  inputClass,
}) => {
  return (
    <div>
      <Label
        text={text}
        className={labelClass}
      />
      <Input
        id={name}
        type={type}
        className={inputClass}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
