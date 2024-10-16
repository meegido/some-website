import { describe, expect, it } from 'vitest';
import Home from './home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../providers/auth-provider';

describe('Home page', () => {
  it('should render the home page', () => {
    const mockAuthContextValue = {
      login: () => {},
    };
    render(
      <AuthContext.Provider value={mockAuthContextValue}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading', { name: '🍪 Exercises' })).toBeInTheDocument();
  });
});
