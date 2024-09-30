import { describe, expect, it, vi } from 'vitest';
import LoginForm from './login-form';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/user-provider';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('LoginForm Component', () => {
  it('should render the login form', () => {
    const mockUserContextValue = {
      login: () => {},
    };
    render(
      <UserContext.Provider value={mockUserContextValue}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(screen.getByText(/Loved name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });

  it('should handle user input and navigate on login', () => {
    const mockNavigate = vi.fn();
    const mockLogin = vi.fn();
    const mockUserContextValue = {
      login: mockLogin,
    };
    render(
      <UserContext.Provider value={mockUserContextValue}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </UserContext.Provider>
    );

    useNavigate.mockReturnValue(mockNavigate);

    const userNameInput = screen.getByLabelText(/Loved name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /Log in/i });

    fireEvent.change(userNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@doe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(userNameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@doe.com');
    expect(passwordInput.value).toBe('password123');

    fireEvent.click(loginButton);
    expect(mockUserContextValue.login).toHaveBeenCalledWith({
      username: 'John Doe',
      email: 'john@doe.com',
      password: 'password123',
    });

    expect(mockUserContextValue.login).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenLastCalledWith('/home');
  });
});
