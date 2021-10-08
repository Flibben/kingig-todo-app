import React, { useState, createContext } from 'react'

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [todoList, setTodoList] = useState(null);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, token, setToken }}>
      {children}
    </TodoContext.Provider>
  )
}
