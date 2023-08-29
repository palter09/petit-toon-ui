import React, { useEffect, useState } from "react";
import TabWrapper from "../Tab/TabWrapper.js";
import Tab from "../Tab/Tab.js";
import Thumbnails from "../SwiperScroll/SwiperThumbnails.js";
import Profiles from "../SwiperScroll/SwiperProfiles.js";
import Collections from "../SwiperScroll/SwiperCollections.js";
import { getFollowings, getFollowers } from "../../API/FollowAPI.js";
import { useNavigate } from "react-router";
import { getCollections } from "../../API/CollectionAPI.js";
import { getWebtoons } from "../../API/ToonAPI.js";

const worksStyle = {
  position: "absolute",
  backgroundColor: "#FFEDFE",
  width: "390px",
  height: "578px",
  top: "266px",
  left: "0px",
};

const textStyle = {
  color: "#DA5E9D",
  width: "159px",
};

const Works = ({ userinfo, onNumCartoons, onNumFollowers, onNumFollowings }) => {
  const [cartoons, setCartoons] = useState([]);
  const [collectionInfo, setCollectionInfo] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(userinfo.id){
      console.log("유저페이지:",userinfo.id);
      getWebtoons(
        userinfo.id,
        (data) =>{
          console.log("웹툰 목록", data);
          setCartoons(data.cartoons);
          onNumCartoons(data.cartoons.length);
        },
        () =>{
          console.log("웹툰 목록 불러오기 실패");
        }
      )
      getCollections(
        userinfo.id,
        (data) =>{
          console.log("컬렉션목록",data);
          setCollectionInfo(data.collectionInfos);
        },
        (_) => {
          console.log("컬렉션 목록 불러오기 실패");
        }
      );
      getFollowers(
        userinfo.id, 0, 20,
        (data) => {
          console.log("팔로워목록",data)
          setFollowers(data.users);
          onNumFollowers(data.users.length);
        },
        (_) => {
          console.log("팔로워 목록 불러오기 실패");
        }
      );
      getFollowings(
        userinfo.id, 0, 20,
        (data) => {
          console.log("팔로윙목록",data)
          setFollowings(data.users);
          onNumFollowings(data.users.length);
        },
        (_) => {
          console.log("팔로윙 목록 불러오기 실패");
        }
      );
    }
  }, [navigate, userinfo.id]);

  return (
    <div style={worksStyle}>
      <TabWrapper>
        <Tab
          title={<div style={textStyle}><b>작품</b></div>}
          content={
            <Thumbnails
              toons={cartoons}
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>컬렉션</b></div>}
          content={
            <Collections
              userId = {userinfo.id}
              collections={
                collectionInfo  
              }
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>팔로워</b></div>}
          content={
            <Profiles
              users={followers}
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>팔로윙</b></div>}
          content={
            <Profiles
              users={followings}
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
      </TabWrapper>
    </div>
  );
};

export default Works;
