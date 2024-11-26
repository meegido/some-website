import { http, HttpResponse } from 'msw';
import { OpenLibraryResult, SearchParams } from '../api/open-library-api';

export const getTerm = (
  searchParams: SearchParams = defaultParams,
  defaultResponse: OpenLibraryResult
) => {
  return http.get('https://openlibrary.org/search.json', ({ request }) => {
    const url = new URL(request.url);

    const q = url.searchParams.get('q');
    const limit = url.searchParams.get('limit')?.toString();
    const page = url.searchParams.get('page')?.toString();

    console.log('Intercepted query params:', { q, limit, page });
    console.log('Expected params:', searchParams);

    if (
      q !== searchParams.term ||
      limit !== `${searchParams.limit}` ||
      page !== `${searchParams.page}`
    ) {
      const emptyResponse: OpenLibraryResult[] = [];
      return HttpResponse.json(emptyResponse, { status: 404 });
    }

    return HttpResponse.json(defaultResponse, { status: 200 });
  });
};

const defaultResponse: OpenLibraryResult = {
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

const defaultParams = {
  term: 'climate+change',
  limit: 10,
  page: 1,
};

export const archiveHandlers = [getTerm(defaultParams, defaultResponse)];
