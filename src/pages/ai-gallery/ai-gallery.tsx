import { ImagesInfo, ImagesRepository, InMemoryImagesRepository } from './ai-images.ts';
import styles from './ai-gallery.module.css';
import React from 'react';
import DynamicGallery from './components/dynamic-gallery.tsx';

interface AiGalleryProps {
  imagesRepository: ImagesRepository;
}

const AiGallery = ({ imagesRepository = new InMemoryImagesRepository() }: AiGalleryProps) => {
  const [allImages, setImages] = React.useState<ImagesInfo[]>([]);
  const [filteredImages, setFliteredImages] = React.useState<ImagesInfo[]>([]);
  const [selectedOption, setSelectedOption] = React.useState('');

  React.useEffect(() => {
    const fetchImages = async () => {
      const retrievedImages = await imagesRepository.retrieve();
      setImages(retrievedImages);
      setFliteredImages(retrievedImages);
    };

    fetchImages();
  }, []);

  const tags = allImages.flatMap((image) => image.tags);
  const notRepeatedTags = Array.from(new Set(tags));

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTag = event.target.value;
    setSelectedOption(selectedTag);

    const filteredImages = allImages.filter((image) => image.tags.includes(selectedTag));
    setFliteredImages(filteredImages);
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
        {filteredImages.length > 0 ? (
          <DynamicGallery images={filteredImages} numRows={8} numCols={3} />
        ) : (
          <p>No images to display</p>
        )}
      </div>
    </div>
  );
};

export default AiGallery;
