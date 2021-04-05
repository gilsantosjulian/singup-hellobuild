import React from 'react'
import { Button } from '../atoms/Button'
import { InputFormGroup } from '../molecules/InputFormGroup'

export const LoginForm = () => {
  return (
    <form
      className='loginForm'
    >
      <InputFormGroup
        name='username'
        text='Username'
        type='text'
        placeholder='Username'
      />
      <InputFormGroup
        name='password'
        text='Password'
        type='password'
      />
      <Button
        id='loginButton'
        type='submit'
        label='Login'
      />
      
    </form>
  )
}
