import React, {useState, useEffect} from 'react';
import styles from './styles/Info.module.css';
import {IoMdInformationCircle} from "react-icons/io";
import { getWebtoonInfo } from '../../API/ToonAPI';

const Info = ({toonId}) => {
  const [title, setTitle] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(()=>{
    getWebtoonInfo(
      toonId,
      (data) => {
        setTitle(data.title);
        setViewCount(data.viewCount);
        setLikeCount(data.likeCount);
      }
    )
  });
  return (
    <>
      <div className={styles.info_header}>
      <IoMdInformationCircle color="	#c83cc8	" size = "20"/>
      <p>웹툰 정보</p>
      </div>
      <div className={styles.info_content}>
        <p>제목: <b>{title}</b></p>
        <p>조회수: <b>{viewCount}</b></p>
        <p>좋아요: <b>{likeCount}</b></p>
      </div>
    </>
  );
};

export default Info;
