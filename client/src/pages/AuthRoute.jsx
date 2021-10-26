import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthRoute = ({ path, children }) => {
  const { auth, isLoading } = useAuth();
  return (
    <Route
      path={path}
      render={() => {
        if (!auth && isLoading) {
          return <div>...Authenticating</div>;
        }
        return auth ? children : <Redirect to="/login" />;
      }}
    />

  );
};
