import React, { useEffect, useState } from "react";
import TabWrapper from "../Tab/TabWrapper.js";
import Tab from "../Tab/Tab.js";
import Thumbnails from "../SwiperScroll/SwiperThumbnails.js";
import Profiles from "../SwiperScroll/SwiperProfiles.js";
import { getFollowers } from "../../API/FollowAPI.js";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  useEffect(() => {
    if(userinfo.id){
      console.log(userinfo.id+"의 팔로우 목록");
      getFollowers(
        userinfo.id, 0, 20,
        (data) => {
          setFollower(data.followUsers);//[{followId: , user: }{followId: , user: }...]
        },
        (_) => {navigate("/");}
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
              toons={[]}
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
      </TabWrapper>
    </div>
  );
};

export default Works;
