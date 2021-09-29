import React, { useContext } from "react";
import { Grid } from '@mui/material';
import { TodoCard } from "../TodoCard/TodoCard";
import { TodoContext } from "../../context/TodoProvider";

export const CardList = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <Grid container spacing={2}>
      {todoList.map(({ id, title, body, lastModified }) => {
        return (
          <TodoCard key={id} title={title} body={body} lastModified={lastModified} />
        );
      })}
    </Grid>)
};
