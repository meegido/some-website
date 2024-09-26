import { createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/form/login-form';
import Layout from './layout';
import Home from './components/home';
import PrivateRoute from './private-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // "index query param": useful when logged in and logged out routes
        path: '/login',
        element: <LoginForm />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'home',
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
