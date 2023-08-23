import React from 'react';
import styles from './styles/Info.module.css';
import {IoMdInformationCircle} from "react-icons/io";
import {IoWarningSharp} from "react-icons/io5";
  /*  "title" : "sample-title",
  "description" : "sample-description",
  "author" : "sample-author",
  "profileImageUrl" : "profileImages/1.png",
  "thumbnailUrl" : "toons/1/1-thumb.png",
  "imagePaths" : [ "toons/1/1-0.png", "toons/1/1-1.png" ],
  "viewCount" : 0,
  "likeCount" : 0,*/

const Rule = ({ checked, onChange }) => {
  return (
    <>
      <div className={styles.info_header}>
        <IoWarningSharp color="red" size = "20"/>
        <p>주의</p>
      </div>
      <p className={styles.info_content}>
        수정을 원하신다면, '설명' 또는 '만화 이미지' 중에서 선택하여 수정하실 수 있습니다. 
        삭제를 원하신다면, 세 개의 체크박스를 모두 체크하고 '삭제' 버튼을 누르시면 됩니다.
        단, 유저의 실수로 인한 수정 결과 및 삭제에 대해서는 책임을 지지 않습니다. 
      </p>
      <div className={styles.info_header}>
      <IoMdInformationCircle color="	#c83cc8	" size = "20"/>
      <p>웹툰 정보</p>
      </div>
      <p className={styles.info_content}>
        <p>제목: </p>
        <p>조회수: </p>
        <p>좋아요: </p>
      </p>
    </>
  );
};

export default Rule;
