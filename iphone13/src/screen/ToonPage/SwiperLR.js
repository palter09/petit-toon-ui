import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import { increaseViewCount } from "../../API/ToonAPI";

export default function SwiperLR({ toon }) {
  const [showInfo, setShowInfo] = useState(false); // 정보 화면 표시 상태

  // 이미지 클릭 시 정보 화면 표시
  const handleImageClick = (index) => {
    if(index===0){
    setShowInfo(true);
    }
  };

  // 정보 화면 클릭 시 정보 화면 닫기
  const handleInfoClick = () => {
    setShowInfo(false);
  };

  // 처음 렌더링 되거나 isView 변할때 api 호출
  useEffect(() => {
    increaseViewCount(toon.id);
  }, [toon]);

  return (
    <>
      <Swiper direction={"horizontal"}>
        {toon.imagePaths.map((imagePath, index) => (
          <SwiperSlide key={index} onClick={() => handleImageClick(index)}>
            <img
              src={`${process.env.REACT_APP_SERVER_IP}/resources/${imagePath}`}
              alt={`${toon.title}-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showInfo && (
        <div onClick={handleInfoClick}>
          <div>
            <h2>{toon.title}</h2>
            <p>{toon.description}</p>
            <p>작가:{toon.author}</p>
          </div>
        </div>
      )}
    </>
  );
}
