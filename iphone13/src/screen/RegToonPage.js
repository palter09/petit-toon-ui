import React, { useState } from "react";
import styles from "./RegToonPage/styles/RegToonPage.module.css";
import Rule from "./RegToonPage/Rule";
import InfoTitle from "./RegToonPage/InfoTitle";
import InfoGenre from "./RegToonPage/InfoGenre";
import ImgUpload from "./RegToonPage/ImgUpload";
import FooterButton from "./RegToonPage/FooterButton";

const RegToonPage = () => {
  const [title, setTitle] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [agreementChecked, setAgreementChecked] = useState(false);
  //genre들 객체 배열
  const genres = [
    { value: "g0", label: "로맨스" },
    { value: "g1", label: "판타지" },
    { value: "g2", label: "액션" },
    { value: "g3", label: "일상" },
    { value: "g4", label: "스릴러" },
    { value: "g5", label: "개그" },
    { value: "g6", label: "무협/사극" },
    { value: "g7", label: "드라마" },
    { value: "g8", label: "감성" },
    { value: "g9", label: "스포츠" },
  ];

  //모든 항목이 체크 + 썸네일 등록 되어야 submit button 활성화
  const isSubmitButtonEnabled =
    agreementChecked &&
    selectedGenres.length > 0 &&
    title.trim() !== "" &&
    imgFile !== "";
  //동의합니다 체크했는지 확인용
  const handleAgreementChange = () => {
    setAgreementChecked(!agreementChecked);
  };
  //genre 선택했는지 체크용
  const handleGenreChange = (event) => {
    const genreValue = event.target.value;
    if (selectedGenres.includes(genreValue)) {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== genreValue));
    } else {
      setSelectedGenres([...selectedGenres, genreValue]);
    }
  };


  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    //나중에 서버 연동? 작업시 코드 추가
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
              onChange={(e) => setTitle(e.target.value)}
            />
            <InfoGenre
              genres={genres}
              selectedGenres={selectedGenres}
              onGenreChange={handleGenreChange}
            />
          </div>
          <div className={styles.thumbnail_wrapper}>
            <span>
              대표이미지
              <br />
              (썸네일)
            </span>
            <ImgUpload
              imgFile={imgFile}
              setImgFile={setImgFile}
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
