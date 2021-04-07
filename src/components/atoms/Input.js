import React from 'react'

export const Input = ({ 
  id, 
  name, 
  type='text', 
  placeholder='', 
  className,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
    >
    </input>
  )
}
