import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/theme-provider';
import AuthProvider from './providers/auth-provider';
import CartProvider from './providers/cart-provider';

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
