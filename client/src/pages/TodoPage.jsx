import React from 'react';
import { InputNewTodo } from '../components/InputNewTodo/InputNewTodo';
import { CardList } from '../components/CardList/CardList';
import { UserName } from '../components/UserName/UserName';

export const TodoPage = () => (
  <div>
    <UserName />
    <InputNewTodo />
    <CardList />
  </div>
);
