import React from 'react';
import { getTerm, OpenLibraryResult } from './api/open-library-api';

const Archieve = () => {
  const [results, setResults] = React.useState<OpenLibraryResult[]>([]);

  React.useEffect(() => {
    const fetchResults = async () => {
      const newResults = await getTerm({
        term: 'climate+change',
        limit: 10,
        page: 1,
      });
      setResults([newResults, ...results]);
    };

    fetchResults();
  }, [results]);

  return <div>Hello archieve.org</div>;
};

export default Archieve;
