import React, { useState, useRef } from 'react';
import styles from './styles/ImgUpload.module.css';

const ImgUpload= ({ style, imgFile, setImgFile, imgSize, inputId, inputName, isDisabled }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const imgRef = useRef();//input file에서 img 참조
  
  //input File에서 imgRef받아서 url읽고 setImg + 미리보기 세팅
  const handleImageUpload = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      setPreviewVisible(true); // 이미지 업로드 후 미리보기 활성화
    };
  };
  
  //미리보기 img를 클릭하면 원래대로
  const handlePreviewClick = () => {
    setPreviewVisible(!previewVisible);
    handleReset();
  };
  //img reset
  const handleReset = () => {
    imgRef.current.value = ""; // 이미지 선택 초기화
    setImgFile(""); // 이미지 URL 초기화
    setPreviewVisible(false); // 미리보기 비활성화
  };
  
  return (
    <div className={styles.ImagesUpload_file_wrapper} style = {style}>
      {previewVisible ? (
        <img style = {{border: 'transparent'}}
          src={imgFile}
          alt="클릭후 파일 선택"
          onClick={handlePreviewClick}
        />
      ) : (
        <>
          <em>{imgSize}</em>
          <label htmlFor={inputId} onClick={handleReset}>파일 선택</label>
        </>
      )}
      <input
        type="file"
        id={inputId}
        name={inputName}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
        ref={imgRef}
        disabled={isDisabled}
      />
    </div>
  );
};

export default ImgUpload;
