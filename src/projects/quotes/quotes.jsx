import { BadgePlus } from 'lucide-react';
import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';
import Button from '../../shared/components/button/button';
import Quote from './components/quote';
import AddQuoteModal from './components/add-quote';
import useToggle from '../../hooks/use-toggle';
import ProjectDetails from '../../shared/components/project-details/project-details';
import PROJECT__DATA from '../../shared/components/project-details/project-details-data.js';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  const projectData = PROJECT__DATA.find((project) => project.id === 'quotes');

  const handleAddQuote = (newQuote) => {
    setQuotes([newQuote, ...quotes]);
    toggleIsModalOpen(false);
  };

  return (
    <section className={styles.wrapper}>
      <ProjectDetails project={projectData} className={`${styles.transparent} `} />
      <section className={styles.project__wrapper}>
        <section className={styles.add}>
          <Button onClick={toggleIsModalOpen} aria-label="add quote">
            <BadgePlus size={48} strokeWidth={1.5} />
            <span>New quote</span>
          </Button>
        </section>
        {isModalOpen && (
          <AddQuoteModal
            handleAddQuote={handleAddQuote}
            handleDismiss={() => toggleIsModalOpen(false)}
          />
        )}
        {quotes.map((quote) => (
          <Quote key={quote.author} quote={quote} />
        ))}
      </section>
    </section>
  );
};

export default Quotes;
