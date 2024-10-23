import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ErrorBoundary from './shared/components/error-boundary/error-boundary';
import TipCalculator from './pages/tip-calculator/tip-calculator';
import ProductPage from './pages/product-page/product-page';
import Landing from './pages/landing/landing';
import Exercises from './pages/home/exercises';
import Settings from './pages/settings/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        path: '/',
        element: <Landing />,
      },
      {
        path: 'exercises',
        element: <Exercises />,
      },
      {
        path: 'tip-calculator',
        element: <TipCalculator />,
      },
      {
        path: 'product-page',
        element: <ProductPage />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;
