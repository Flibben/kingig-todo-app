import React from 'react';
import Container from '@mui/material/Container';
import { Switch, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoProvider';
import { TodoPage } from './pages/TodoPage';
import { LoginPage } from './pages/LoginPage';
import './App.css';
import { AuthRoute } from './pages/AuthRoute';
import { RegisterPage } from './pages/RegisterPage';

const App = () => (
  <TodoProvider>
    <Container>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <AuthRoute path="/">
          <TodoPage />
        </AuthRoute>
      </Switch>
    </Container>
  </TodoProvider>
);

export default App;
