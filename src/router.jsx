import { createBrowserRouter } from 'react-router-dom';
import LoginForm from './components/form/login-form';
import Layout from './layout';
import Home from './components/home';
import ProtectedRoute from './protected-route';
import ErrorBoundary from './components/shared/error-boundary/error-boundary';
import TipCalculator from './components/tip-calculator/tip-calculator';
import ProductPage from './components/product-page/product-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <ProtectedRoute element={<Home />} />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'tip-calculator',
        element: <ProtectedRoute element={<TipCalculator />} />,
      },
      {
        path: 'product-page',
        element: <ProtectedRoute element={<ProductPage />} />,
      },
    ],
  },
]);

export default router;
