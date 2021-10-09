import { TextField, Box } from '@mui/material'
import React from 'react'

export const LoginForm = () => {
  return (
    <Box component="form">
      <TextField id="email" label="email" type="email" />
      <TextField id="password" label="Password" type="password" />
    </Box>
  )
}
