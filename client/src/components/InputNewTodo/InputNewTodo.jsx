import React, { useState, useContext } from 'react'
import { TextField, Button } from '@mui/material'
import useStyles from "./styles";
import { TodoContext } from '../../context/TodoProvider';

export const InputNewTodo = () => {
  const { todoList, setTodoList } = useContext(TodoContext)
  const [todoValue, setTodoValue] = useState({ title: "", body: "" });
  const classes = useStyles();

  const handleChange = (event) => {
    setTodoValue({ ...todoValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setTodoList([...todoList, { ...todoValue, id: todoList.length + 1 }])
    setTodoValue({ title: "", body: "" })
  }

  return (
    <form className={classes.form} onChange={handleChange}>
      <TextField name="title" value={todoValue.title} label="Title" />
      <TextField
        name="body"
        label="Text"
        multiline
        value={todoValue.body}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>Save note</Button>
    </form>
  )
}
