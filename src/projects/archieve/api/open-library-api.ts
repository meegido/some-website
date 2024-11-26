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
