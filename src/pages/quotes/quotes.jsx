import { BadgePlus } from 'lucide-react';
import { QUOTES } from './quotes-data';
import styles from './quotes.module.css';
import React from 'react';
import Button from '../../shared/components/button/button';
import Quote from './components/quote';
import InputField from '../../shared/components/input-field/input-field';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(QUOTES);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [author, setAuthor] = React.useState('');
  const [fullText, setFullText] = React.useState('');
  const [link, setLink] = React.useState('');
  const [concepts, setConcepts] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [references, setReferences] = React.useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addQuote = (event) => {
    event.preventDefault();
    console.log({ concepts });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ [name]: value });

    if (name === 'author') {
      setAuthor(value);
    }

    if (name === 'fullText') {
      setFullText(value);
    }

    if (name === 'link') {
      setLink(value);
    }

    if (name === 'concepts') {
      setConcepts(value);
    }

    if (name === 'tags') {
      setTags(value);
    }

    if (name === 'references') {
      setReferences(value);
    }
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.add}>
        <Button onClick={openModal}>
          <BadgePlus size={40} strokeWidth={1} />
        </Button>
      </section>
      {isModalOpen && (
        <form type="submit">
          <InputField
            label="Autor"
            id="author"
            type="text"
            name="author"
            value={author}
            onChange={handleInputChange}
          />
          <InputField
            label="Quote"
            id="fullText"
            type="text"
            name="fullText"
            value={fullText}
            onChange={handleInputChange}
          />
          <InputField
            label="Source link"
            id="link"
            type="text"
            name="link"
            value={link}
            onChange={handleInputChange}
          />
          <InputField
            label="Concepts related to the quote (separated by commas)"
            id="concepts"
            type="text"
            name="concepts"
            value={concepts}
            onChange={handleInputChange}
          />
          <InputField
            label="Outside text's references (separated by commas)"
            id="references"
            type="text"
            name="references"
            value={references}
            onChange={handleInputChange}
          />
          <InputField
            label="Tags (separated by commas)"
            id="tags"
            type="text"
            name="tags"
            value={tags}
            onChange={handleInputChange}
          />
          <Button onClick={addQuote}>Submit</Button>
        </form>
      )}
      <Quote quotes={quotes}></Quote>
    </section>
  );
};

export default Quotes;
