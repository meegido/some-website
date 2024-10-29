import styles from './product-page.module.css';
import React from 'react';
import ProductGallery from './components/product-gallery';
import { product } from './product-content';
import ProductQuantity from './components/product-quantity';
import { CartContext } from '../../providers/cart-provider';

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
        <section className={styles.project__content}>
          <article className={styles.about}>
            <h2>Te project</h2>
            <div className={styles.description}>
              <p>
                The project is to build a e-commerce product page fully functional and get it
                looking as close to the design possible.
              </p>
              <p>The challenge to me was to update the card in the header through React state.</p>
            </div>
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
            <div className={styles.improvements}>
              <h3>Improvements</h3>
              <ul>
                <li>
                  <p>Change cart icon to trash when the cart items quantity is one</p>
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.learnings}>
            <h2>Learnings</h2>
            <div className={styles.learnings}>
              <article>
                <div className={styles.learning__title}>
                  <h4>Selected gallery image</h4>
                  <p>Conditional rendering</p>
                </div>
                <p>When the selected image is one or two</p>
              </article>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
