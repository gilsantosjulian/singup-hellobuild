import React from 'react'

export const Paragraph = ({ text, className }) => {
  return (
    <p
      className={`paragraph ${className}`}
    >
      {text}
    </p>
  )
}
