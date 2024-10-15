import styles from './product-page.module.css';
import React from 'react';
import ProductGallery from './components/product-gallery';
import { product } from './product-content';
import ProductQuantity from './components/product-quantity';
import { CartContext } from '../../providers/cart-provider';

const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [discountPrice, setDiscountPrice] = React.useState(product.price);
  const [productQuantity, setProductQuantity] = React.useState(0);

  const { addToCart } = React.useContext(CartContext);

  React.useEffect(() => {
    product.discount && product.discount !== undefined
      ? setDiscountPrice((product.price * product.discount) / 100)
      : setDiscountPrice(product.price);
  }, []);

  const handleAddToCart = React.useCallback(() => {
    addToCart(discountPrice, productQuantity);
  }, [discountPrice, productQuantity, addToCart]);

  const handleNextImage = React.useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex + 1) % product.photos.length;
      // return prevIndex === product.photos.length - 1 ? 0 : prevIndex + 1;
    });
  }, []);

  const handlePrevImage = React.useCallback(() => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex - 1 + product.photos.length) % product.photos.length;
      // return prevIndex === 0 ? PRODUCT.photos.length - 1 : prevIndex - 1;
    });
  }, []);

  const handleIncreaseQuantity = () => {
    setProductQuantity((currentQuantity) => currentQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQuantity((currentQuantity) => currentQuantity - 1);
  };

  return (
    <>
      <div className={styles.page__wrapper}>
        <ProductGallery
          images={product.photos}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
        <section className={styles.product__wrapper}>
          <div className={styles.product__description}>
            <h3>{product.brand}</h3>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
          <div className={styles.product__price}>
            <div>
              <p>${discountPrice}</p>
              <p>{product.discount}%</p>
            </div>
            <p className={styles.final__price}>${product.price}</p>
          </div>
          <div className={styles.product__cart}>
            <ProductQuantity
              productQuantity={productQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            >
              <p data-testid="product-quantity">{productQuantity}</p>
            </ProductQuantity>
            <div className={styles.button__wrapper}>
              <button className={styles.add__button} onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
