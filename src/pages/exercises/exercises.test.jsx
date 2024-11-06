import Exercises from './exercises';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../providers/auth-provider';

describe('Exercises page', () => {
  it('should render the home page', () => {
    const mockAuthContextValue = {
      login: () => {},
    };
    render(
      <AuthContext.Provider value={mockAuthContextValue}>
        <MemoryRouter>
          <Exercises />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading', { name: '🍪 Exercises' })).toBeInTheDocument();
  });
});
