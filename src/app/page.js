"use client"
import ThumbsRating from "./components/ThumbsRating";
import ReviewCard from "./components/ReviewCard";
import SingleSelect from "./components/SingleSelect";
import styles from "./page.module.css";

import {useState} from 'react';
export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <main className={styles.main}>
      <span>Leave a review</span>
      <span>Safety</span>
      <ReviewCard />
      <span>Communication</span>
      <ReviewCard />
      <span>Would you reccomend?</span>
      <ThumbsRating />
      <span>Praise</span>
      <SingleSelect options={options} onSelect={handleOptionSelect} />
    </main>
  );
}
