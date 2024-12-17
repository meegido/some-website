import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Pagination from '../components/pagination/pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
  it('should call fetch to load results when user click on next page', async () => {
    const handlePageChange = vi.fn();
    render(<Pagination page={1} totalPages={240} handlePageChange={handlePageChange} />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    await userEvent.click(nextButton);

    expect(handlePageChange).toHaveBeenCalledTimes(1);
  });
});
