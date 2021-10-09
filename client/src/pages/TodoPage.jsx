import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { useHistory } from 'react-router'
import { InputNewTodo } from '../components/InputNewTodo/InputNewTodo'
import { CardList } from '../components/CardList/CardList'

export const TodoPage = () => {
  const { token } = useContext(TodoContext)
  const history = useHistory();
  if (!token) {
    history.push('/')
  }
  return (
    <div>
      <InputNewTodo />
      <CardList />
    </div>
  )
}
