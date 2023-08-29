import React, { useState } from "react";
import styles from "./styles/FooterButton.module.css";
import { deleteWebtoon } from "../../API/ToonAPI";
import { useNavigate } from 'react-router';

const FooterButton = ({ id, isEnabled }) => {
  const [isChecked, setIsChecked] = useState([false, false, false]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  
  const handleIsDeleted = (isDeletedVal) => {
    setIsDeleted(isDeletedVal);
    if (isDeletedVal) {
      navigate(-1); // 뒤로 가기
    }
  };

  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
  };

  const isAllChecked = isChecked.every((check) => check);

  return (
    <>
      {!isDeleted ? (
        <div className={styles.footer_button_wrapper}>
          <div className={styles.footer_button_pink_wrapper}>
              <input
                type="checkbox"
                checked={isChecked[0]}
                onChange={() => handleCheckboxChange(0)}
              />
              <input
                type="checkbox"
                checked={isChecked[1]}
                onChange={() => handleCheckboxChange(1)}
              />
              <input
                type="checkbox"
                checked={isChecked[2]}
                onChange={() => handleCheckboxChange(2)}
              />
              <div className={styles.footer_button_pink}>
                <label>
                  <button
                    type="button"
                    disabled={!isAllChecked}
                    onClick={() => {
                      deleteWebtoon(id, handleIsDeleted, (_) => { navigate('/') });
                    }}
                  >
                    삭제
                  </button>
                </label>
              </div>
          </div>
          <div className={styles.footer_button_grey}>
            <button type="button" id="cancel" onClick={() => navigate(-1)}>
              취소
            </button>
            <button type="submit" id="toon_edit" disabled={!isEnabled}>
              수정
            </button>
          </div>
        </div>
      ) : (
        <p className={styles.warning}>삭제되었습니다</p>
      )}
    </>
  );
};

export default FooterButton;
