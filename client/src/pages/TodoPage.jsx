import React from 'react';
import { InputNewTodo } from '../components/InputNewTodo/InputNewTodo';
import { CardList } from '../components/CardList/CardList';
import { UserName } from '../components/UserName/UserName';
import { LogOutButton } from '../components/LogOutButton/LogOutButton';

export const TodoPage = () => (
  <div>
    <LogOutButton />
    <UserName />
    <InputNewTodo />
    <CardList />
  </div>
);
