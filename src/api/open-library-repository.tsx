export interface OpenLibraryResults {
  numFound: number;
  docs: Array<{
    author_key: Array<string>;
    author_name: Array<string>;
    first_publish_year: number;
    key: string;
    cover_i: number;
    language: Array<string>;
    seed: Array<string>;
    title: string;
  }>;
}

export const searchTerms = (data: OpenLibraryResults) => {
  const baseUrl = 'https://api.example.com/data';
  const params = new URLSearchParams({
    term: 'climate+change',
    limit: '10',
    page: '1',
  });
  const url = `${baseUrl}?${params.toString()}`;

  fetch(url, {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
