import React, { useState } from "react";
import Container from "@mui/material/Container";
import { TodoProvider } from "./context/TodoProvider";
import { Switch, Route } from 'react-router-dom';
import { TodoPage } from "./pages/TodoPage";
import { LoginPage } from "./pages/LoginPage";
import "./App.css";

const App = () => {

  return (
    <TodoProvider>
      <Container>
        <Switch>
          <Route path="/todos" component={TodoPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Container>
    </TodoProvider>
  );
};

export default App;
