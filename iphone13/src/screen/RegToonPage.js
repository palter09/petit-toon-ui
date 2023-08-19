import React, { useState } from "react";
import styles from "./RegToonPage/styles/RegToonPage.module.css";
import Rule from "./RegToonPage/Rule";
import InfoTitle from "./RegToonPage/InfoTitle";
import ToonDescription from "./RegToonPage/InfoDescription";
import FooterButton from "./RegToonPage/FooterButton";
import SwiperRegToon from "./RegToonPage/SwiperRegToon";

const RegToonPage = () => {
  const [title, setTitle] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [imgFiles, setImgFiles] = useState(Array(10).fill(""));
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  
  //인자로 보낼 setter
  const handleDescription = (descriptionValue) => {setDescription(descriptionValue);}
  const handleTitle = (titleValue) => {setTitle(titleValue)};
  const handleThumbnailUrl = ()=>{
    imgFiles.length > 0 ?
      setThumbnailUrl(imgFiles[0]) :
      setThumbnailUrl("");
  }
  //모든 항목이 체크 + 이미지 등록 되어야 submit button 활성화
  const isSubmitButtonEnabled =
    agreementChecked &&
    title.trim() !== "" &&
    description  !== "" &&
    imgFiles[0] !== "";
  //동의합니다 체크했는지 확인용
  const handleAgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };



  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    //나중에 서버 연동? 작업시 코드 추가
    handleThumbnailUrl();
  };

  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.header_wrapper}>
            <p>웹툰 등록 페이지</p>
          </div>
          <div className={styles.rule_wrapper}>
            <Rule
              checked={agreementChecked}
              onChange={handleAgreementChange}
            />
          </div>
          <div className={styles.info_wrapper}>
            <InfoTitle
              title={title}
              handleTitle={handleTitle}
            />
            <ToonDescription
              handleDescription={handleDescription}
            />
          </div>
          <div className={styles.ImagesUpload_wrapper}>
            <span>
              만화<br/>
              이미지
            </span>
            <SwiperRegToon
              imgFiles={imgFiles}
              setImgFiles={setImgFiles}
              imgSize={"555 X 777"}
              inputId={"regToon-thumbnail"}
              inputName={"regToon-thumbnail-img"}
            />
          </div>
          <div className={styles.footer_wrapper}>
            <FooterButton isEnabled={isSubmitButtonEnabled} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegToonPage;
