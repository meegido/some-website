import styles from './product-page.module.css';
import React from 'react';
import ProductGallery from './components/product-gallery';
import { product } from './product-content';

const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(product.price);
  const [discountPrice, setDiscountPrice] = React.useState(0);

  React.useEffect(() => {
    product.discount && product.discount !== undefined
      ? setDiscountPrice((product.price * product.discount) / 100)
      : setDiscountPrice(product.price);
  }, []);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex + 1) % product.photos.length;
      // return prevIndex === product.photos.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex - 1 + product.photos.length) % product.photos.length;
      // return prevIndex === 0 ? PRODUCT.photos.length - 1 : prevIndex - 1;
    });
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
