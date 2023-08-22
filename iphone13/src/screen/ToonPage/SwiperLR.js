import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import { increaseViewCount } from "../../API/ToonAPI";

export default function SwiperLR({ toon }) {
  // get user access token from cookie
  const get_cookie = (name) => {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
  };
  // 처음 렌더링 되거나 isView 변할때 api 호출
  useEffect(() => {
    increaseViewCount(toon.id, get_cookie("accessToken"));
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
