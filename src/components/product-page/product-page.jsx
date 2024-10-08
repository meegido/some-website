import styles from './product-page.module.css';
import { PRODUCT_IMAGES } from '../../assets/images/product/product-images';

const ProductPage = () => {
  return (
    <>
      <div className={styles.page__wrapper}>
        <section className={styles.carousel__wrapper}>
          {PRODUCT_IMAGES.map((imageUrl) => {
            return <img key={crypto.randomUUID()} src={imageUrl} alt="Product image" />;
          })}
        </section>
        <section className={styles.product__wrapper}>
          <div className={styles.product__description}>
            <h3>Sneaker Company</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect causal wear companion. Featuring a durable
              rubber outer sole, they&rsquo;ll withstand everything the weather can offer.
            </p>
          </div>
          <div className={styles.product__price}>
            <p>$125.00</p>
            <p>50%</p>
            <p>$250</p>
          </div>
          <div className={styles.product__cart}>
            <div className={styles.product__quantity}>
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
            <div className={styles.button__wrapper}>
              <button className={styles.add__button}>Add to cart</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
