import React from "react";
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from "../../hooks/useIconClick";
import { useNavigate } from 'react-router-dom';
import "./DropdownMenu.css";
import { getCookie } from "../../API/HandleTokens";


const DropdownMenu = () => {
  const userId = parseInt(getCookie("loginUserId"));
  const navigate = useNavigate();
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [menuIconClicked, handleMenuIconClicked] = useIconClick();
  const [storeIconClicked, handleStoreIconClicked] = useIconClick();
  const [searchIconClicked, handleSearchIconClicked] = useIconClick();
  const [mapIconClicked, handleMapIconClicked] = useIconClick();
  const [petitIconClicked, handlePetitIconClicked] = useIconClick();
  const [eventIconClicked, handleEventIconClicked] = useIconClick();
  const [mypageIconClicked, handleMyPageIconClicked] = useIconClick();
  

  const handleSearchIconClick = () => {
    handleSearchIconClicked();
    setTimeout(() => {
      navigate('/search');
    }, 150);
  };

  const handleStoreIconClick = () => {
    handleStoreIconClicked();
    setTimeout(() => {
      navigate('/store');
    }, 150);
  };

  const handleMyPageClick= ()=>{
    handleMyPageIconClicked();
    setTimeout(() => {
      navigate(`/userinfo/${userId}`);
    }, 150);
  };
  const handlePetitClick= ()=>{
    handlePetitIconClicked();
    setTimeout(() => {
      navigate(`/ranking`);
    }, 150);
  };
  return (
    <div className="Wrapper" ref={myPageRef}>
      <img 
        className="dropdown-button"
        src={process.env.PUBLIC_URL + (menuIconClicked ? "/images/menu_icon_clicked.png" : "/images/menu_icon.png")} 
        alt="메뉴 아이콘" 
        onClick={() => {
          myPageHandler();
          handleMenuIconClicked();
        }}
      />
      <div className="dropdown-container">
        <div className={`menu ${myPageIsOpen ? 'open' : ''}`}>
          <div className="menu-title">메뉴|Menu</div>
          <div className="menu-container">
            {/*header menu안의 buttons*/}
            {/*1. store icon */}
            <div
              className="menu-button"
              onClick={() => {
                handleStoreIconClick();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (storeIconClicked ? "/images/store_clicked.png" : "/images/store.png")
                }
                alt="store icon"
              />
              <span>스토어</span>
            </div>
            {/*2. search-engine icon */}
            <div
              className="menu-button"
              onClick={() => {
                handleSearchIconClick();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (searchIconClicked ? "/images/search-engine_clicked.png" : "/images/search-engine.png")
                }
                alt="search-engine icon"
              />
              <span>검색</span>
            </div>
            {/*3 map icon */}
            <div
              className="menu-button"
              onClick={() => {
                handleMapIconClicked();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mapIconClicked ? "/images/map_clicked.png" : "/images/map.png")
                }
                alt="map icon"
              />
              <span>탐색</span>
            </div>
            {/*4. petit icon */}
            <div
              className="menu-button"
              onClick={() => {
                handlePetitClick();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (petitIconClicked ? "/images/petit_clicked.png" : "/images/petit.png")
                }
                alt="petit icon"
              />
              <span>이주의 쁘띠</span>
            </div>
            {/*5. event icon */}
            <div
              className="menu-button"
              onClick={() => {
                handleEventIconClicked();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (eventIconClicked ? "/images/event_clicked.png" : "/images/event.png")
                }
                alt="event icon"
              />
              <span>공지/이벤트</span>
            </div>
            {/*6. mypage icon */}
            <div
              className="menu-button"
              onClick={() => {
                handleMyPageClick();
                myPageHandler();
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mypageIconClicked ? "/images/mypage_clicked.png" : "/images/mypage.png")
                }
                alt="mypage icon"
              />
              <span>마이페이지</span>
            </div>
          </div>
        </div>
        {myPageIsOpen && <div className={`triangle-outer ${myPageIsOpen ? 'fade-in' : ''}`} />}
        {myPageIsOpen && <div className={`triangle-inner ${myPageIsOpen ? 'fade-in' : ''}`} />}
      </div>
    </div>
  );
};

export default DropdownMenu;
