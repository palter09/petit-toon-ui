import React, { useEffect, useState } from "react";
import TabWrapper from "../Tab/TabWrapper.js";
import Tab from "../Tab/Tab.js";
import Thumbnails from "../SwiperScroll/SwiperThumbnails.js";
import Profiles from "../SwiperScroll/SwiperProfiles.js";
import Collections from "../SwiperScroll/SwiperCollections.js";

const worksStyle = {
  position: "absolute",
  backgroundColor: "#FFEDFE",
  width: "100%",
  height: "578px",
  top: "266px",
  left: "0px",
};

const textStyle = {
  color: "#DA5E9D",
};

const Works = ({ accessUserId, userinfo, cartoons, collections, handleIntersect, updateCollections }) => {
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
                height: "100%",
              }}
            />
          }
        />
        <Tab
          title={<div style={textStyle}><b>컬렉션</b></div>}
          content={
            <Collections
              accessUserId={accessUserId}
              userId = {userinfo.id}
              collections={
                collections
              }
              handleIntersect={handleIntersect}
              updateCollections={updateCollections}
              style={{
                top: "40px",
                height: "100%",
              }}
            />
          }
        />
      </TabWrapper>
    </div>
  );
};

export default Works;
