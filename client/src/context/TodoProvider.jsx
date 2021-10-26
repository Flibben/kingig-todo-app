import React, { useState, createContext } from 'react';
import { useToken } from '../hooks/useToken';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { token, saveToken, setToken } = useToken();
  const [todoList, setTodoList] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  return (
    <TodoContext.Provider value={{
      todoList, setTodoList, token, saveToken, setToken, displayName, setDisplayName,
    }}
    >
      {children}
    </TodoContext.Provider>
  );
};
