import React, { useState } from "react";
import Container from "@mui/material/Container";
import { TodoProvider } from "./context/TodoProvider";
import { Switch, Route } from 'react-router-dom';
import { TodoPage } from "./pages/TodoPage";
import { LoginPage } from "./pages/LoginPage";
import "./App.css";
import { AuthRoute } from "./pages/AuthRoute";

const App = () => {

  return (
    <TodoProvider>
      <Container>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <AuthRoute path="/">
            <TodoPage />
          </AuthRoute>
        </Switch>
      </Container>
    </TodoProvider>
  );
};

export default App;
