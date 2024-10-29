import styles from './product-quantity.module.css';
import { Minus, Plus } from 'lucide-react';

const ProductQuantity = ({ children, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <div className={styles.product__quantity}>
      <button onClick={handleDecreaseQuantity} aria-label="Decrease product quantity">
        <Minus />
      </button>
      {children}
      <button onClick={handleIncreaseQuantity} aria-label="Increase product quantity">
        <Plus />
      </button>
    </div>
  );
};

export default ProductQuantity;
