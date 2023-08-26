import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import SwiperLR from "./SwiperLR.js";
import { getWebtoonInfo } from "../../API/ToonAPI";
import { Loading, Error404 } from "./Loading404";

export default function SwiperToon({ toonId, onIsError }) {
  const [toon, setToon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);
  const toonStyle = {
    position: "absolute",
    width: "390px",
    height: "636px",
    left: "0px",
    top: "113px",
    overflow: "hidden",
    textAlign: "center",
  };

  useEffect(() => {
    getWebtoonInfo(
      toonId,
      (responseData) => {
        //callback
        setToon(responseData);
        setIsLoading(false);
      },
      (errorResponseData) => {
        //fallback: 맨 처음 들어갔을때 /toon/ 이 페이지는 400 뜨는데 그냥 이것도 404와 동일하게 처리함
        console.log("error code:", errorResponseData.code);
        console.log("error message:", errorResponseData.message);
        onIsError();
        setIs404(true);
        setIsLoading(false);
      }
    );
  }, [onIsError, toonId]);

  if (isLoading) {
    return (
      <div style={toonStyle}>
        <Loading />
      </div>
    );
  }
  if (is404) {
    return (
      <div style={toonStyle}>
        <Error404 what = {'웹툰'} />
      </div>
    );
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
