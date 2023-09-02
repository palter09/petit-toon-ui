import React, { useState, useCallback, useEffect } from "react";
import TabWrapper from "./Tab/TabWrapper.js";
import Tab from "./Tab/Tab.js";
import Profiles from "./SwiperScroll/SwiperProfiles.js";
import styles from "./FollowPage/FollowPage.module.css";
import { useNavigate, useParams } from "react-router";
import { getFollowers, getFollowings } from "../API/FollowAPI.js";
import { IoIosArrowBack } from "react-icons/io";
import { getUserInfo } from "../API/UserAPI.js";

const ToonPage = () => {
  const userInfoId= useParams().id;
  const er = useParams().er;
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [userInfoName, setUserInfoName] = useState("");
  const [pageFollowerAPI, setPageFollowerAPI] = useState(0);
  const [pageFollowingAPI, setPageFollowingAPI] = useState(0);
  const navigate=useNavigate();
  
  const textStyle = {
    color: "#DA5E9D",
    width: "159px",
  };

  useEffect(()=>{
      getUserInfo(userInfoId,(data)=>{setUserInfoName(data.nickname);},()=>{console.log("user닉네임 불러오기 실패");})
      getFollowers(userInfoId,pageFollowerAPI,20,(data)=>{setFollowers(data.users);},()=>{console.log("followers불러오기 실패");})
      getFollowings(userInfoId,pageFollowingAPI,20,(data)=>{setFollowings(data.users);},()=>{console.log("followings불러오기 실패");})
  },[pageFollowerAPI, pageFollowingAPI, userInfoId])

  const handleFollowerIntersect = () => {
    // 교차 감지 시 다음 페이지의 데이터를 가져옵니다.
    setPageFollowerAPI(prevCurrentPage=>prevCurrentPage+1);
    console.log("감지:get follower api 재호출");
  };
  const handleFollowingIntersect = () => {
    // 교차 감지 시 다음 페이지의 데이터를 가져옵니다.
    setPageFollowingAPI(prevCurrentPage=>prevCurrentPage+1);
    console.log("감지:get following api 재호출");
  };

  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <div className={styles.header_wrapper}>
          <div className={styles.header_arrow}>
            <IoIosArrowBack size="40" color="#DA5E9D" onClick={()=>{navigate(-1);}}/>
          </div>
          <div className={styles.header_user}>
            <span>{userInfoName}</span>
          </div>
        </div>
        <div>
          <TabWrapper initialTab={er}>
            <Tab
              title={<div style={textStyle}><b>팔로워</b></div>}
              content={
                <Profiles
                  users={followers}
                  handleFollowerIntersect={handleFollowerIntersect}
                  style={{
                    top: "80px",
                    height: "80%",
                  }}
                />
              }
            />
            <Tab
              title={<div style={textStyle}><b>팔로잉</b></div>}
              content={
                <Profiles
                  users={followings}
                  handleFollowingIntersect={handleFollowingIntersect}
                  style={{
                    top: "80px",
                    height: "80%",
                  }}
                />
              }
            />
          </TabWrapper>
        </div>
      </div>


    </div>
  );
};

export default ToonPage;
