import React from 'react';
import styles from './thumbnail-button.module.css';

const ThumbnailButton = ({ imageUrl, setSelectedImageIndex, index, isSelected }) => {
  return (
    <button
      className={`${styles.thumbnail__button} ${isSelected ? styles.selected : ''}`}
      onClick={() => setSelectedImageIndex(index)}
    >
      <img
        key={crypto.randomUUID()}
        style={{ opacity: isSelected ? 0.5 : 1 }}
        src={imageUrl}
        alt="Thumbnail image"
      />
    </button>
  );
};

export default React.memo(ThumbnailButton);
