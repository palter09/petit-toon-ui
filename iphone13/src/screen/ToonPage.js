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
import Header from "./Header/Header.js"
import { DisLike, Like, Comment, Subscribe, Setting } from "./ToonPage/BottomButton.js"

const ToonPage = () => {
  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className='divLineHeader' />
        <SwiperToon />
        <div className='divLineBottom' />
        <DisLike />
        <Like />
        <Comment renderPage={renderPage} />
        <Subscribe />
        <Setting />
      </div>
    </div>
  );
};

export default ToonPage;