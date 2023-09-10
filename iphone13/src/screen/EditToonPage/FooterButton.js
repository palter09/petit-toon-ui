import React, { useEffect, useState } from "react";
import styles from "./styles/FooterButton.module.css";
import { deleteWebtoon } from "../../API/ToonAPI";
import { useNavigate } from 'react-router';

const FooterButton = ({ id, isEnabled, onOpenDeleteModal, onOpenEditModal}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!isDeleted ? (
        <div className={styles.footer_button_wrapper}>
          <div className={styles.footer_button_pink_wrapper}>
              <div className={styles.footer_button_pink}>
                <label>
                  <button
                    type="button"
                    onClick={onOpenDeleteModal}
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
            <button type="submit" id="toon_edit" onClick={onOpenEditModal}>{/*disabled={!isEnabled}*/}
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
