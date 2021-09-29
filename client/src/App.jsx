import React from "react";
import { CardList } from "./components/CardList/CardList";
import Container from "@mui/material/Container";
import { InputNewTodo } from "./components/InputNewTodo/InputNewTodo";
import { TodoProvider } from "./context/TodoProvider";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <Container>
        <InputNewTodo />
        <CardList />
      </Container>
    </TodoProvider>
  );
};

export default App;
