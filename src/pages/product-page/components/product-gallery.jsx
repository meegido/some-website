import styles from './product-gallery.module.css';
import ThumbnailButton from './thumbnail-button';
import useIsMobile from '../../../hooks/use-window-resize';
import React from 'react';
import { X } from 'lucide-react';

const ProductGallery = ({
  images,
  handlePrevImage,
  handleNextImage,
  setSelectedImageIndex,
  selectedImageIndex,
}) => {
  const isMobile = useIsMobile();
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [imageToShow, setImageToShow] = React.useState('');
  const lightboxRef = React.useRef();

  const showImage = (imageUrl) => {
    setImageToShow(imageUrl);
    setIsLightboxOpen(true);
  };

  const dismissLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className={styles.carousel}>
      <section className={styles.carousel__wrapper}>
        {images.map((imageUrl, index) => (
          <img
            key={crypto.randomUUID()}
            src={imageUrl}
            alt={`Product image ${index}`}
            style={{ translate: `${-100 * selectedImageIndex}%` }}
            onClick={() => showImage(imageUrl)}
          />
        ))}
        {isLightboxOpen ? (
          <section className={styles.lightbox} ref={lightboxRef}>
            <div className={styles.lightbox__wrapper}>
              <div className={styles.ligthbox__close}>
                <button onClick={dismissLightbox}>
                  <X />
                </button>
              </div>
              <div className={styles.lightbox__controls}>
                <button onClick={handlePrevImage}>←</button>
                <img
                  className={styles.ligthbox__image}
                  src={imageToShow}
                  alt={`Product image lightbox`}
                />
                <button onClick={handleNextImage}>→</button>
              </div>
            </div>
          </section>
        ) : (
          ''
        )}
      </section>
      {isMobile ? (
        <section className={styles.carousel__controls}>
          <button onClick={handlePrevImage}>←</button>
          <button onClick={handleNextImage}>→</button>
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
