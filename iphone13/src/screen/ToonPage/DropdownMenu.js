import React from "react";
import useDetectClose from "./useDetectClose";
import useIconClick from "./useIconClick";
import { useNavigate } from 'react-router-dom';
import "./DropdownMenu.css";

const menuTmp = () => {
  // ...
};

const DropdownMenu = () => {
  const navigate = useNavigate();
  
  const [myPageIsOpen, myPageToggleHandler] = useDetectClose(false);
  const {
    menuIconClicked,
    storeIconClicked,
    searchIconClicked,
    mapIconClicked,
    petitIconClicked,
    eventIconClicked,
    mypageIconClicked,
    handleIconClick,
  } = useIconClick();

  //iconclick효과가 페이지 이동보다 먼저 일어나게
  const handleSearchIconClick = () => {
    handleIconClick(2);
    setTimeout(() => {
      navigate('/search');
    }, 150);
  };

  return (
    <div className="Wrapper">
      <div className="dropdown-container">
        {/*header menu button 헤더상의 메뉴 버튼*/}
        {/*0. menu button*/}
        <div
          className="dropdown-button"
          onClick={() => {
            myPageToggleHandler();
            handleIconClick(0);
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              (menuIconClicked ? "/images/menu_icon_clicked.png" : "/images/menu_icon.png")
            }
            alt="메뉴 아이콘"
          />
        </div>
        {/*header menu open 오픈된 메뉴*/}
        <div className={`menu ${myPageIsOpen ? 'open' : ''}`}>
          <div className="menu-title">메뉴|Menu</div>
          <div className="menu-container">
            {/*header menu안의 buttons*/}
            {/*1. store icon */}
            <div
              className="menu-button"
              onClick={() => {
                menuTmp();
                handleIconClick(1);
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
                menuTmp();
                handleIconClick(3);
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
                menuTmp();
                handleIconClick(4);
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
                menuTmp();
                handleIconClick(5);
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
                menuTmp();
                handleIconClick(6);
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
        {/* 삼각형 요소 */}
        <div className="triangle-wrapper">
          {myPageIsOpen && <div className={`triangle-outer ${myPageIsOpen ? 'fade-in' : ''}`} />}
          {myPageIsOpen && <div className={`triangle-inner ${myPageIsOpen ? 'fade-in' : ''}`} />}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
