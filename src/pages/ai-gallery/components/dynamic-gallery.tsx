import { ImagesInfo } from '../ai-images.ts';
import styles from './dynamic-gallery.module.css';

interface DynamicGalleryProps {
  images: ImagesInfo[];
  numCols: number;
  numRows: number;
}

const DynamicGallery: React.FC<DynamicGalleryProps> = ({ images, numCols, numRows }) => {
  const totalImages = images.length;

  return (
    <>
      {range(numRows).map((rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {range(numCols).map((colIndex) => {
              const imageIndex = rowIndex * numCols + colIndex;

              if (imageIndex >= totalImages) return;
              const imageSrc = images[imageIndex];

              return (
                <div key={colIndex} className={styles.cell}>
                  <img src={imageSrc.url} alt={`Gallery image ${imageIndex + 1}`} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const range = (start: number, end?: number, step: number = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < (end ?? 0); i += step) {
    output.push(i);
  }

  return output;
};

export default DynamicGallery;
