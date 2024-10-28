import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);

  return (
    <section className={styles.wrapper}>
      {quotes.map((quote) => (
        <section key={quote.author} className={styles.quote__wrapper}>
          <article className={styles.info}>
            <div style={styles.title}>
              <h2>{quote.author}</h2>
            </div>
            <p>{quote.fullText}</p>
            <a href={quote.link} target="_blank" rel="noopener noreferrer">
              Source link
            </a>
          </article>
          <section className={styles.sides}>
            <article>
              {quote.tags.length !== 0 ? <h3>Tags</h3> : ''}
              <div className={styles.side__items}>
                {quote.tags.map((tag) => (
                  <p key={tag}>{`#${tag}`}</p>
                ))}
              </div>
            </article>
            <article>
              {quote.references.length !== 0 ? <h3>References</h3> : ''}
              <div className={styles.side__items}>
                {quote.references.map((reference) => (
                  <p key={reference}>{reference}</p>
                ))}
              </div>
            </article>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Quotes;
