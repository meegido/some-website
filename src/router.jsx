import { createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/form/login-form';
import Layout from './layout';
import Home from './components/home';
import ProtectedRoute from './protected-route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      // {
      //   path: 'home', // Path `/home`
      //   element: <Home />,
      // },
    ],
  },
]);

export default router;
