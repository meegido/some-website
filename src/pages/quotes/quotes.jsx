import { BadgePlus } from 'lucide-react';
import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';
import Button from '../../shared/components/button/button';
import Quote from './components/quote';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);

  return (
    <section className={styles.wrapper}>
      <section className={styles.add}>
        <Button>
          <BadgePlus size={40} strokeWidth={1} />
        </Button>
      </section>
      <Quote quotes={quotes}></Quote>
    </section>
  );
};

export default Quotes;
