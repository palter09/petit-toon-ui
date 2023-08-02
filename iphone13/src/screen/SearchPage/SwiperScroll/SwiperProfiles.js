import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './SwiperSearchPage.css';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function SwiperProfiles() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className="SwiperProf"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/profilesEx/profile1.png'} alt='profile1'/> </SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/profilesEx/profile2.png'} alt='profile2'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/profilesEx/profile3.png'} alt='profile3'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/profilesEx/profile2.png'} alt='profile2'/></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
