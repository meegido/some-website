import React from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

const PrivateRoute = () => {
  const { user } = useOutletContext();

  if (!user || undefined) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={user} />;
};

export default PrivateRoute;
