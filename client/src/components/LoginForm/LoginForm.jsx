import { TextField, Box, Button } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';
import { BASE_URL } from '../../constants';

export const LoginForm = () => {
  const { setToken, setDisplayName } = useContext(TodoContext);
  const [loginValue, setLoginValue] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginValue),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    }).then((data) => {
      setToken(data.token);
      setDisplayName(data.displayName);
      history.push('/todos');
    }).catch((err) => console.error(err));
  };

  return (
    <Box component="form" onChange={handleChange} onSubmit={handleSubmit}>
      <TextField name="email" label="email" type="email" />
      <TextField name="password" label="Password" type="password" />
      <Button type="submit">Login</Button>
      <Button><Link to="/register">Register</Link></Button>
    </Box>
  );
};
