import { describe, expect, it } from 'vitest';
import Home from './home';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Exercises' })).toBeInTheDocument();
  });
});
