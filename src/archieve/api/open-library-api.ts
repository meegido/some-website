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
  const queryString = new URLSearchParams({
    term: params.term,
    limit: params.limit.toString(),
    page: params.page.toString(),
  }).toString();

  const baseUrl = 'https://openlibrary.org/search.json';

  const url = `${baseUrl}?${queryString.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return await response.json();
};
