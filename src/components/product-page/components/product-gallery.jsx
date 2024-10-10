import styles from './product-gallery.module.css';
import ThumbnailButton from './thumbnail-button';
import useIsMobile from '../../../hooks/use-window-resize';

const ProductGallery = ({
  images,
  handlePrevImage,
  handleNextImage,
  setSelectedImageIndex,
  selectedImageIndex,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.carousel}>
      <section className={styles.carousel__wrapper}>
        {images.map((imageUrl) => (
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

export default ProductGallery;
