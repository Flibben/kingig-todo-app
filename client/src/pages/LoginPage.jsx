import React from 'react'
import { Redirect } from 'react-router'
import { LoginForm } from '../components/LoginForm/LoginForm.jsx'
import { useAuth } from '../hooks/useAuth.js'

export const LoginPage = () => {
  return <LoginForm />
}
