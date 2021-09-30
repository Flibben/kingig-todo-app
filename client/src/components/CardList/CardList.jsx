import React, { useContext, useEffect } from "react";
import { CircularProgress, Grid } from '@mui/material';
import { TodoCard } from "../TodoCard/TodoCard";
import { TodoContext } from "../../context/TodoProvider";

export const CardList = () => {

  const { todoList, setTodoList } = useContext(TodoContext);

  useEffect(() => {
    fetch('http://localhost:5000/todos').then(response => response.json()).then(data => setTodoList(data))
  }, [setTodoList])

  return (
    <Grid container spacing={2}>
      {
        !todoList ? <CircularProgress /> :
          todoList.map(({ id, title, body, lastModified }) => {
            return (
              <TodoCard key={id} id={id} title={title} body={body} lastModified={lastModified} />
            );
          })}
    </Grid>)
};
