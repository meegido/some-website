import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import tipCalculatorPreview from '../assets/images/tip-calculator-preview.jpg';
import ecommercePagePreview from '../assets/images/product-page-ecommerce.jpg';
import Button from './shared/button/button';

const Home = () => {
  const navigate = useNavigate();
  const handlePorjectOnClick = (path) => {
    navigate(path);
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
            <Button type="button" onClick={() => handlePorjectOnClick('tip-calculator')}>
              <span>Play</span>
              <span>💶</span>
            </Button>
          </article>
          <article className={styles.card}>
            <h2>E-commerce product page</h2>
            <img
              className={styles.thumbnail}
              src={ecommercePagePreview}
              alt="E-commerce product page"
            />
            <Button type="button" onClick={() => handlePorjectOnClick('product-page')}>
              <span>Play</span>
              <span>🛒</span>
            </Button>
          </article>
        </section>
      </section>
    </>
  );
};

export default Home;
