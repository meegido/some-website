import { BadgePlus } from 'lucide-react';
import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';
import Button from '../../shared/components/button/button';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);

  return (
    <section className={styles.wrapper}>
      <section className={styles.add}>
        <Button>
          <BadgePlus size={40} strokeWidth={1} />
        </Button>
      </section>
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
    </section>
  );
};

export default Quotes;
