import { createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/form/login-form';
import Layout from './layout';
import Home from './components/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // "index query param": useful when logged in and logged out routes
        index: true,
        element: <LoginForm />,
        action: '/',
      },
      {
        index: true,
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

export default router;
