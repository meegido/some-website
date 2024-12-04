import { http, HttpResponse } from 'msw';
import { mockResponse } from '../../../mocks/mock-open-library-data';

export const getTermMock = () => {
  return http.get('https://openlibrary.org/search.json', ({ request }) => {
    const url = new URL(request.url);

    const q = url.searchParams.get('q');
    console.log('Handler executed:', q);

    if (q === 'error') {
      console.log('Intercepted query params:', { q });
      return HttpResponse.json({ message: 'Bad Request: Invalid search term' }, { status: 400 });
    }

    return HttpResponse.json(mockResponse, { status: 200 });
  });
};

export const archiveHandlers = [getTermMock()];
