import React from 'react'
import { Button } from '../atoms/Button'
import { InputFormGroup } from './InputFormGroup'

export const RegisterForm = () => {
  return (
    <form
      className='registerForm'
    >
      <InputFormGroup
        name='firstName'
        text='First Name'
        type='text'
        placeholder='Jhon'
        />
      <InputFormGroup
        name='lastName'
        text='Last Name'
        type='text'
        placeholder='Doe'
      />
      <InputFormGroup
        name='email'
        text='Email'
        type='email'
        placeholder='jhondoe@example.com'
      />
      <InputFormGroup
        name='password'
        text='Password'
        type='password'
      />
      <Button
        id='loginButton'
        type='submit'
        label='Register Now'
      />
      
    </form>
  )
}
