import React from "react";
import { CardList } from "./components/CardList/CardList";
import Container from "@mui/material/Container";
import { InputNewTodo } from "./components/InputNewTodo/InputNewTodo";
import "./App.css";

const App = () => {
  return (
    <Container>
      <InputNewTodo />
      <CardList />
    </Container>
  );
};

export default App;
