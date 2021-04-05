import React from 'react'

export const Input = ({ id, name, type='text', placeholder='', label }) => {
  return (
    <input
      id={id}
      name={name}
      className='input'
      type={type}
      placeholder={placeholder}
    >
      {label}
    </input>
  )
}
