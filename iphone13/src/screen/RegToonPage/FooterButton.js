import React, {useEffect} from "react";
import styles from "./styles/FooterButton.module.css";
import { useNavigate } from "react-router";

const FooterButton = ({ isEnabled, isRegistered, toonId }) => {
  const navigate = useNavigate(); 
  useEffect(() => {
    if (isRegistered && isEnabled) {
      navigate(`/toon/${toonId}`);
    }
  }, [isRegistered, isEnabled, navigate, toonId]);
  return (
    <>
      <div className={styles.footer_button_info}>
        {isRegistered && isEnabled && <p>등록되었습니다. Toon ID: {toonId}</p>}
      </div>
      <div className={styles.footer_button_grey}>
        <button type="button" onClick={()=>{navigate(-1);}}>취소</button>
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
