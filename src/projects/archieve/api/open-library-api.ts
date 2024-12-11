import { mockResponse } from '../../../mocks/mock-open-library-data';

export interface OpenLibraryDoc {
  // Book
  title: string;
  type: string;
  language: string[];
  cover_i?: number;
  first_publish_year: number;
  // cambiar por place y también iterar
  publish_place: string[];
  format: string[];
  number_of_pages_median?: number;
  seed: string[]; // links to author and subject (only)
  key: string; //book link
  lending_identifier_s?: string; //alternative book link

  // Author
  author_key: string[];
  author_name: string[];
  contributor?: string[];

  // Borrowable
  osp_count?: number; // no borrow restrictions
  public_scan_b: boolean;
  ebook_access: string;
  ebook_count_i: number;
  readinglog_count: number;
  want_to_read_count: number;
  currently_reading_count: number;

  // Ratings
  id_goodreads: string[];
  ratings_average: number;
  ratings_count: number;

  // Related topics
  subject_key: string[]; // to build url
  subject: string[]; // names
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
    console.log('Mock API enabled');
    return mockResponse;
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

  console.log(response.status, 'STATUS');

  if (response.status === 400) {
    const errorData = await response.json();
    console.log(errorData);
    throw new Error(errorData.message || `HTTP Error: ${response.status}`);
  }

  return await response.json();
};
