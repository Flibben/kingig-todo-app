import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoProvider'

export const UserName = () => {
  const { displayName } = useContext(TodoContext)
  return (
    <>
      Logged in user: {displayName}
    </>
  )
}
