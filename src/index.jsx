import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/theme-provider';
import AuthProvider from './providers/auth-provider';
import CartProvider from './providers/cart-provider';

async function enableMocking() {
  if (import.meta.env.VITE_USE_MOCK_API !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </StrictMode>
  );
});
