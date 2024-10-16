import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home/home';
import ErrorBoundary from './shared/components/error-boundary/error-boundary';
import TipCalculator from './pages/tip-calculator/tip-calculator';
import ProductPage from './pages/product-page/product-page';
import ProtectedRoute from './protected-route';
import Landing from './pages/landing/landing';

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
        element: <Landing />,
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
