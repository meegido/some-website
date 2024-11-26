import { render, screen } from '@testing-library/react';
import { server } from '../../../mocks/server.ts';
import { beforeEach, describe, expect, it } from 'vitest';
import Archieve from '../archieve';

describe('Archieve page', () => {
  beforeEach(() => {
    server.events.on('request:start', (req) => {
      console.log('Intercepted:', req);
    });
  });

  it('should list the search results', async () => {
    render(<Archieve />);

    const searchTitles = await screen.findAllByRole('heading');
    expect(searchTitles).toHaveLength(1); // Matches the single item in `defaultResponse.docs`
    expect(searchTitles[0]).toHaveTextContent('Climate change');
  });
});
