import styles from './product-page.module.css';
import { PRODUCT_IMAGES } from '../../assets/images/product/product-images';
import ProductDetail from './product-detail';
import React from 'react';
import ThumbnailButton from './thumbnail-button';

const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(() => {
    return window.innerWidth < 768;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          {isMobile ? (
            <section className={styles.carousel__controls}>
              <button onClick={handlePrevImage}>←</button>
              <button onClick={handleNextImage}>→</button>
            </section>
          ) : (
            <section className={styles.thumbnails__wrapper}>
              {PRODUCT_IMAGES.map((imageUrl, index) => {
                const isSelected = selectedImageIndex === index;
                return (
                  <ThumbnailButton
                    key={crypto.randomUUID()}
                    imageUrl={imageUrl}
                    index={index}
                    isSelected={isSelected}
                    setSelectedImageIndex={setSelectedImageIndex}
                  />
                );
              })}
            </section>
          )}
        </div>
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductPage;
