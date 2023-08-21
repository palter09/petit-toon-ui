import React, { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import SwiperLR from "./SwiperLR.js";
import { getWebtoonInfo } from "../../API/ToonAPI";

export default function SwiperToon({toonId}) {
  const tid = toonId.id;//toonId = { id: num }
  const [toon, setToon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const toonStyle = {
    position: "absolute",
    width: "390px",
    height: "636px",
    left: "-12px",
    top: "113px",
    overflow: "hidden",
    textAlign: "center",
  };
  // get user access token from cookie
  const get_cookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
  };
  // 처음 렌더링 되거나 tid 변할때 api 호출
  useEffect(() => {
    getWebtoonInfo(tid, get_cookie("accessToken"), (responseData) => {
      setToon(responseData); // 웹툰 정보를 상태에 저장
      setIsLoading(false); // 데이터 로딩이 완료되었음을 나타냄
    });
  }, [tid]);


  if (isLoading) {
    return <div style ={toonStyle}>Loading...</div>;
  } 


  return (
    <>
      <Swiper spaceBetween={30} direction={"vertical"} style={toonStyle}>
        <SwiperSlide>
          <SwiperLR toon={toon} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
