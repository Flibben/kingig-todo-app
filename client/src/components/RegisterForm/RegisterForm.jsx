import { Button, TextField, Box } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants';

export const RegisterForm = () => {
  const [registerValue, setRegisterValue] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setRegisterValue({ ...registerValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerValue),
    }).then((res) => res.json()).then(() => {
      history.push('/login');
    }).catch((error) => console.error(error));
  };

  return (
    <Box component="form" onChange={handleChange} onSubmit={handleSubmit}>
      <TextField name="email" label="Email" type="email" data-testid="email" />
      <TextField name="password" label="Password" type="password" data-testid="password" />
      <TextField name="fullName" label="Full Name" type="text" data-testid="fullname" />
      <TextField name="displayName" label="Display Name" type="text" data-testid="displayname" />
      <Button type="submit">Register</Button>
      <Button href="/login">Login page</Button>
    </Box>
  );
};
