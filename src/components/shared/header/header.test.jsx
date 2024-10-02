import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserContext } from '../../../providers/user-provider';
import { ThemeContext } from '../../../providers/theme-provider';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

const renderWithProviders = ({
  theme = 'light',
  isLoggedIn = false,
  toggleTheme = vi.fn(),
  logout = vi.fn(),
} = {}) => {
  return render(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ isLoggedIn, logout }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

describe('Header', () => {
  it('should render the header', () => {
    renderWithProviders();

    expect(screen.getByRole('heading', { name: 'Some website' })).toBeInTheDocument();
  });

  it('should display the logout button when the user logged on', () => {
    renderWithProviders({ isLoggedIn: true });
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
  });

  it('the toggle button should which between dark and light themes', () => {
    const toggleTheme = vi.fn();
    renderWithProviders({ isLoggedIn: true, theme: 'light', toggleTheme });

    const toggleButton = screen.getByRole('button', { name: /activate dark mode/i });
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(toggleTheme).toHaveBeenCalledTimes(1);

    renderWithProviders({ isLoggedIn: true, theme: 'dark' });

    const toggleButtonDark = screen.getByRole('button', { name: /deactivate dark mode/i });
    expect(toggleButtonDark).toBeInTheDocument();
  });
});
