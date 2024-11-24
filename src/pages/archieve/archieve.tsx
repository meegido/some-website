import { OpenLibraryResult, SearchParams } from 'api/open-library-api';
import React from 'react';

const Archieve = () => {
  const [results, setResults] = React.useState<OpenLibraryResult[]>([]);

  const getTerm = (params: SearchParams) => {
    const queryString = new URLSearchParams({
      term: params.term,
      limit: params.limit.toString(),
      page: params.page.toString(),
    }).toString();

    fetch(`https://openlibrary.org/search.json?${queryString}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((newResults) => setResults([newResults, ...results]))
      .catch((error) => console.log(error));
  };

  return <div>Hello archieve.org</div>;
};

export default Archieve;
