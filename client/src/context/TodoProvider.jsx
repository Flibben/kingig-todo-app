import React, { useState, createContext } from 'react'
import { useToken } from '../hooks/useToken';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { token, setToken } = useToken();
  const [todoList, setTodoList] = useState(null);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, token, setToken }}>
      {children}
    </TodoContext.Provider>
  )
}
