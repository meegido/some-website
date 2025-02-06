import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Archieve from '../archieve';
import userEvent from '@testing-library/user-event';

describe('Archieve page', () => {
  it('when it loads, should show only a search box', () => {
    render(<Archieve />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });

  it('should list search results after user enters the search term', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'Climate change{enter}');

    // const submitButton = screen.getByRole('button', { name: /go!/i });
    // await userEvent.click(submitButton);

    await waitFor(() => {
      const searchTitles = screen.queryAllByRole('heading', { level: 3 });
      expect(searchTitles).toHaveLength(10);
    });
  });

  it('should show a error message when the API returns a 400 response', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'error{enter}');

    await waitFor(() => {
      expect(
        screen.queryByText(/Something went wrong, please try a different search/i)
      ).toBeInTheDocument();
    });
  });

  it('should show the pagination buttons when the results load', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'Climate change{enter}');

    const prevButton = screen.queryByRole('button', { name: /previous/i });
    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.queryByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
  });

  it('should call fetch to load results when user click on next page', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'Climate change{enter}');

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
  });
});
