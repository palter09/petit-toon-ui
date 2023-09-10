import React from "react";
import ModalPortal from "../Modal/Portal";
import Modal from "../Modal/Modal";
import styles from "./styles/DeleteModal.module.css";
import { IoWarningSharp } from "react-icons/io5";


const EditModal = ({isOpenModal, onCloseModal, onSubmit}) => {
  return (
    <ModalPortal>
      <Modal
        modalStyle={{ width: "250px", height: "200px", borderRadius: "5px" }}
        contentStyle={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        confirmStyle={{ display: "none" }}
        isOpen={isOpenModal}
        onClose={onCloseModal}
      >
        <div className={styles["content-wrapper"]}>
          <div className={styles["warning"]}>
            <IoWarningSharp color="red" size="30" />
            <p>
              <b>주의</b>
            </p>
          </div>
          <div className={styles["warning-text"]}>
            수정을 원한다면,&nbsp;<b>'수정'</b> 버튼을 누르면 됩니다.&nbsp;
            <b>단, 유저의 실수로 인한 수정에 대해서는 책임을 지지 않습니다.</b>
          </div>
          <div className={styles["footer-wrapper"]}>
            <div className={styles["footer-cancel-button"]}>
              <button onClick={onCloseModal}>취소</button>
            </div>
            <div className={styles["footer-delete-button"]}>
              <button onClick={onSubmit}>수정</button>
            </div>
          </div>
        </div>
      </Modal>
    </ModalPortal>
  );
};

export default EditModal;
