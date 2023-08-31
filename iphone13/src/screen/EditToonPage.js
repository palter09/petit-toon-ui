import React, { useState } from "react";
import styles from "./EditToonPage/styles/EditToonPage.module.css";
import Info from "./EditToonPage/Info";
import Description from "./EditToonPage/Description";
import SwiperRegToon from "./EditToonPage/SwiperRegToon";
import FooterButton from "./EditToonPage/FooterButton";
import { useParams } from "react-router";

/*deleteWebtoon은 FooterButton에서 수행*/

const EditToonPage = () => {
  const [imgFiles, setImgFiles] = useState(Array(10).fill(""));
  const [description, setDescription] = useState("");
  const toonId = useParams().toonId;

  const handleDescription = (descriptionValue) => {
    setDescription(descriptionValue);
  };

  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <div className={styles.header_wrapper}>
          <p>웹툰 수정/삭제 페이지</p>
        </div>
        <div className={styles.info_wrapper}>
          <Info toonId={toonId}/>
        </div>
        <div className={styles.description_wrapper}>
          <Description handleDescription={handleDescription} />
        </div>
        <div className={styles.ImagesUpload_wrapper}>
          <span>
            만화
            <br />
            이미지
          </span>
          <SwiperRegToon
            imgFiles={imgFiles}
            setImgFiles={setImgFiles}
            imgSize={"555 X 777"}
            inputId={"editToon-thumbnail"}
            inputName={"editToon-thumbnail-img"}
          />
        </div>
        <div className={styles.footer_wrapper}>
          <FooterButton id={toonId} isEnabled={false} />
        </div>
      </div>
    </div>
  );
};

export default EditToonPage;
