import styles from './product-page.module.css';
import React from 'react';
import ProductGallery from './components/product-gallery';
import { product } from './product-content';
import ProductQuantity from './components/product-quantity';
import { CartContext } from '../../providers/cart-provider';
import { ChevronDown } from 'lucide-react';

const ProductPage = () => {
  const { addToCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const price =
    product.discount && product.discount !== undefined
      ? (product.price * product.discount) / 100
      : product.price;

  const handleIncreaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity <= 0) {
        return 0;
      }
      return currentQuantity - 1;
    });
  };

  const handleAddToCart = React.useCallback(() => {
    if (quantity === 0) {
      return;
    }

    addToCart(product.id, price, quantity);
  }, [price, quantity, addToCart]);

  return (
    <>
      <div className={styles.page__wrapper}>
        <section className={styles.project__content}>
          <h2>E-commerce product page</h2>
          <article className={styles.about}>
            <div className={styles.description}>
              <p>
                The project is a a challenge from{' '}
                <a
                  href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Mentor
                </a>
                . It is about building a e-commerce product page fully functional and get it looking
                as close to the design possible.
              </p>
              <div className={styles.close__wrapper}>
                <ChevronDown size={32} />
              </div>
            </div>
            <div className={styles.requirements__wrapper}>
              <div className={styles.requirements}>
                <h3>Requirements</h3>
                <ul>
                  <li>
                    <p>Open a lightbox gallery by clicking on the large product image</p>
                  </li>
                  <li>
                    <p>Switch the large product image by clicking on the small thumbnail images</p>
                  </li>
                  <li>
                    <p>Add items to the cart</p>
                  </li>
                  <li>
                    <p>View the cart and remove items from it</p>
                  </li>
                  <li>
                    <p>
                      View the optimal layout for the site depending on their device's screen size
                    </p>
                  </li>
                  <li>
                    <p>See hover states for all interactive elements on the page</p>
                  </li>
                </ul>
              </div>
              <div className={styles.learnings__wrapper}>
                <div className={styles.improvements}>
                  <h3>Improvements</h3>
                  <ul>
                    <li>
                      <p>Change cart icon to trash icon when the cart items quantity is one.</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.learnings}>
                  <h2>Learnings</h2>
                  <div className={styles.learnings}>
                    <article className={styles.tags__container}>
                      <div className={styles.learning__tags}>
                        <p>React Lifecycle</p>
                        <p>State management</p>
                        <p>Conditional rendering</p>
                        <p>Custom hooks</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className={styles.project}>
          <ProductGallery images={product.photos} />
          <section className={styles.product__wrapper}>
            <div className={styles.product__description}>
              <h3>{product.brand}</h3>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <div className={styles.product__price}>
              <div>
                <p>${price}</p>
                <p>{product.discount}%</p>
              </div>
              <p className={styles.final__price}>${product.price}</p>
            </div>
            <div className={styles.product__cart}>
              <ProductQuantity
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              >
                <p aria-label="product-quantity">{quantity}</p>
              </ProductQuantity>
              <div className={styles.button__wrapper}>
                <button className={styles.add__button} onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
