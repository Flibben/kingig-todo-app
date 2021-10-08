import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { CardList } from "./components/CardList/CardList";
import Container from "@mui/material/Container";
import { InputNewTodo } from "./components/InputNewTodo/InputNewTodo";
import { TodoProvider } from "./context/TodoProvider";
import "./App.css";
import { Login } from "./components/Login/Login";

const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }

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
