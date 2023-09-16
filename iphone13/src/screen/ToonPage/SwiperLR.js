import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import { increaseViewCount } from "../../API/ToonAPI";
import { useNavigate } from "react-router";

export default function SwiperLR({ toon }) {
  const [showInfo, setShowInfo] = useState(false); // 정보 화면 표시 상태
  const navigate = useNavigate();
  // 이미지 클릭 시 정보 화면 표시
  const handleImageClick = (index) => {
    if(index === 0) setShowInfo((prevShowInfo) => !prevShowInfo); 
  };
  //slide변경시 showinfo창 reset
  const handleSlideChange = () =>{
    setShowInfo(false);
  }
  // 처음 렌더링 되거나 isView 변할때 api 호출
  useEffect(() => {
    increaseViewCount(toon.id);
  }, [toon]);

  return (
    <>
      <Swiper spaceBetween={'5rem'} direction={"horizontal"} onSlideChange={handleSlideChange}>
        {toon.imagePaths.map((imagePath, index) => (
          <SwiperSlide key={index} onClick={() => handleImageClick(index)}>
            {/*정보창*/}
            {showInfo && index === 0 ? (
              <div className='swiperLR-toonInfo-wrapper'>
                <div className='swiperLR-toonInfo'>
                  <div className="swiperLR-toonInfo-contents">
                    <h2>{toon.title}</h2>
                    <div className="swiperLR-toonInfo-author-wrapper" onClick={()=>navigate(`/userinfo/${toon.authorId}`)}>
                      <div className="swiperLR-toonInfo-author-profile">
                        <img
                        src= {`${process.env.PUBLIC_URL}/resources/${toon.profileImageUrl}` && process.env.PUBLIC_URL + '/images/mypage.png'} 
                        alt= '작가'
                        />
                      </div>
                      <p>{toon.authorNickname}</p>
                    </div>
                    <div className='swiperLR-toonInfo-likeAndView-wrapper'>
                      <>
                        <p>조회수: <b>{toon.viewCount}</b></p>
                        <p>좋아요: <b>{toon.likeCount}</b></p>
                      </>
                    </div>
                    <h3>{toon.description}</h3>
                  </div>
                </div>
              </div>
            ) : (null)}
            {/*만화*/}
            <div className="swiperLR-toon-container">
              <div className="swiperLR-toon-wrapper">
                <img
                    src={`${process.env.REACT_APP_SERVER_IP}/resources/${imagePath}`}
                    alt={`${toon.title}-${index}`}
                  />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
