import { Star } from 'lucide-react';
import styles from './star-rating.module.css';

interface StarRatingProps {
  rating: number;
  ratingCount: number;
}

const StarRating = ({ rating, ratingCount }: StarRatingProps) => {
  const totalStars = 4;
  const roundRating = Math.floor(rating * 2) / 2;

  const stars = Array.from({ length: totalStars }, (value, index) => {
    if (roundRating >= index + 1) {
      return 'filled';
    }

    if (roundRating > index) {
      return 'half';
    }

    return 'empty';
  });

  return (
    <div className={styles.stars__wrapper}>
      <span className={styles.stars__row}>
        {stars.map((fillAmount, index) => (
          <Star
            key={index}
            size={20}
            color={fillAmount === 'empty' ? '#DDD' : '#FFD700'}
            style={{
              fill: fillAmount === 'empty' ? 'transparent' : '#FFD700',
              clipPath: fillAmount === 'half' ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'none',
            }}
          />
        ))}
      </span>
      <p>{ratingCount < 0 || ratingCount === undefined ? '0 Ratings' : ratingCount + ' Ratings'}</p>
    </div>
  );
};

export default StarRating;
