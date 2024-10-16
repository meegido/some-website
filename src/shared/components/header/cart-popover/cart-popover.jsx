import React from 'react';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import styles from './cart-popover.module.css';
import productThumbnail from '../../../../assets/images/product/image-product-1.jpg';
import { CartContext } from '../../../../providers/cart-provider';
import { Link } from 'react-router-dom';

const CartPopover = ({ cartItem, cartContentRef, isCartOpen, toggleCart, cartTriggerRef }) => {
  const { removeCart, updateCart } = React.useContext(CartContext);
  const [checkoutQuantity, setCheckoutQuantity] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    if (!cartItem) {
      return;
    }
    setCheckoutQuantity(cartItem.quantity);
  }, [cartItem]);

  React.useEffect(() => {
    if (!cartItem) {
      return;
    }
    setTotalPrice(cartItem.price * checkoutQuantity);
  }, [cartItem, checkoutQuantity]);

  const handleIncreaseQuantity = () => {
    setCheckoutQuantity((current) => current + 1);
  };

  const handleDecreaseQuantity = () => {
    if (checkoutQuantity > 1) {
      setCheckoutQuantity((current) => current - 1);
    }
  };

  const handleRemoveFromCart = () => {
    removeCart(cartItem.id);
  };

  const handleCheckout = () => {
    if (!cartItem) {
      return;
    }
    updateCart(checkoutQuantity, totalPrice);
    window.alert('cart updated! ');
    removeCart(cartItem.id);
    toggleCart(false);
  };

  return (
    <div className={styles.cart__popover}>
      <button onClick={() => toggleCart()} className={styles.header__button} ref={cartTriggerRef}>
        <ShoppingCart size={32} />
      </button>
      {isCartOpen && (
        <div className={styles.cart__wrapper} ref={cartContentRef}>
          <div className={styles.popover__title}>
            <h3>Cart</h3>
          </div>
          {cartItem && cartItem !== Array.isArray([]) ? (
            <section className={styles.cart__content}>
              <div className={styles.content__wrapper}>
                <img
                  className={styles.cart__thumbnail}
                  src={productThumbnail}
                  alt="Image product cart"
                />
                <div className={styles.with__buttons}>
                  <div className={styles.product__details}>
                    <p>{cartItem.title}</p>
                    <div className={styles.cart__price}>
                      <p>{`$${cartItem.price}`}</p>
                      <p>x</p>
                      <p>{checkoutQuantity}</p>
                      <p>
                        <b>{`$${totalPrice}`}</b>
                      </p>
                    </div>
                  </div>
                  <div className={styles.remove}>
                    <button onClick={handleIncreaseQuantity}>
                      <Plus size={20} />
                    </button>
                    {checkoutQuantity > 1 ? (
                      <button onClick={handleDecreaseQuantity}>
                        <Minus size={20} />
                      </button>
                    ) : (
                      <button onClick={handleRemoveFromCart}>
                        <Trash size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.cart__button}>
                <button className={!cartItem ? `${styles.disable}` : ''} onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </section>
          ) : (
            <div className={styles.empty__cart}>
              <p>No products in the cart yet.</p>
              <p>
                <Link to="product-page">Go to the Product page</Link> to add some.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPopover;
