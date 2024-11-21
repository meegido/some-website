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
  fetch('https://openlibrary.org/search.json?q=climate+change&limit=10&page=1', {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
