import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/SwiperEditToon.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImgUpload from './ImgUpload';
import { Pagination, Navigation } from 'swiper/modules';

const SwiperEditToon = ({ imgFiles, setImgFiles, imgSize, inputId, inputName }) => {

  useEffect(()=>{
  //  console.log("swiperEditToon", imgFiles);
  },[imgFiles])

  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="SwiperRegToon"
      >
        {imgFiles.map((imgFile, index) => (
          <SwiperSlide key={index}>
              <ImgUpload
                imgFile={imgFile}
                setImgFile={(newImgFile) => {
                  const newImgFiles = [...imgFiles];
                  newImgFiles[index] = newImgFile;
                  setImgFiles(newImgFiles);
                }}
                imgSize={imgSize}
                inputId={`${inputId}-${index}`}
                inputName={`${inputName}-${index}`}
                isDisabled={index > 0 && !imgFiles[index - 1]}                
              />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default SwiperEditToon;
