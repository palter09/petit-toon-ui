import React, { useEffect, useState } from "react";
import styles from "./RankingPage/RankingPage.module.css";
import Profile from './SwiperScroll/SwiperProfilesLR';
import Thumbnail from './SwiperScroll/SwiperThumbnails';
import { getToonRanking, getUserRanking } from "../API/RankAPI";

const CollectionPage = () => {
  const[users, setUsers] = useState([]);
  const[toons, setToons] = useState([]);
  
  useEffect(()=>{
    getUserRanking(
      0,
      50,
      (data)=>{setUsers(data.users); console.log("유저:",data.users);},
      (_)=>{
        console.log("유저 랭킹 불러오는데 실패");
      }
    )
    getToonRanking(
      0,
      50,
      (data)=>{setToons(data.cartoons); console.log("만화:",data.cartoons)},
      (_)=>{
        console.log("만화 랭킹 불러오는데 실패");
      }
    )
  },[])
  
  const profileContainerStyle = {
    top:'180px'
  }

  const thumbnailContainerStyle = {
    top: '342px',
    height: '495px'
  }

  const profileLineStyle = {
    position:'absolute',
    top:'155px',
    width:'100%',
    outline: '3px solid #DA5E9D',
    margin: '0',
    background:'#FFF',
    color: '#DA5E9D',
    fontWeight:'bold',
  }
  const thumbnailLineStyle = {
    position:'absolute',
    top:'318px',
    width:'100%',
    outline: '3px solid #DA5E9D',
    margin: '0',
    background:'#FFF',
    color: '#DA5E9D',
    fontWeight:'bold'
  }

  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <div className={styles.header_wrapper}>
          <img
            src={process.env.PUBLIC_URL + "/images/petit.png"}
            alt="petit icon"
          />
          <h1>이주의 쁘띠</h1>
        </div>
            <p style={profileLineStyle}>유저 랭킹</p>
            <Profile users={users} style={profileContainerStyle}/>
            <p style={thumbnailLineStyle}>만화 랭킹</p>
            <Thumbnail toons={toons} style={thumbnailContainerStyle}/>
      </div>
    </div>
  );
};

export default CollectionPage;
