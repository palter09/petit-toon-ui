import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './SwiperSearchPage.css';

// import required modules
import { FreeMode, Grid, Pagination, Mousewheel} from 'swiper/modules';

export default function SwiperThumbnails() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        direction={'vertical'}
        mousewheel={true}
        grid={{
          rows : 3,
          fill : 'row',
        }}
        freeMode={true}
        modules={[Grid, FreeMode, Pagination, Mousewheel]}

        className="SwiperThumb"
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails1.png'} alt='thumbnails1'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails2.png'} alt='thumbnails2'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails3.png'} alt='thumbnails3'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails4.png'} alt='thumbnails4'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails5.png'} alt='thumbnails5'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails6.png'} alt='thumbnails6'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails7.png'} alt='thumbnails7'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails8.png'} alt='thumbnails8'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails9.png'} alt='thumbnails9'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails10.png'} alt='thumbnails10'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails11.png'} alt='thumbnails11'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails12.png'} alt='thumbnails12'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails13.png'} alt='thumbnails13'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails14.png'} alt='thumbnails14'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails15.png'} alt='thumbnails15'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails16.png'} alt='thumbnails16'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails17.png'} alt='thumbnails17'/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/thumbnailsEx/thumbnails18.png'} alt='thumbnails18'/></SwiperSlide>
      </Swiper>
    </>
  );
}
