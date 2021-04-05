import React from 'react'
import { Link } from "@reach/router"
import { RegisterForm } from '../molecules/RegisterForm'
import { Paragraph } from '../atoms/Paragraph'
import { Title } from '../atoms/Title'

export const RegisterSection = () => {
  return (
    <div className='loginSection'>
      Do you have an account? <Link to="/">Login</Link>
      <Title text='Register to HelloBuild' />
      <Paragraph text='Enter to our platform' />
      <RegisterForm />
    </div>
  )
}
