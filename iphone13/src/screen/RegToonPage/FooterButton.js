import React from 'react';
import styles from './styles/FooterButton.module.css';

const FooterButton = ({ isEnabled }) => {
  return (
    <>
      <div className={styles.footer_button_grey}>
        <button type="button">취소</button>
      </div>
      <div className={styles.footer_button_pink}>
        <button type="submit" id="toon_submit" disabled={!isEnabled}>
          등록
        </button>
      </div>
    </>
  );
};

export default FooterButton;
