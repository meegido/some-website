import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ErrorBoundary from './shared/components/error-boundary/error-boundary';
import TipCalculator from './projects/tip-calculator/tip-calculator';
import ProductPage from './projects/product-page/product-page';
import Landing from './pages/landing/landing';
import Settings from './pages/settings/settings';
import Exercises from './pages/exercises/exercises';
import Quotes from './projects/quotes/quotes';
import AiGallery from './pages/ai-gallery/ai-gallery.tsx';
import Archieve from './projects/archieve/archieve.tsx';

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
        path: 'ai-gallery',
        element: <AiGallery />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'exercises/archieve',
        element: <Archieve />,
      },
    ],
  },
]);

export default router;
