import React from 'react'

export const Label = ({ text, className }) => {
  return (
    <label
      className={`label ${className}`}
    >
      {text}
    </label>
  )
}
