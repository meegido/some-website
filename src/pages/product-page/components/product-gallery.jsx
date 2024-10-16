import styles from './product-gallery.module.css';
import ThumbnailButton from './thumbnail-button';
import useIsMobile from '../../../hooks/use-window-resize';
import React from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import ProductLightbox from './product-lightbox';

const ProductGallery = ({
  images,
  handlePrevImage,
  handleNextImage,
  setSelectedImageIndex,
  selectedImageIndex,
  showLightboxImage,
  isLightboxOpen,
  toggleLightBox,
  lightboxImageIndex,
  handleLightboxNextImage,
  handleLightboxPrevImage,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.carousel}>
      <section className={styles.carousel__wrapper}>
        {images.map((imageUrl, index) => (
          <img
            key={crypto.randomUUID()}
            src={imageUrl}
            alt={`Product image ${index}`}
            style={{ translate: `${-100 * selectedImageIndex}%` }}
            onClick={() => showLightboxImage(index)}
          />
        ))}
        {isLightboxOpen ? (
          <ProductLightbox
            toggleLightBox={toggleLightBox}
            handleLightboxPrevImage={handleLightboxPrevImage}
            handleLightboxNextImage={handleLightboxNextImage}
            lightboxImageIndex={lightboxImageIndex}
            images={images}
          />
        ) : (
          ''
        )}
      </section>
      {isMobile ? (
        <section className={styles.carousel__controls}>
          <button onClick={handlePrevImage}>
            <MoveLeft />
          </button>
          <button onClick={handleNextImage}>
            <MoveRight />
          </button>
        </section>
      ) : (
        <section className={styles.thumbnails__wrapper}>
          {images.map((imageUrl, index) => {
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
  );
};

export default React.memo(ProductGallery);
