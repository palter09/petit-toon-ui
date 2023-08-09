import React from 'react';
import TabWrapper from '../Tab/TabWrapper.js';
import Tab from '../Tab/Tab.js';

import Thumbnails from '../SwiperScroll/SwiperThumbnails.js'

const worksStyle = {
	position: "absolute",
  backgroundColor: "#FFEDFE",
	width:"390px",
	height: "140px",
	top: "266px",
	left: "0px",
}

const textStyle = {
	color: "#DA5E9D",
  width: "159px",
}

const Works = (userinfo) => {
  return (
    <div style={worksStyle}>
      <TabWrapper>
        <Tab title={<div style={textStyle}><b>내 작품</b></div>} content={<p>This is the content for Tab 1</p>}/>
        <Tab title={<div style={textStyle}><b>내 구독</b></div>} content={<p>This is the content for Tab 2</p>}/>
      </TabWrapper>
    </div>
  );
};

export default Works;
