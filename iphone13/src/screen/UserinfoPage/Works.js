import React, { useEffect, useState } from "react";
import TabWrapper from "../Tab/TabWrapper.js";
import Tab from "../Tab/Tab.js";
import Thumbnails from "../SwiperScroll/SwiperThumbnails.js";
import Profiles from "../SwiperScroll/SwiperProfiles.js";
import Collections from "../SwiperScroll/SwiperCollections.js";
import { getFollowers } from "../../API/FollowAPI.js";
import { useNavigate } from "react-router";
import { getCollections } from "../../API/CollectionAPI.js";

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

const Works = ({ userinfo }) => {
  const [follower, setFollower] = useState([]);
  const [collectionInfo, setCollectionInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(userinfo.id){
      console.log(userinfo.id+"의 팔로우 목록");
      getFollowers(
        userinfo.id, 0, 20,
        (data) => {
          console.log("팔로우목록",data)
          setFollower(data.followUsers);//[{followId: , user: }{followId: , user: }...]
        },
        (_) => {navigate("/");}
      );
      console.log(userinfo.id+"의 컬렉션 목록");
      getCollections(
        userinfo.id,
        (data) =>{
          console.log("컬렉션목록",data);
          setCollectionInfo(data.collectionInfos);
        },
        () =>{}
      );
    }
  }, [navigate, userinfo.id]);

  return (
    <div style={worksStyle}>
      <TabWrapper>
        <Tab
          title={<div style={textStyle}><b>내 작품</b></div>}
          content={
            <Thumbnails
              //toons={[userinfo.works]}
              toons={['f','f','f','f','f','f',]}
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>내 팔로우</b></div>}
          content={
            <Profiles
              users={follower}
              style={{
                top: "40px",
                height: "445px",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>내 컬렉션</b></div>}
          content={
            <Collections
              userId = {userinfo.id}
              collections={
                collectionInfo  
                /* 테스트용
                  [ {
                    "id" : 1,
                    "title" : "모음집",
                    "closed" : false
                  }, {
                    "id" : 2,
                    "title" : "모음집2",
                    "closed" : false
                  }, {
                    "id" : 3,
                    "title" : "title3",
                    "closed" : true
                  }, {
                    "id" : 4,
                    "title" : "title3",
                    "closed" : false
                  } , {
                    "id" : 5,
                    "title" : "title3",
                    "closed" : false
                  } , {
                    "id" : 6,
                    "title" : "title3",
                    "closed" : true
                  } , {
                    "id" : 7,
                    "title" : "title3",
                    "closed" : false
                  } ]
                  */
              }
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
