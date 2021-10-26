import { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoProvider';

export const useAuth = () => {
  const { token } = useContext(TodoContext);
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/authentication',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
      return response.json();
    }).then((data) => {
      setAuth(data.auth);
    }).catch((error) => {
      console.error(error);
    })
      .finally(() => setIsLoading(false));
  }, [token]);

  return { auth, isLoading };
};
