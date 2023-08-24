import React, { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import SwiperLR from "./SwiperLR.js";
import { getWebtoonInfo } from "../../API/ToonAPI";
import Loading from './Loading';

export default function SwiperToon({toonId}) {
  const tid = toonId.id;//toonId = { id: num }
  const [toon, setToon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const toonStyle = {
    position: "absolute",
    width: "390px",
    height: "636px",
    left: "0px",
    top: "113px",
    overflow: "hidden",
    textAlign: "center",
  };
  // 처음 렌더링 되거나 tid 변할때 api 호출
  useEffect(() => {
    getWebtoonInfo(tid, (responseData) => {
      setToon(responseData); // 웹툰 정보를 상태에 저장
      setIsLoading(false); // 데이터 로딩이 완료되었음을 나타냄
    });
  }, [tid]);


  if (isLoading) {
    return <div style ={toonStyle}><Loading/></div>;
  } 


  return (
    <>
      <Swiper spaceBetween={100} direction={"vertical"} style={toonStyle}>
        <SwiperSlide>
          <SwiperLR toon={toon} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
