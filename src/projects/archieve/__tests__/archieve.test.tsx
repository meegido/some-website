import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Archieve from '../archieve';
import userEvent from '@testing-library/user-event';

describe('Archieve page', () => {
  it('when it loads, should show only a search box', () => {
    render(<Archieve />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();

    const wellcomeText = screen.getByText(/Wellcome/i);
    expect(wellcomeText).toBeInTheDocument();
  });

  it('should list search results after user enters the search term', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'Patatas change');

    const submitButton = screen.getByRole('button', { name: /go!/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      const searchTitles = screen.queryAllByRole('heading');
      expect(searchTitles).toHaveLength(10);
    });
  });

  it('should show a error message when the API returns a 400 response', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'error');

    const submitButton = screen.getByRole('button', { name: /go!/i });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/Something went wrong, please try a different search/i)
      ).toBeInTheDocument();
    });
  });
});
