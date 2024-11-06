import styles from './quote.module.css';

const Quote = ({ quote }) => {
  return (
    <section className={styles.quote__wrapper}>
      {quote ? (
        <section className={styles.quote}>
          <article className={styles.info}>
            <div className={styles.title}>
              <h2>{quote.author}</h2>
              <span className={styles.tags}>
                {quote.tags.length > 1
                  ? quote.tags.map((tag) => <p key={tag}>{`#${tag}`}</p>)
                  : quote.tags}
              </span>
            </div>
            <p>{quote.text}</p>
            <a href={quote.link} target="_blank" rel="noopener noreferrer">
              Source link
            </a>
          </article>
          <section className={styles.sides}>
            <article>
              {quote.references.length !== 0 ? <h3>References</h3> : ''}
              <span className={styles.side__items}>
                {quote.references.length > 1
                  ? quote.references.map((reference) => <p key={reference}>{reference}</p>)
                  : quote.references}
              </span>
            </article>
            <article>
              {quote.concepts.length !== 0 ? <h3>Concepts</h3> : ''}
              <span className={styles.side__items}>
                {quote.concepts.length > 1
                  ? quote.concepts.map((concept) => {
                      return <p key={concept}>{concept}</p>;
                    })
                  : quote.concepts}
              </span>
            </article>
          </section>
        </section>
      ) : (
        <h2>There are no quotes to show</h2>
      )}
    </section>
  );
};

export default Quote;
