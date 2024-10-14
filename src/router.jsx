import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home/home';
import ErrorBoundary from './components/shared/error-boundary/error-boundary';
import TipCalculator from './pages/tip-calculator/tip-calculator';
import ProductPage from './pages/product-page/product-page';
import LoginForm from './pages/form/login-form';
import ProtectedRoute from './protected-route';

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
