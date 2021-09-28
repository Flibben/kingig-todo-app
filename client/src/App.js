import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import "./App.css";

const data = [
  {
    id: 1,
    title: "Fett skön titel",
    body: "Work on the sköna in the life",
    lastModified: "2021-09-24"
  },
  {
    id: 2,
    title: "Gymövningar",
    body: "biceps, triceps, chest",
    lastModified: "2021-09-23"
  },
  {
    id: 3,
    title: "Gainfeed",
    body: "only aminoacids for my body",
    lastModified: "2021-09-21"
  },
]

const App = () => {
  return <div>
    {data.map((item) => {
      return (
        <Card>
          <CardContent>
            <Typography>
              {item.title}
            </Typography>
          </CardContent>
        </Card>
      )
    })}
  </div>;
};

export default App;
