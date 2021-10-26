import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import useStyles from './styles';
import { TodoContext } from '../../context/TodoProvider';

export const InputNewTodo = () => {
  const { todoList, setTodoList, token } = useContext(TodoContext);
  const [todoValue, setTodoValue] = useState({ title: '', body: '' });
  const classes = useStyles();

  const handleChange = (e) => {
    setTodoValue({ ...todoValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todoValue),
    }).then((res) => res.json()).then((data) => {
      setTodoList([...todoList, data]);
      setTodoValue({ title: '', body: '' });
    });
  };

  return (
    <form className={classes.form} onChange={handleChange} onSubmit={handleSubmit}>
      <TextField name="title" value={todoValue.title} label="Title" sx={{ marginTop: 1 }} required />
      <TextField
        name="body"
        label="Text"
        multiline
        value={todoValue.body}
        sx={{ marginTop: 1 }}
      />
      <Button color="primary" variant="contained" type="submit">Save note</Button>
    </form>
  );
};
