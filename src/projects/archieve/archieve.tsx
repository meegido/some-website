import React from 'react';
import { getTerm, OpenLibraryDoc, OpenLibraryResult } from './api/open-library-api';
import styles from './archieve.module.css';
import useToggle from '../../hooks/use-toggle';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StarRating from './components/stars/star-rating';
import Pagination from './components/pagination/pagination';

type SearchStatus = 'idle' | 'error' | 'success' | 'loading';

const Archieve = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [status, setStatus] = React.useState<SearchStatus>('idle');
  const [results, setResults] = React.useState<OpenLibraryResult>({
    numFound: 0,
    docs: [],
  });
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isDorpdownOpen, setIsDorpdownOpen] = React.useState<{ [key: string]: boolean }>({});
  const dropdownRef = React.useRef<HTMLUListElement>(null);
  const limit = 5;

  const fetchResults = async () => {
    setStatus('loading');

    try {
      const response = await getTerm({
        term: searchTerm,
        limit: limit,
        page: page,
      });

      setResults(response);
      setTotalPages(Math.ceil(response.numFound / limit));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  React.useEffect(() => {
    if (searchTerm) {
      fetchResults();
    }
  }, [page]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchResults();
  };

  const handlePageChange = (direction: 'next' | 'previous') => {
    setPage((prevPage: number) => {
      if (direction === 'next') return prevPage + 1;
      if (direction === 'previous') return Math.max(prevPage - 1, 1) || 1;
      return prevPage;
    });
  };

  const handleDropdown = (id: string) => {
    setIsDorpdownOpen((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
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
            docs.map((document: OpenLibraryDoc) => {
              const isOpen = isDorpdownOpen[document.key] || false;
              return (
                <article key={document.key} className={styles.document__card}>
                  <div className={styles.document__wrapper}>
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
                        <div className={styles.borrow}>
                          {document.ebook_access === 'public' && (
                            <p className={styles.public}>Bookable</p>
                          )}
                          {document.ebook_access === 'no_ebook' && (
                            <p className={styles.no__ebook}>Not in library</p>
                          )}
                          {document.ebook_access === 'borrowable' && (
                            <p className={styles.borrowable}>Borrowable</p>
                          )}
                        </div>
                      </article>
                      <div className={styles.document__sentence}>
                        {document.first_sentence && <p>{document.first_sentence}</p>}
                      </div>
                      <article className={styles.document__info}>
                        <div className={styles['document__info--item']}>
                          {document.publish_place && (
                            <>
                              <span>Published place: </span>
                              <span>{document.publish_place[0]}.</span>
                            </>
                          )}
                          <div className={styles['document__info--item']}>
                            <span>Year: </span>
                            <span>{document.publish_year[0]}.</span>
                          </div>{' '}
                          {document.number_of_pages_median && (
                            <div>
                              <span>Number of pages: </span>
                              <span>{document.number_of_pages_median}.</span>
                            </div>
                          )}{' '}
                        </div>
                      </article>
                      <article className={styles.document__related}>
                        {document.subject && document.subject_key && (
                          <div>
                            <div className={styles.open__content}>
                              <h4>Related topics</h4>
                              <button onClick={() => handleDropdown(document.key)}>
                                {isOpen ? (
                                  <ChevronUp size={20} strokeWidth={3} />
                                ) : (
                                  <ChevronDown size={20} strokeWidth={3} />
                                )}
                              </button>
                            </div>
                            {isOpen && (
                              <ul className={styles.related__list} ref={dropdownRef}>
                                {document.subject.map((sub, index) => {
                                  return (
                                    <li key={sub}>
                                      <a
                                        className={styles.subject}
                                        href={`https://openlibrary.org/subjects/${document.subject_key[index]}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {sub}.{'  '}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        )}
                        {document.person && (
                          <div>
                            <h4>Related people</h4>
                            <ul className={styles.related__list}>
                              {document.person?.map((individual, index) => (
                                <li key={individual}>
                                  <a
                                    className={styles.subject}
                                    href={`https://openlibrary.org/subjects/person:${document.person?.[index]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {individual}.{'  '}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </article>
                    </section>
                  </div>
                  <div className={styles.borrow__info}>
                    <StarRating
                      rating={document.ratings_average}
                      ratingCount={document.ratings_count}
                    />
                    <div className={`${styles.borrow} ${styles.reading}`}>
                      <p className={styles.info}>
                        <span>{document.readinglog_count}</span> <span>Reading</span>
                      </p>
                      <p className={styles.info}>
                        <span>{document.want_to_read_count}</span> <span>Want to read</span>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
        </section>

        {status === 'error' && <h2>Something went wrong, please try a different search</h2>}
      </section>
      {docs && docs.length > 0 && (
        <Pagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Archieve;
