import React from 'react'
import { Router, Link } from "@reach/router"
import { LoginSection } from '../organisms/LoginSection'
import { RegisterSection } from '../organisms/RegisterSection'


export const Home = () => (
  <main>
    <Router>
      <LoginSection path='/' />
      <RegisterSection path='sign-up' />
    </Router>
  </main>
)
