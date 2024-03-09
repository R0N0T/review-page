import React, { useState } from 'react';
import styles from './ThumbsRating.module.css';

const ThumbsRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating) => {
    if (rating === newRating) {
      setRating(null);
      if (onRatingChange) {
        onRatingChange(null);
      }
    } else {
      setRating(newRating);
      if (onRatingChange) {
        onRatingChange(newRating);
      }
    }
  };

  return (
    <div className={styles.thumbsRating}>
      <span
        className={`${styles.icon} ${rating === 'up' ? styles.selected : ''}`}
        onClick={() => handleRatingChange('up')}
      >
        &#128077;
      </span>
      <span
        className={`${styles.icon} ${rating === 'down' ? styles.selected : ''}`}
        onClick={() => handleRatingChange('down')}
      >
        &#128078;
      </span>
    </div>
  );
};

export default ThumbsRating;
