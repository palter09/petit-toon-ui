import React,{useState, useEffect} from "react";
import ModalPortal from "../Modal/Portal";
import Modal from "../Modal/Modal";
import ImgUpload from '../RegToonPage/ImgUpload';
import useDetectClose from "../../hooks/useDetectClose";
import styles from './EditModal.module.css';
import "../SignupPage/Modeless.css";
import { BiHide, BiShow } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const EditModal = ({ isOpenModal, onCloseModal, onSubmit, userinfo, profileImage, onProfileImage }) => {
  const [modalNickname, setModalNickname] = useState("");
	const [modalTag, setModalTag] = useState("");
	const [modalPassword, setModalPassword] = useState("");
	const [modalStatusMessage, setModalStatusMessage] = useState("");

  const [passwordModeless, passwordRef, togglePasswordModeless] = useDetectClose(false);
  const [tagModeless, tagRef, toggleTagModeless] = useDetectClose(false);
  const [nicknameModeless, nicknameRef, toggleNicknameModeless] = useDetectClose(false);
  const [smModeless, smRef, toggleSmModeless] = useDetectClose(false);
  
	const passwordValidation = [
    modalPassword.length >= 8 && modalPassword.length <= 20,
    /[a-z]/.test(modalPassword),
    /[!@#$%^&*~?]/.test(modalPassword),
    /[0-9]/.test(modalPassword),
    /^[a-zA-Z0-9!@#$%^&*~?]*$/.test(modalPassword),
  ];
  const nicknameValidation = [
    modalNickname.length > 1 && modalNickname.length <= 20,
    /^[a-zA-Z0-9가-힣]*$/.test(modalNickname),
  ];
  const tagValidation = [
    modalTag.length >= 1 && modalTag.length <= 15,
    /[a-z0-9._]/i.test(modalTag),
  ]
  const smValidation = [
    modalStatusMessage.length >= 1 && modalStatusMessage.length <= 500,
  ]
  
  const isPasswordValid = passwordValidation.every(item => item === true)
  const isNicknameValid = nicknameValidation.every(item => item === true)
  const isTagValid = tagValidation.every(item => item === true)
  const isSmValid = smValidation.every(item=>item === true)

	useEffect(()=>{
		if(userinfo){
			setModalNickname(userinfo.nickname);
			setModalTag(userinfo.tag);
			setModalStatusMessage(userinfo.statusMessage);
		}
	},[userinfo])

  useEffect(()=> {
    if (!(isPasswordValid ^ passwordModeless))
      togglePasswordModeless();
  }, [modalPassword])
  useEffect(()=> {
    if (!(isNicknameValid ^ nicknameModeless))
      toggleNicknameModeless();
  }, [modalNickname])
  useEffect(()=> {
    if (!(isTagValid ^ tagModeless))
      toggleTagModeless();
  }, [modalTag])
  useEffect(()=> {
    if (!(isSmValid ^ smModeless))
      toggleSmModeless();
  }, [modalStatusMessage])


  return (
    <ModalPortal>
    <Modal 
        modalStyle={{width:'330px',height:'440px',borderRadius:'5px'}} 
        contentStyle={{width: '100%', height:'100%', display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}
        confirmStyle={{display:'none'}}
        isOpen={isOpenModal} onClose={onCloseModal}
    >
      <div className={styles['modal-profileImage']}>
        <ImgUpload
          style={{ width:'125px', height:'125px', margin:'0', borderRadius:'50%'}}
          imgFile={profileImage}
          setImgFile={(newImgFile) => {
            onProfileImage(newImgFile);
          }}
          inputId={'userinfo_profileImage'}
          inputName={'userinfo_profileImage'}
          isDisabled={false}
        />
      </div>
      
      <div className={styles['modal-group']}>
        <input
          className={styles['modal-nickname']}
          type="text"
          id="modal-nickname"
          value={modalNickname}
          maxLength={20}
          ref={nicknameRef}

          onChange={(e) => setModalNickname(e.target.value)}
          onFocus={() => { isNicknameValid || toggleNicknameModeless(); }}
          onBlur={() => { nicknameModeless && toggleNicknameModeless(); }}
        />
        { (nicknameModeless && !isNicknameValid && modalNickname.length > 0) &&
        <div className={styles.modeless}>
          {nicknameValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;닉네임은 2자 이상, 20자 이하여야 합니다.</p>}
          {nicknameValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;닉네임에는 영어 알파벳, 한글, 숫자만 포함될 수 있습니다.</p>}
        </div> }

        <input
          className={styles['modal-tag']}
          type="text"
          id="modal-tag"
          value={modalTag}
          maxLength={15}
          ref={tagRef}

          onChange={(e) => setModalTag(e.target.value)}
          onFocus={() => { isTagValid || toggleTagModeless(); }}
          onBlur={() => { tagModeless && toggleTagModeless(); }}
        />
        { (tagModeless && !isTagValid && modalTag.length > 0) && 
        <div className={styles.modeless}>
          {tagValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;태그는 6자 이상, 15자 이하여야 합니다.</p>}
          {tagValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;태그에는 영어 알파벳, 특수문자(._)만 포함될 수 있습니다.</p>}
        </div> }
        
        <input
          className={styles['modal-password']}
          type="text"
          id="modal-password"
          placeholder="비밀번호 수정"
          maxLength={20}
          ref={passwordRef}

          onChange={(e) => setModalPassword(e.target.value)}
          onFocus={() => { isPasswordValid || togglePasswordModeless(); }}
          onBlur={() => { passwordModeless && togglePasswordModeless(); }}
        />
        { (passwordModeless && !isPasswordValid && modalPassword.length > 0) && 
        <div className={styles.modeless}>
          {passwordValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;비밀번호는 8자 이상, 20자 이하여야 합니다.</p>}
          {passwordValidation[1] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;영어 알파벳 소문자를 포함해야합니다.</p>}
          {passwordValidation[2] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;특수문자(!@#$%^&*~?)를 포함해야합니다.</p>}
          {passwordValidation[3] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;숫자를 포함해야합니다.</p>}
          {passwordValidation[4] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;유효하지 않은 문자가 포함되었습니다.</p>}
        </div> }
      </div>
      
      <textarea
         className={styles['modal-statusMessage']}
        id="modal-statusMessage"
        maxLength={500}
        defaultValue={modalStatusMessage}
        ref={smRef}

        onChange={(e) => setModalStatusMessage(e.target.value)}
        onFocus={() => { isSmValid || toggleSmModeless(); }}
        onBlur={() => { smModeless && toggleSmModeless(); }}
      />
      { (smModeless && !isSmValid && modalStatusMessage.length > 0) && 
      <div className={styles.modeless}>
        {smValidation[0] || <p style={{color: "red"}}><ImCross/>&nbsp;&nbsp;상태메시지는 500자 이하여야 합니다.</p>}
      </div> }

      <div className={styles['modal-bottom-wrapper']}>
        <button className={styles['modal-cancel-button']} onClick={onCloseModal}>
          취소
        </button>
        <button className={styles['modal-confirm-button']} onClick={()=>{onSubmit(modalNickname, modalTag, modalPassword, modalStatusMessage)}}>
          확인
        </button>
      </div>
    </Modal>
  </ModalPortal>
  );
};

export default EditModal;
