import React, {useState, useEffect} from 'react';
import styles from './styles/Title.module.css';

const Title = ({ title, handleTitle}) => {
  const [inputCounter, setInputCounter] = useState(title.length);
  
  useEffect(()=>{
    setInputCounter(title.length);
  },[title])

  const onInputCounter = (e) => {
    const inputValue = e.target.value;
    setInputCounter(inputValue.length);
    handleTitle(inputValue);
  };

  return (
    <div className={styles.info_title}>
      <span>제목</span>
      <input
        type="text"
        id="title"
        value={title}
        maxLength={15}
        onChange={onInputCounter}
        required
      />
      <span>{inputCounter}/15</span>
    </div>
  );
};

export default Title;
