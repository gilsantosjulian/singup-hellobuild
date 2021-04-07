import React from 'react'

export const Button = ({ 
  disabled, 
  label, 
  type, 
  className
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={disabled}
    >
      {label.toUpperCase()}
    </button>
  )
}
