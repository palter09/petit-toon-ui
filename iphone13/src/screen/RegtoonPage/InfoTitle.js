import React, {useState} from 'react';
import styles from './styles/InfoTitle.module.css';

const InfoTitle = ({ title, handleTitle}) => {
  const [inputCounter, setInputCounter] = useState(0);
  
  const onInputCounter = (e) => {
    const inputValue = e.target.value;
    setInputCounter(inputValue.length);
    handleTitle(inputValue);
  };
  return (
    <div className={styles.info_title}>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        value={title}
        maxLength={15}
        onChange={onInputCounter}
        required
      />
      <p>
        <span>{inputCounter}/15</span>
      </p>
    </div>
  );
};

export default InfoTitle;
