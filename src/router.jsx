import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ErrorBoundary from './shared/components/error-boundary/error-boundary';
import TipCalculator from './pages/tip-calculator/tip-calculator';
import ProductPage from './pages/product-page/product-page';
import Landing from './pages/landing/landing';
import Settings from './pages/settings/settings';
import Exercises from './pages/exercises/exercises';
import Quotes from './pages/quotes/quotes';

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
        path: 'exercises/tip-calculator',
        element: <TipCalculator />,
      },
      {
        path: 'exercises/product-page',
        element: <ProductPage />,
      },
      {
        path: 'exercises/quotes',
        element: <Quotes />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;
