import React from 'react';
import Button from '../../../shared/components/button/button';
import InputField from '../../../shared/components/input-field/input-field';
import styles from './add-quote.module.css';
import { createPortal } from 'react-dom';
import { X as Close } from 'lucide-react';

const AddQuoteModal = ({ handleAddQuote, handleDismiss }) => {
  const [newQuote, setNewQuote] = React.useState({
    id: React.useId(),
    author: '',
    text: '',
    link: '',
    concepts: [],
    references: [],
    tags: [],
  });
  const [formError, setFormError] = React.useState('');

  const handleNewQuoteChange = (event) => {
    const { name, value } = event.target;

    setNewQuote(() => {
      const arrayValue = [];
      if (name === 'tags' || name === 'concepts' || name === 'references') {
        return {
          ...newQuote,
          [name]: [...arrayValue, value],
        };
      }

      return {
        ...newQuote,
        [name]: value,
      };
    });
  };

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.backdrop} onClick={handleDismiss} />
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label="Add quote">
        <button className={styles.close__button} onClick={handleDismiss}>
          <Close />
        </button>
        <div>
          <h2>Add quote</h2>
          <form
            className={styles.add__form}
            onSubmit={(event) => {
              event.preventDefault();

              if (
                newQuote.author === undefined ||
                newQuote.author.length === 0 ||
                newQuote.text === undefined ||
                newQuote.text.length === 0 ||
                newQuote.tags === undefined ||
                newQuote.tags.length === 0
              ) {
                setFormError(`This field is required`);
                return;
              }

              handleAddQuote(newQuote);
              setNewQuote({
                id: '',
                author: '',
                text: '',
                link: '',
                concepts: [],
                references: [],
                tags: [],
              });
            }}
          >
            <div className={`${formError ? styles.input__group : ''}`}>
              <InputField
                className={styles.input__error}
                label="Author"
                placeholder="Nelson Mandela"
                id="author"
                type="text"
                name="author"
                value={newQuote.author}
                onChange={handleNewQuoteChange}
                aria-required="true"
              />
              {formError ? <p className={styles.error}>{formError}</p> : ''}
            </div>
            <div className={styles.text}>
              <label htmlFor="text">Quote</label>
              <textarea
                className={`${formError ? styles.input__error : ''}`}
                placeholder="Nelson Mandela said or wrote..."
                name="text"
                id="text"
                value={newQuote.text}
                onChange={handleNewQuoteChange}
                aria-required="true"
              />
              {formError ? <p className={styles.error}>{formError}</p> : ''}
            </div>
            <div className={`${formError ? styles.input__group : ''}`}>
              <InputField
                className={styles.input__error}
                label="Tags inside the quote (separated by commas)"
                placeholder="Tags list"
                id="tags"
                type="text"
                name="tags"
                value={newQuote.tags}
                onChange={handleNewQuoteChange}
                aria-required="true"
              />
              {formError ? <p className={styles.error}>{formError}</p> : ''}
            </div>
            <InputField
              label="Source link"
              placeholder="The link where you've found the quote if there is"
              id="link"
              type="text"
              name="link"
              value={newQuote.link}
              onChange={handleNewQuoteChange}
            />
            <InputField
              label="Quote's related concepts (separated by commas)"
              placeholder="peace, no-violent fight"
              id="concepts"
              type="text"
              name="concepts"
              value={newQuote.concepts}
              onChange={handleNewQuoteChange}
            />
            <InputField
              label="People referenced (separated by commas)"
              placeholder="People the author mentions"
              id="references"
              type="text"
              name="references"
              value={newQuote.references}
              onChange={handleNewQuoteChange}
            />

            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>,
    document.querySelector('#quote-modal-root')
  );
};

export default AddQuoteModal;
