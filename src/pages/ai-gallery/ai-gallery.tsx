import AI_IMAGES, { ImagesInfo } from './ai-images.ts';
import styles from './ai-gallery.module.css';
import React from 'react';
import DynamicGallery from './components/dynamic-gallery.tsx';

const AiGallery = () => {
  const [images, setImages] = React.useState<ImagesInfo[]>(AI_IMAGES);
  const [selectedOption, setSelectedOption] = React.useState('');

  const tags = AI_IMAGES.flatMap((image) => image.tags);
  const notRepeatedTags = Array.from(new Set(tags));

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTag = event.target.value;
    setSelectedOption(selectedTag);

    const filteredImages = AI_IMAGES.filter((image) => image.tags.includes(selectedTag));
    setImages(filteredImages);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.select__wrapper}>
        <label htmlFor="filter" aria-labelledby="Filter">
          Filter images by
        </label>
        <div className={styles.select}>
          <select name="filter" id="filter" value={selectedOption} onChange={handleSelectChange}>
            <option value="" disabled>
              --Choose and option--
            </option>
            {notRepeatedTags.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>
      <div className={styles.grid} role="grid">
        {images.length > 0 ? (
          <DynamicGallery images={images} numRows={8} numCols={3} />
        ) : (
          <p>No images to display</p>
        )}
      </div>
    </div>
  );
};

export default AiGallery;
