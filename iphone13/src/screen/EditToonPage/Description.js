import React, { useEffect, useState } from 'react';
import styles from './styles/Description.module.css';

const Description = ({ description, handleDescription }) => {
  const [inputCounter, setInputCounter] = useState();

  useEffect(()=>{
    setInputCounter(description.length);
  },[description])
  
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
        defaultValue={description}
        onChange={onInputCounter}
        required
      />
      <span>{inputCounter}/150</span>
    </div>
  );
};

export default Description;
