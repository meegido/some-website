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

export const searchTerms = async () => {
  const baseUrl = 'https://api.example.com/data';
  const params = new URLSearchParams({
    term: 'climate+change',
    limit: '10',
    page: '1',
  });
  const url = `${baseUrl}?${params.toString()}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
