import styles from './quote.module.css';

const Quote = ({ quotes }) => {
  return (
    <section className={styles.quote__wrapper}>
      {quotes.map((quote) => (
        <section key={quote.author} className={styles.quote}>
          <article className={styles.info}>
            <div className={styles.title}>
              <h2>{quote.author}</h2>
              <div className={styles.tags}>
                {quote.tags.map((tag) => (
                  <p key={tag}>{`#${tag}`}</p>
                ))}
              </div>
            </div>
            <p>{quote.fullText}</p>
            <a href={quote.link} target="_blank" rel="noopener noreferrer">
              Source link
            </a>
          </article>
          <section className={styles.sides}>
            <article>
              {quote.references.length !== 0 ? <h3>References</h3> : ''}
              <div className={styles.side__items}>
                {quote.references.map((reference) => (
                  <p key={reference}>{reference}</p>
                ))}
              </div>
            </article>
            <article>
              {quote.concepts.length !== 0 ? <h3>Concepts</h3> : ''}
              <div className={styles.side__items}>
                {quote.concepts.map((concept) => (
                  <p key={concept}>{concept}</p>
                ))}
              </div>
            </article>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Quote;
