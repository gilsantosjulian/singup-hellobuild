import React from 'react'
import { Link } from "@reach/router"
import { LoginForm } from '../molecules/LoginForm'
import { Paragraph } from '../atoms/Paragraph'
import { Title } from '../atoms/Title'

export const LoginSection = () => {
  return (
    <div className='loginSection'>
      Do you have an account? <Link to="/sign-up">Sing Up</Link>
      <Title text='Login to HelloBuild' />
      <Paragraph text='Enter to our platform' />
      <LoginForm />
    </div>
  )
}
