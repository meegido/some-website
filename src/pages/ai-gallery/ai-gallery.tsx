import AI_IMAGES from './ai-images.ts';
import styles from './ai-gallery.module.css';

const AiGallery = () => {
  const numRows = 8;
  const numCols = 3;
  const totalImages = AI_IMAGES.length;
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid} role="grid">
        {range(numRows).map((rowIndex) => {
          return (
            <div key={rowIndex} className={styles.row}>
              {range(numCols).map((colIndex) => {
                const imageIndex = rowIndex * numCols + colIndex;
                if (imageIndex >= totalImages) return;
                const imageSrc = AI_IMAGES[imageIndex];

                return (
                  <div key={colIndex} className={styles.cell}>
                    <img src={imageSrc} alt={`Gallery image ${imageIndex + 1}`} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
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

export default AiGallery;
