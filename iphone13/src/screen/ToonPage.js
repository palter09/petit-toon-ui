/*
  const toonStyle = {
      position: 'absolute',
      width: '390px',
      height: '636px',
      left: '-12px',
      top: '113px',
      overflow: 'hidden',
  };
*/

import React from 'react';
import SwiperToon from "./ToonPage/SwiperToon.js";
import Header from "./ToonPage/Header.js"
import { DisLike, Like, Comment, Subscribe, Setting } from "./ToonPage/BottomButton.js"

const ToonPage = () => {
  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className='divLine1' />
      </div>
      <div className="item">
        <SwiperToon />
        <div className='divLine2' />
      </div>
      <div className="item">
        <DisLike />
        <Like />
        <Comment />
        <Subscribe />
        <Setting />
      </div>
    </div>
  );
};

export default ToonPage;