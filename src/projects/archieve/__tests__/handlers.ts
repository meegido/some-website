import { http, HttpResponse } from 'msw';
import { OpenLibraryResult, SearchParams } from '../api/open-library-api';
import { mockResponse } from '../../../mocks/mock-open-library-data';

export const getTerm = (searchParams: SearchParams = defaultParams) => {
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

    return HttpResponse.json(mockResponse, { status: 200 });
  });
};

// const defaultResponse: OpenLibraryResult = {
//   numFound: 19522,
//   docs: [
//     {
//       title: 'Climate change',
//       type: 'work',
//       language: ['eng'],
//       cover_i: 7090562,
//       first_publish_year: 2010,
//       publish_place: ['Detroit'],
//       format: ['paperback'],
//       number_of_pages_median: 154,
//       seed: [
//         '/books/OL24109787M',
//         '/books/OL24109708M',
//         '/books/OL24109791M',
//         '/books/OL24109710M',
//         '/works/OL15092365W',
//         '/authors/OL4962163A',
//         '/subjects/juvenile_literature',
//         '/subjects/climatic_changes',
//         '/subjects/global_warming',
//         '/subjects/risk_management',
//         '/subjects/technological_innovations',
//         '/subjects/prevention',
//         '/subjects/water',
//         '/subjects/ice',
//         '/subjects/atmospheric_greenhouse_effect',
//       ],
//       key: '/works/OL15092365W',
//       lending_identifier_s: 'climatechange0000unse_y2b5',
//       author_key: ['OL4962163A'],
//       author_name: ['Jim Ollhoff'],
//       contributor: ['Oregon State University. Sea Grant College Program.'],
//       osp_count: 4,
//       public_scan_b: false,
//       ebook_access: 'borrowable',
//       ebook_count_i: 4,
//       readinglog_count: 13,
//       want_to_read_count: 3,
//       currently_reading_count: 0,
//       id_goodreads: ['5810619'],
//       ratings_average: 3.25,
//       ratings_count: 4,
//       subject_key: [
//         'climatic_changes',
//         'effect_of_human_beings_on',
//         'global_warming',
//         'nature',
//         'nature_effect_of_human_beings_on',
//         'social_aspects',
//       ],
//       subject: [
//         'Climatic changes',
//         'Nature',
//         'Social aspects',
//         'Global warming',
//         'Effect of human beings on',
//         'Nature, effect of human beings on',
//       ],
//     },
//   ],
// };

const defaultParams = {
  term: 'climate+change',
  limit: 10,
  page: 1,
};

export const archiveHandlers = [getTerm(defaultParams)];
