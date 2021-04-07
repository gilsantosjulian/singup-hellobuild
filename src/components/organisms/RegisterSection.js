import React from 'react'
import { Link } from "@reach/router"
import { RegisterForm } from '../molecules/RegisterForm'
import { Paragraph } from '../atoms/Paragraph'
import { Title } from '../atoms/Title'

export const RegisterSection = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div
        className='registerSection max-w-md w-full space-y-8'
      >
        <div className='flex flex-row justify-end'>
          <Paragraph
            text='Do you have an account? '
            className='mr-2 text-center text-md text-gray-600'
          />
          <Link 
            to="/"
            className='text-center text-md text-teal-600'
          >
            Login
          </Link>
        </div>

        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
          <Title
            text='Register to HelloBuild'
            className='mt-6 text-center text-3xl font-extrabold text-gray-900'
          />
          <Paragraph
            text='Enter to our platform'
            className='mt-2 text-center text-sm text-gray-600'
          />
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}
