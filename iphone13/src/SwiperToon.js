import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
//import { Pagination } from 'swiper/modules';

import SwiperLR from './SwiperLR.js';

export default function SwiperToon() {
  /*example webtoon*/
  const webtoon = {

  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        direction={'vertical'}
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
        <SwiperSlide>webtoon 2</SwiperSlide>
        <SwiperSlide>webtoon 3</SwiperSlide>
        <SwiperSlide>webtoon 4</SwiperSlide>
        <SwiperSlide>webtoon 5</SwiperSlide>
        <SwiperSlide>webtoon 6</SwiperSlide>
        <SwiperSlide>webtoon 7</SwiperSlide>
        <SwiperSlide>webtoon 8</SwiperSlide>
        <SwiperSlide>webtoon 9</SwiperSlide>
      </Swiper>
    </>
  );
}
