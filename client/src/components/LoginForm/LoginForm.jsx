import { TextField, Box, Button } from '@mui/material'
import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context/TodoProvider'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  const { setToken, setDisplayName } = useContext(TodoContext)
  const [loginValue, setLoginValue] = useState({ email: "", password: "" })
  const history = useHistory()

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginValue)
    }).then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    }).then(data => {
      console.log(data)
      setToken(data.token)
      setDisplayName(data.displayName)
      history.push('/todos')
    }).catch(err => console.log(err))
  }


  return (
    <Box component="form" onChange={handleChange} onSubmit={handleSubmit}>
      <TextField name="email" label="email" type="email" />
      <TextField name="password" label="Password" type="password" />
      <Button type="submit">Login</Button>
      <Button href="/register"><Link to="/register">Register</Link></Button>
    </Box>
  )
}
