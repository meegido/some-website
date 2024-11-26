import React from 'react';
import { getTerm, OpenLibraryDoc, OpenLibraryResult } from './api/open-library-api';

const Archieve = () => {
  const [results, setResults] = React.useState<OpenLibraryResult>({
    numFound: 0,
    docs: [],
  });

  React.useEffect(() => {
    const fetchResults = async () => {
      const response = await getTerm({
        term: 'climate+change',
        limit: 10,
        page: 1,
      });
      console.log('Response:', response);

      setResults(response);
    };

    fetchResults();
  }, []);
  const docs = results.docs;
  console.log('Rendering docs:', docs);
  return (
    <div>
      {docs?.length > 0 ? (
        docs.map((document: OpenLibraryDoc) => (
          <article key={document.key}>
            <h3>{document.title}</h3>
            <img
              src={`https://covers.openlibrary.org/b/id/${document.cover_i}-M.jpg`}
              alt={document.title}
            />
          </article>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Archieve;
