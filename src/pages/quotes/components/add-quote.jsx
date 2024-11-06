import React from 'react';
import Button from '../../../shared/components/button/button';
import InputField from '../../../shared/components/input-field/input-field';
import styles from './add-quote.module.css';

const AddQuoteModal = ({ handleAddQuote }) => {
  const [newQuote, setNewQuote] = React.useState({
    author: '',
    text: '',
    link: '',
    concepts: [],
    references: [],
    tags: [],
  });

  const handleNewQuoteChange = (event) => {
    const { name, value } = event.target;

    setNewQuote({
      ...newQuote,
      [name]: value,
    });
  };

  return (
    <form
      className={styles.add__form}
      onSubmit={(event) => {
        event.preventDefault();
        handleAddQuote(newQuote);
        setNewQuote({
          author: '',
          text: '',
          link: '',
          concepts: [],
          references: [],
          tags: [],
        });
      }}
    >
      <InputField
        label="Autor"
        id="author"
        type="text"
        name="author"
        value={newQuote.author}
        onChange={handleNewQuoteChange}
      />
      <div className={styles.text}>
        <label htmlFor="quote">Quote</label>
        <textarea
          placeholder="Write the quote's text"
          name="quote"
          id="quote"
          value={newQuote.text}
          onChange={handleNewQuoteChange}
        />
      </div>
      <InputField
        label="Source link"
        id="link"
        type="text"
        name="link"
        value={newQuote.link}
        onChange={handleNewQuoteChange}
      />
      <InputField
        label="Concepts related to the quote (separated by commas)"
        id="concepts"
        type="text"
        name="concepts"
        value={newQuote.concepts}
        onChange={handleNewQuoteChange}
      />
      <InputField
        label="Outside text's references (separated by commas)"
        id="references"
        type="text"
        name="references"
        value={newQuote.references}
        onChange={handleNewQuoteChange}
      />
      <InputField
        label="Tags (separated by commas)"
        id="tags"
        type="text"
        name="tags"
        value={newQuote.tags}
        onChange={handleNewQuoteChange}
      />
      <Button>Add Quote</Button>
    </form>
  );
};

export default AddQuoteModal;
