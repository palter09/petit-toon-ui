import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import SwiperLR from "./SwiperLR.js";
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';
import { getWebtoonInfo } from "../../API/ToonAPI";
import { Loading, Error404 } from "./Loading404";
import { useNavigate } from "react-router";


export default function SwiperToon({ feed, toonId, pageSize, onIsError, onIntersect }) {
  const navigate = useNavigate();
  const [toons, setToons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);
  const [observeTarget, setObserveTarget] = useState(true); // observe 상태 설정

  useEffect(() => {
    if (feed) {
      if (Array.isArray(feed) && feed.length > 0) {
        for (const tid of feed) {
          // 이미 존재하는 toon.id인지 확인
          if (!toons.some((existingToon) => existingToon.id === tid)) {
            getWebtoonInfo(
              tid,
              (data) => {
                // 이전 배열을 복사하고 새 데이터를 추가
                setToons((prev) => [...prev, data]);
                setIsLoading(false);
                setIs404(false);
              },
              () => {
                console.log("feed 내부 만화 정보 불러오기 실패");
              }
            );
          }
        }
      }
    }else{
      getWebtoonInfo(
        toonId,
        (responseData) => {
          // 이전 배열을 복사하고 새 데이터를 추가
          setToons((prev) => [...prev, responseData]);
          setIsLoading(false);
        },
        (errorResponseData) => {
          // fallback: 맨 처음 들어갔을 때 /toon/ 이 페이지는 400 뜨는데 그냥 이것도 404와 동일하게 처리함
          console.log("error code:", errorResponseData.code);
          console.log("error message:", errorResponseData.message);
          onIsError();
          setIs404(true);
          setIsLoading(false);
        }
      );
    }
  }, [feed, toonId]);
  useEffect(()=>{
    if(toons.length !== 0 && toons.length % pageSize === 0){
      setObserveTarget(true);
    }
  },[pageSize, toons])

  const options = {
    threshold : 0.3,//targetRef가 차지하는 비율
    root: document.querySelector('.swiperToon-wrapper')//viewport
  }
  const { targetRef, observerRef } = useIntersectionObserver(
    options,
    ()=>{
      if(observeTarget){
        onIntersect();
        observerRef.current.unobserve(targetRef.current);
        setObserveTarget(false);
      }
    },
  );


  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  /*
  if (is404) {
    return (
      <div>
        <Error404 what={"웹툰을"} />
      </div>
    );
  }*/
  return (
    <div className="swiperToon-wrapper">
      <Swiper spaceBetween={50} direction={"vertical"} onSlideChange={(swiper) => {
        const slideIndex = swiper.activeIndex; // 현재 활성화된 슬라이드의 인덱스
        const selectedToon = toons[slideIndex]; // 해당 슬라이드의 만화 정보
        if (selectedToon) {
          navigate(`/toon/${selectedToon.id}`); // 만화의 ID를 사용하여 페이지를 이동
        }
      }}>
        {toons &&
          toons.map((toon, index) => (
            <SwiperSlide key={index}> 
              <SwiperLR toon={toon}/>
            </SwiperSlide>
          ))}
          {!observeTarget? null : (
            <SwiperSlide api-reload-target={"true"} ref={targetRef}>
              loading...
            </SwiperSlide>
          )}
      </Swiper>
    </div>
  );
}  