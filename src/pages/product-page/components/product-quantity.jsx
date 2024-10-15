import React from 'react';
import styles from './product-quantity.module.css';
import { Minus, Plus } from 'lucide-react';

const ProductQuantity = ({ children, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <div className={styles.product__quantity}>
      <button onClick={handleDecreaseQuantity}>
        <Minus />
      </button>
      {children}
      <button onClick={handleIncreaseQuantity}>
        {' '}
        <Plus />
      </button>
    </div>
  );
};

export default React.memo(ProductQuantity);
