import React from 'react'
import { InputNewTodo } from '../components/InputNewTodo/InputNewTodo'
import { CardList } from '../components/CardList/CardList'

export const TodoPage = () => {
  return (
    <div>
      <InputNewTodo />
      <CardList />
    </div>
  )
}