import styles from './product-page.module.css';
import { PRODUCT_IMAGES, PRODUCT_THUMBNAILS } from '../../assets/images/product/product-images';
import ProductDetail from './product-detail';
import React from 'react';

const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      console.log(prevIndex, 'next image');
      return prevIndex === PRODUCT_IMAGES.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      console.log(prevIndex, 'PREV image');
      return prevIndex === 0 ? PRODUCT_IMAGES.length - 1 : prevIndex - 1;
    });
  };

  return (
    <>
      <div className={styles.page__wrapper}>
        <div className={styles.carousel}>
          <section className={styles.carousel__wrapper}>
            {PRODUCT_IMAGES.map((imageUrl) => (
              <img
                key={crypto.randomUUID()}
                src={imageUrl}
                alt="Product image"
                style={{ translate: `${-100 * selectedImageIndex}%` }}
              />
            ))}
          </section>
          <section className={styles.carousel__controls}>
            <button onClick={handlePrevImage}>←</button>
            <button onClick={handleNextImage}>→</button>
          </section>
          <section className={styles.thumbnails__wrapper}>
            {PRODUCT_THUMBNAILS.map((imageUrl) => (
              <button key={crypto.randomUUID()}>
                <img key={crypto.randomUUID()} src={imageUrl} alt="Thumbnail image" />
              </button>
            ))}
          </section>
        </div>
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductPage;
