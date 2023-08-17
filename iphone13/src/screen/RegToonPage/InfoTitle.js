import React from 'react';
import styles from './styles/InfoTitle.module.css';

const InfoTitle = ({ title, onChange }) => {
  return (
    <div className={styles.info_title}>
      <label htmlFor="title">작품명</label>
      <input
        type="text"
        id="title"
        value={title}
        maxLength={15}
        placeholder="최대 15글자"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InfoTitle;
