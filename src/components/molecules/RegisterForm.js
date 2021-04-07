import React from 'react'
import { Button } from '../atoms/Button'
import { InputFormGroup } from './InputFormGroup'

export const RegisterForm = () => {
  return (
    <form className='loginForm mt-8 space-y-6'>
      <div className='rounded-md shadow-sm -space-y-px'>
        <InputFormGroup
          name='firstName'
          text='First Name'
          type='text'
          placeholder='Jhon'
          labelClass='sr-only'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
          />
        <InputFormGroup
          name='lastName'
          text='Last Name'
          type='text'
          placeholder='Doe'
          labelClass='sr-only'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
        />
        <InputFormGroup
          name='email'
          text='Email'
          type='email'
          placeholder='jhondoe@example.com'
          labelClass='sr-only'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
        />
        <InputFormGroup
          name='password'
          text='Password'
          type='password'
          labelClass='sr-only'
          placeholder='Password'
          inputClass='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm'
        />
      </div>
      <Button
        id='loginButton'
        type='submit'
        label='Register Now'
        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
      />
      
    </form>
  )
}
