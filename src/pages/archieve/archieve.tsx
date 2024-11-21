import { OpenLibraryResults } from 'api/open-library-repository';
import React from 'react';

const Archieve = () => {
  const [results, setResults] = React.useState<OpenLibraryResults[]>([]);

  const searchTerms = (data: OpenLibraryResults) => {
    fetch('https://openlibrary.org/search.json?q=climate+change&limit=10&page=1', {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((newResults) => setResults([newResults, ...results]));
  };

  return <div>Hello archieve.org</div>;
};

export default Archieve;
