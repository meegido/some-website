import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/theme-provider';
import UserProvider from './providers/user-provider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
