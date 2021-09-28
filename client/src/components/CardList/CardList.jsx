import React from "react";
import {Grid} from '@mui/material';
import { TodoCard } from "../TodoCard/TodoCard";

const data = [
  {
    id: 1,
    title: "Fett skön titel",
    body: "Work on the sköna in the life",
    lastModified: "2021-09-24",
  },
  {
    id: 2,
    title: "Gymövningar",
    body: "biceps, triceps, chest",
    lastModified: "2021-09-23",
  },
  {
    id: 3,
    title: "Gainfeed",
    body: "only aminoacids for my body",
    lastModified: "2021-09-21",
  },
];


export const CardList = () => {

  return  (
  <Grid container spacing={2}>
  {data.map(({id, title, body, lastModified}) => {
    return (
      <TodoCard key={id} title={title} body={body} lastModified={lastModified}/>
    );
  })}
</Grid>)
};
