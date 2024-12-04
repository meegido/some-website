import React from 'react';
import { getTerm, OpenLibraryDoc, OpenLibraryResult } from './api/open-library-api';

const Archieve = () => {
  const [results, setResults] = React.useState<OpenLibraryResult>({
    numFound: 0,
    docs: [],
  });
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  console.log(searchTerm);

  React.useEffect(() => {
    const fetchResults = async () => {
      const response = await getTerm({
        term: searchTerm,
        limit: 10,
        page: 1,
      });

      setResults(response);
    };

    fetchResults();
  }, []);

  const handleChangeTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const docs = results.docs;

  return (
    <div>
      <article>
        <form role="search">
          <label htmlFor="search">Search this site</label>
          <input
            type="search"
            role="searchbox"
            aria-description="search results will appear below"
            placeholder="Search by term in open-library.org"
            id="search"
            value={searchTerm}
            onChange={(event) => handleChangeTerm(event)}
          />
        </form>
      </article>
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
