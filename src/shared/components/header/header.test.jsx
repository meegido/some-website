import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeContext } from '../../../providers/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import { AuthContext } from '../../../providers/auth-provider';
import { CartContext } from '../../../providers/cart-provider';

const renderWithProviders = ({
  theme = 'light',
  isLoggedIn = false,
  toggleTheme = vi.fn(),
  logout = vi.fn(),
  cart = [],
} = {}) => {
  return render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ isLoggedIn, logout }}>
        <CartContext.Provider value={{ cart }}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </CartContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

describe('Header', () => {
  it('should render the header', () => {
    renderWithProviders();

    expect(screen.getByRole('heading', { name: 'Some website' })).toBeInTheDocument();
  });
});
