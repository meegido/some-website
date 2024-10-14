import { describe, expect, it } from 'vitest';
import Home from './home';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../../providers/user-provider';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
  it('should render the home page', () => {
    const mockUserContextValue = {
      login: () => {},
    };
    render(
      <UserContext.Provider value={mockUserContextValue}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </UserContext.Provider>
    );

    expect(screen.getByRole('heading', { name: '🍪 Exercises' })).toBeInTheDocument();
  });
});
