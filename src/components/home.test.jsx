import { describe, expect, it } from 'vitest';
import Home from './home';
import { render } from '@testing-library/react';

describe('Home page', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(document.querySelector('h1')).toHaveTextContent('Split your bill 💸');
  });
});
