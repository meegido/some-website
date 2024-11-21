import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Archieve from './archieve';

vi.mock('../../api/open-library-repository.tsx');

const openLibraryResults = {
  numFound: 19522,
  docs: [
    {
      author_key: ['OL4962163A'],
      author_name: ['Jim Ollhoff'],
      first_publish_year: 2010,
      key: '/works/OL15092365W',
      cover_i: 7090562,
      language: ['eng'],
      seed: [
        '/books/OL24109787M',
        '/books/OL24109708M',
        '/books/OL24109791M',
        '/books/OL24109710M',
        '/works/OL15092365W',
        '/authors/OL4962163A',
        '/subjects/juvenile_literature',
        '/subjects/climatic_changes',
        '/subjects/global_warming',
        '/subjects/risk_management',
        '/subjects/technological_innovations',
        '/subjects/prevention',
        '/subjects/water',
        '/subjects/ice',
        '/subjects/atmospheric_greenhouse_effect',
      ],
      title: 'Climate change',
    },
  ],
};

// vi.mock('./api', () => ({
//   fetchData: vi.fn().mockResolvedValue({ data: [openLibraryResults] }),
// }));

vi.spyOn(window, 'fetch').mockResolvedValueOnce({
  ok: true,
  json: async () => openLibraryResults,
} as Response);

describe('Archieve page', () => {
  it('shows info  the OpenLibrary query Climate change', () => {
    render(<Archieve />);

    const resourceImages = screen.getAllByRole('img', { name: /archieve$/i });
    expect(resourceImages).toHaveLength(2);

    const altText = resourceImages.map((image) => (image as HTMLImageElement).alt);
    expect(altText).toEqual(['Book 1 archieve', 'Book 2 archieve']);
    // equal is a mutable type (arrays and object). Numbers and strings can use ToBe
  });
});
