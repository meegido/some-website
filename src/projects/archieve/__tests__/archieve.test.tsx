import { render, screen } from '@testing-library/react';
import { server } from '../../../mocks/server.ts';
import { beforeEach, describe, expect, it } from 'vitest';
import Archieve from '../archieve';
import userEvent from '@testing-library/user-event';

describe('Archieve page', () => {
  beforeEach(() => {
    server.events.on('request:start', (req) => {
      console.log('Intercepted:', req);
    });
  });

  it('should list search results after user types a topic', async () => {
    render(<Archieve />);

    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'Climate change');
    expect(searchInput).toHaveValue('Climate change');

    const searchTitles = await screen.findAllByRole('heading');
    expect(searchTitles).toHaveLength(10);
  });
});
