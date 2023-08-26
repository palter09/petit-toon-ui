import React, { useEffect, useState } from "react";
import styles from "./RegToonPage/styles/RegToonPage.module.css";
import Rule from "./RegToonPage/Rule";
import InfoTitle from "./RegToonPage/InfoTitle";
import ToonDescription from "./RegToonPage/InfoDescription";
import FooterButton from "./RegToonPage/FooterButton";
import SwiperRegToon from "./RegToonPage/SwiperRegToon";
import { registerWebtoon } from "../API/ToonAPI";
import { useNavigate } from 'react-router';

const RegToonPage = () => {
  const [title, setTitle] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [imgFiles, setImgFiles] = useState(Array(10).fill(""));
  const [toonId, setToonId] = useState();
  const [isRegistered, setIsRegistered] = useState(false); //등록되었는가
  const navigate = useNavigate();
  
  //인자로 보낼 setter
  const handleDescription = (descriptionValue) => {setDescription(descriptionValue);}
  const handleTitle = (titleValue) => {setTitle(titleValue)};
  
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
  
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(imgFiles);
    // toon 등록 # 현재 userId는 임의로 넣은 상태
    registerWebtoon(
      1, // 변경 필요한 부분
      title,
      description,
      imgFiles,
      (responseData) => {
        // 등록 성공 시 toonId를 설정하고 등록 메시지 표시
        setToonId(responseData.toonId);
        setIsRegistered(true);
      },
      (_) => { navigate('/') }
    );
  };

    // isSubmitButtonEnabled가 변경되면 toonId와 isRegistered 초기화
    useEffect(() => {
      if (!isSubmitButtonEnabled) {
        setToonId(null);
        setIsRegistered(false);
      }
    }, [isSubmitButtonEnabled]);

    
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
            <FooterButton isEnabled={isSubmitButtonEnabled} isRegistered={isRegistered} toonId={toonId}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegToonPage;
