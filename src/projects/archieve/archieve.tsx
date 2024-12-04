import React from 'react';
import { getTerm, OpenLibraryDoc, OpenLibraryResult } from './api/open-library-api';

type SearchStatus = 'idle' | 'error' | 'success' | 'loading';

const Archieve = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [status, setStatus] = React.useState<SearchStatus>('idle');
  const [results, setResults] = React.useState<OpenLibraryResult>({
    numFound: 0,
    docs: [],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await getTerm({
        term: searchTerm,
        limit: 10,
        page: 1,
      });

      setResults(response);
      setStatus('success');
    } catch (error) {
      console.error('Error fetching results:', error);
      setStatus('error');
    }
  };

  const docs = results.docs;

  return (
    <div>
      <article>
        <form role="search" onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            required={true}
            type="search"
            role="searchbox"
            aria-description="search results will appear below"
            placeholder="Search by term in open-library.org"
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button>Go!</button>
        </form>
      </article>
      {status === 'success' &&
        docs.map((document: OpenLibraryDoc) => (
          <article key={document.key}>
            <h3>{document.title}</h3>
            <img
              src={`https://covers.openlibrary.org/b/id/${document.cover_i}-M.jpg`}
              alt={document.title}
            />
          </article>
        ))}
      {status === 'idle' && <h1>Wellcome</h1>}
      {status === 'error' && <h2>Something went wrong, please try a different search</h2>}
    </div>
  );
};

export default Archieve;
