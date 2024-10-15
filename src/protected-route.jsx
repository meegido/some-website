import { Navigate } from 'react-router-dom';
import { AuthContext } from './providers/auth-provider';
import React from 'react';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
