import React from "react";
import { CardList } from "./components/CardList/CardList";
import Container from "@mui/material/Container";
import { InputNewTodo } from "./components/InputNewTodo/InputNewTodo";
import { TodoProvider } from "./context/TodoProvider";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <Container>
          <InputNewTodo />
          <CardList />
        </Container>
      </TodoProvider>
    </ThemeProvider >
  );
};

export default App;
