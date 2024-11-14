import styles from './product-page.module.css';
import React from 'react';
import ProductGallery from './components/product-gallery';
import { product } from './product-content';
import ProductQuantity from './components/product-quantity';
import { CartContext } from '../../providers/cart-provider';
import CartPopover from '../../shared/components/header/cart-popover/cart-popover';
import ProjectDetails from '../../shared/components/project-details/project-details';

const ProductPage = () => {
  const { addToCart, cart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const cartItem = cart?.length > 0 ? cart[0] : [];
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
        <ProjectDetails />
        <section className={styles.project__wrapper}>
          <header className={styles.header}>
            <CartPopover cartItem={cartItem} />
          </header>
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
        </section>
      </div>
    </>
  );
};

export default ProductPage;
