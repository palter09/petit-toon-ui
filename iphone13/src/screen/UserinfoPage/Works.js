import React, { useState } from 'react';
import TabWrapper from '../Tab/TabWrapper.js';
import Tab from '../Tab/Tab.js';
import Thumbnails from '../SwiperScroll/SwiperThumbnails.js'
import Profiles from '../SwiperScroll/SwiperProfiles.js'

const worksStyle = {
	position: "absolute",
  backgroundColor: "#FFEDFE",
	width:"390px",
	height: "578px",
	top: "266px",
	left: "0px",
}

const textStyle = {
	color: "#DA5E9D",
  width: "159px",
}

const Works = ({userinfo}) => {
  return (
    <div style={worksStyle}>
      <TabWrapper>
        <Tab 
          title={<div style={textStyle}><b>내 작품</b></div>} 
          content={
            <Thumbnails 
              toons={userinfo.works} 
              style={{
                top:"40px",
                border: "1px solid black"
              }}
            />}
        />
        <Tab 
          title={<div style={textStyle}><b>내 구독</b></div>} 
          content={
            <Profiles 
              users={userinfo.following}
              style={{top:"266px"}}
            />}
        />
      </TabWrapper>
    </div>
  );
};

export default Works;
