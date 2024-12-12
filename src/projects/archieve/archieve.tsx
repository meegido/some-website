import React from 'react';
import { getTerm, OpenLibraryDoc, OpenLibraryResult } from './api/open-library-api';
import styles from './archieve.module.css';

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
      setStatus('error');
    }
  };

  const docs = results.docs;

  return (
    <div className={styles.project__wrapper}>
      <h1>Search in Open Library</h1>
      <section className={styles.project}>
        <form role="search" onSubmit={handleSubmit} className={styles.search__wrapper}>
          <label htmlFor="search">Search in Open Library</label>
          <div>
            <input
              required={true}
              type="search"
              role="searchbox"
              aria-description="search results will appear below"
              placeholder="Search by term"
              id="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button>Search</button>
          </div>
        </form>
        <section className={styles.results__wrapper}>
          {status === 'success' &&
            docs.map((document: OpenLibraryDoc) => (
              <article key={document.key} className={styles.document__wrapper}>
                <div className={styles.document__image}>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${document.cover_i}-M.jpg`}
                    alt={document.title}
                  />
                </div>
                <section className={styles.document__details}>
                  <article className={styles.document__intro}>
                    <div className={styles.details__title}>
                      <span>
                        <h3>{document.title}</h3>
                      </span>
                      <span>by</span>{' '}
                      <span>
                        {document?.person && document?.person.length <= 1
                          ? document.person
                          : document.author_name}
                      </span>
                    </div>
                    <div>{document.first_sentence && <p>{document.first_sentence}</p>}</div>
                    <div>
                      <p>Borrowable</p>
                    </div>
                  </article>
                  <article className={styles.document__info}>
                    <div>
                      {document.publish_place && (
                        <span>Published place: {document.publish_place[0]}. </span>
                      )}
                      <span>Year: {document.publish_year[0]}.</span>{' '}
                      {document.number_of_pages_median && (
                        <span>Number of pages: {document.number_of_pages_median}.</span>
                      )}{' '}
                    </div>
                  </article>
                  <article>
                    {document.subject && document.subject_key && (
                      <div>
                        <p>Related topics</p>
                        <ul className={styles.subject__list}>
                          {document.subject.map((subject, index) => (
                            <li key={index}>
                              <a
                                className={styles.subject}
                                href={`https://openlibrary.org/subjects/${document.subject_key[index]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {subject}.{' '}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {document.person && (
                      <>
                        <p>Related people</p>
                        <ul>
                          {document.person?.map((individual, index) => (
                            <li key={individual}>
                              <a
                                className={styles.subject}
                                href={`https://openlibrary.org/subjects/person:${document.person?.[index]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {individual}.{' '}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </section>
              </article>
            ))}
        </section>

        {status === 'error' && <h2>Something went wrong, please try a different search</h2>}
      </section>
    </div>
  );
};

export default Archieve;
