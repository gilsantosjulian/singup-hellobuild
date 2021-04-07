import React from 'react'
import { Button } from '../atoms/Button'
import { InputFormGroup } from '../molecules/InputFormGroup'

export const LoginForm = () => {
  return (
    <form className='loginForm mt-8 space-y-6'>
      <div className='rounded-md shadow-sm -space-y-px'>
        <InputFormGroup
          name='username'
          text='Username'
          type='text'
          placeholder='Username / Email address'
          labelClass='sr-only'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
        />
        <InputFormGroup
          name='password'
          text='Password'
          type='password'
          placeholder='Password'
          labelClass='sr-only'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
        />
      </div>
      
      <Button
        id='loginButton'
        type='submit'
        label='Login'
        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
      />
      
    </form>
  )
}
