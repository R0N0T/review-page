import React, { useState } from 'react';
import styles from './SingleSelect.module.css';

const SingleSelect = ({ options, onSelect }) => {
    
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={styles.singleSelect}>
      {options.map((option) => (
        <label key={option} className={styles.option}>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SingleSelect;
