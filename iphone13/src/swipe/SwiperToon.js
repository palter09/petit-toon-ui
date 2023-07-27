import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
//import { Pagination } from 'swiper/modules';

import SwiperLR from './SwiperLR.js';

/*
// 서버에서 이미지와 이미지 개수를 가져오는 부분

const ImageGallery = () => {
  const [numImages, setNumImages] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('/api/images')
      .then((response) => {
        setNumImages(response.data.numImages);
        setImageUrls(response.data.imageUrls);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h2>Number of Images: {numImages}</h2>
      <div className="image-container">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
*/

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
        <SwiperSlide>
          <SwiperLR toon = {webtoon}/>
        </SwiperSlide>
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
