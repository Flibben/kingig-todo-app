import React, {useState, useContext, useEffect} from 'react'
import { TodoContext } from '../context/TodoProvider'

export const useAuth = () => {
  const {token} = useContext(TodoContext);
  const [auth, setAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      fetch('http://localhost:5000/authentication',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      ).then(response => response.json()).then(data => {
        setAuth(data.auth)
      }).catch(error => {
        console.log(error, 'Not authenticated')
      }).finally(() => setIsLoading(false))
  }, [token])

  return {auth, isLoading}
}
