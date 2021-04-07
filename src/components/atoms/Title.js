import React from 'react'

export const Title = ({ text, className }) => {
  return (
    <h2
      className={`title ${className}`}
    >
      {text}
    </h2>
  )
}
