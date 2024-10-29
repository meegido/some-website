import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Quotes from './quotes';
import { QUOTES } from './quotes-data';

describe('Quotes page', () => {
  it('shows a list of quotes', () => {
    render(<Quotes quotes={QUOTES} />);

    expect(screen.getByText(/Carlos Ares/i)).toBeInTheDocument();
  });
});
