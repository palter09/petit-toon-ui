import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import SwiperLR from './SwiperLR.js';

export default function SwiperToon(toonId) {
  /*example webtoon*/
  const webtoon = {

  }

  const toonStyle = {
    position: 'absolute',
    width: '390px',
    height: '636px',
    left: '-12px',
    top: '113px',
    overflow: 'hidden',
};

  return (
    <>
      <Swiper
        spaceBetween={30}
        direction={'vertical'}
        style={toonStyle}
        /*
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="SwiperToon"
        */
      >
        <SwiperSlide>
          <SwiperLR toon = {webtoon}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
