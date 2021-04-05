import React from 'react'

export const Button = ({ disabled, label, type }) => {
  return (
    <button
      className='button'
      type={type}
      disabled={disabled}
    >
      {label.toUpperCase()}
    </button>
  )
}
