import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import { increaseViewCount } from "../../API/ToonAPI";

export default function SwiperLR({ toon }) {
  // 처음 렌더링 되거나 isView 변할때 api 호출
  useEffect(() => {
    increaseViewCount(toon.id);
  }, [toon]);
  return (
    <>
      <Swiper spaceBetween={30} direction={"horizontal"}>
        {toon.imagePaths.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <img src={imagePath} alt={`${toon.title}-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
