import React from 'react';
import styles from './product-quantity.module.css';

const ProductQuantity = ({ productQuantity, setProductQuantity }) => {
  console.log(productQuantity, 'product quantity');
  const handleIncreaseQuantity = () => {
    return setProductQuantity(productQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity <= 0) {
      return;
    }
    return setProductQuantity(productQuantity - 1);
  };

  return (
    <div className={styles.product__quantity}>
      <button onClick={handleDecreaseQuantity}>-</button>
      <p>{productQuantity}</p>
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
  );
};

export default React.memo(ProductQuantity);
