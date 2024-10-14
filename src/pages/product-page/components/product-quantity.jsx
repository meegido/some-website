import React from 'react';
import styles from './product-quantity.module.css';

const ProductQuantity = ({ productQuantity, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <div className={styles.product__quantity}>
      <button onClick={handleDecreaseQuantity}>-</button>
      <p data-testid="product-quantity">{productQuantity}</p>
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
  );
};

export default React.memo(ProductQuantity);
