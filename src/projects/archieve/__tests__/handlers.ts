import { http, HttpResponse } from 'msw';
import { OpenLibraryResult } from '../api/open-library-api';

export type SearchResponse = OpenLibraryResult[];

export const getTerm = (defaultResponse: SearchResponse = []) => {
  return http.get('http://localhost:5173/', ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('term');
    const limit = url.searchParams.get('limit');
    const page = url.searchParams.get('page');

    if (q === 'climate+change' && limit === '10' && page === '1') {
      return HttpResponse.json(defaultResponse, { status: 200 });
    }

    const emptyResponse: SearchResponse = [];
    return HttpResponse.json(emptyResponse, { status: 404 });
  });
};

const defaultResponse: SearchResponse = [];

export const archiveHandlers = [getTerm(defaultResponse)];
