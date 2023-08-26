import React, { useState } from 'react';
import styles from './styles/InfoDescription.module.css';

const InfoDescription = ({ handleDescription }) => {
  const [inputCounter, setInputCounter] = useState(0);

  const onInputCounter = (e) => {
    const inputValue = e.target.value;
    setInputCounter(inputValue.length);
    handleDescription(inputValue);
  };

  return (
    <div className={styles.info_description}>
      <span>설명</span>
      <textarea
        id="description"
        maxLength={150}
        onChange={onInputCounter}
        required
      />
      <p>
        <span>{inputCounter}/150</span>
      </p>
    </div>
  );
};

export default InfoDescription;
