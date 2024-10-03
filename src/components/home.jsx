import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import tipCalculatorPreview from '../assets/images/tip-calculator-preview.jpg'; // Import using the alias
import Button from './shared/button/button';

const Home = () => {
  const navigate = useNavigate();
  const handlePorjectOnClick = () => {
    navigate('tip-calculator');
  };
  return (
    <>
      <section className={styles['page__wrapper']}>
        <h1 className={styles['page__title']}>🍪 Projects </h1>
        <section className={styles['projects__preview']}>
          <article className={styles.card}>
            <h2>Tip calculator</h2>
            <img
              className={styles.thumbnail}
              src={tipCalculatorPreview}
              alt="Tip Calculator preview"
            />
            <Button type="button" onClick={handlePorjectOnClick}>
              <span>Play</span>
              <span>💶</span>
            </Button>
          </article>
        </section>
      </section>
    </>
  );
};

export default Home;
