import { BadgePlus } from 'lucide-react';
import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';
import Button from '../../shared/components/button/button';
import Quote from './components/quote';
import AddQuoteModal from './components/add-quote';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleAddQuote = (newQuote) => {
    console.log(newQuote);
    setQuotes([...quotes, newQuote]);
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.add}>
        <Button onClick={openModal} aria-label="add quote">
          <BadgePlus size={40} strokeWidth={1} />
        </Button>
      </section>
      {isModalOpen && <AddQuoteModal handleAddQuote={handleAddQuote} />}
      {quotes.map((quote) => (
        <Quote key={quote.author} quote={quote} />
      ))}
    </section>
  );
};

export default Quotes;
