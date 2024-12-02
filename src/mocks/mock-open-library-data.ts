import { OpenLibraryResult } from 'projects/archieve/api/open-library-api';

export const mockResponse: OpenLibraryResult = {
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
