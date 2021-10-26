import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '../../context/TodoProvider';

export const LogOutButton = () => {
  const { setToken } = useContext(TodoContext);
  const history = useHistory();

  const onClickHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
    history.push('/login');
  };

  return (
    <Button onClick={onClickHandler}>
      Log out
    </Button>

  );
};
