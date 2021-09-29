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

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList([...todoList, { ...todoValue, id: todoList.length + 1 }])
    setTodoValue({ title: "", body: "" })
  }



  return (
    <form className={classes.form} onChange={handleChange} onSubmit={handleSubmit}>
      <TextField name="title" value={todoValue.title} label="Title" required />
      <TextField
        name="body"
        label="Text"
        multiline
        value={todoValue.body}
      />
      <Button color="primary" variant="contained" type="submit">Save note</Button>
    </form>
  )
}
