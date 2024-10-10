import styles from './product-page.module.css';
import { PRODUCT_IMAGES } from '../../assets/images/product/product-images';
import React from 'react';
import ProductDetail from './components/product-detail';
import ProductGallery from './components/product-gallery';

const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex + 1) % PRODUCT_IMAGES.length;
      // return prevIndex === PRODUCT_IMAGES.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      return (prevIndex - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length;
      // return prevIndex === 0 ? PRODUCT_IMAGES.length - 1 : prevIndex - 1;
    });
  };

  return (
    <>
      <div className={styles.page__wrapper}>
        <ProductGallery
          images={PRODUCT_IMAGES}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductPage;
