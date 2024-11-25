import { MoveLeft, MoveRight, X } from 'lucide-react';
import styles from './product-lightbox.module.css';
import React from 'react';

const ProductLightbox = ({
  toggleLightBox,
  handleLightboxPrevImage,
  handleLightboxNextImage,
  images,
  lightboxImageIndex,
}) => {
  const lightboxRef = React.useRef();
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        toggleLightBox(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => window.removeEventListener('mousedown', handleClickOutside);
  });
  return (
    <section className={styles.lightbox}>
      <div className={styles.lightbox__wrapper} ref={lightboxRef}>
        <div className={styles.ligthbox__close}>
          <button onClick={() => toggleLightBox(false)}>
            <X />
          </button>
        </div>
        <div className={styles.lightbox__controls}>
          <button onClick={handleLightboxPrevImage}>
            <MoveLeft size={18} />
          </button>
          <img
            className={styles.ligthbox__image}
            src={images[lightboxImageIndex]}
            alt={`Product image lightbox`}
          />
          <button onClick={handleLightboxNextImage}>
            <MoveRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductLightbox;
