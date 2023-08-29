import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ modalStyle, contentStyle, confirmStyle, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" style ={modalStyle}>
        <div className="modal-content" style={contentStyle}>{children}</div>
        <button className="confirm-button" style = {confirmStyle} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
