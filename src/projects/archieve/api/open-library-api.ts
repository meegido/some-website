import { mockResponse } from '../../../mocks/mock-open-library-data';

export interface OpenLibraryDoc {
  author_key: string[];
  author_name: string[];
  first_publish_year: number;
  key: string;
  cover_i: number;
  language: string[];
  seed: string[];
  title: string;
}

export interface OpenLibraryResult {
  numFound: number;
  docs: OpenLibraryDoc[];
}

export interface SearchParams {
  term: string;
  limit: number;
  page: number;
}

export const getTerm = async (params: SearchParams): Promise<OpenLibraryResult> => {
  const useMockApi = import.meta.env.VITE_USE_MOCK_API === 'true';

  if (useMockApi) {
    return mockResponse; // Return mock data
  }

  if (import.meta.env.VITE_USE_MOCK_API === 'true') {
    console.log('Mock API enabled');
  } else {
    console.log('Real API enabled');
  }

  const queryString = new URLSearchParams({
    q: params.term,
    limit: params.limit.toString(),
    page: params.page.toString(),
  });

  const baseUrl = 'https://openlibrary.org/search.json';

  const url = decodeURI(`${baseUrl}?${queryString}`);

  const response = await fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-type': 'application/json;',
    // },
  });

  return await response.json();
};
