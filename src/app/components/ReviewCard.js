import React, { useState, useEffect } from 'react';
import styles from './ReviewCard.module.css';

const ReviewCard = ({ name, initialRating, comment }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    const savedRating = localStorage.getItem('rating_' + name);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [name]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem('rating_' + name, newRating);
  };

  return (
    <div className={styles.reviewCard}>
      <h2>{name}</h2>
      <div className={styles.rating}>Rating: {rating}</div>
      <div className={styles.starRating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? styles.checked : ''}
            onClick={() => handleRatingChange(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
