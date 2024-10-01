import { Navigate } from 'react-router-dom';
import { UserContext } from './providers/user-provider';
import React from 'react';

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
