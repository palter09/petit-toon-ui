import React from "react";
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from "../../hooks/useIconClick";
import { useNavigate } from 'react-router-dom';
import "./DropdownMenu.css";
import { getCookie, deleteCookie } from "../../API/HandleTokens";

import { BiLogOut } from "react-icons/bi";

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
  const [logoutIconClicked, handleLogoutIconClicked] = useIconClick();

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

  const handleMyPageClick = () => {
    handleMyPageIconClicked();
    setTimeout(() => {
      navigate(`/userinfo/${userId}`);
    }, 150);
  };

  const handlePetitClick = () => {
    handlePetitIconClicked();
    setTimeout(() => {
      navigate(`/ranking`);
    }, 150);
  };

  const handleLogoutClick = () => {
    handleLogoutIconClicked();
    setTimeout(() => {
      deleteCookie('loginUserId');
      deleteCookie('refreshToken');
      deleteCookie('accessToken');
      navigate('/');
    }, 150);
  }

  return (
    <div className="dropdown-wrapper" ref={myPageRef}>
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
          <hr className="dropdown-hr"></hr>
          <div className="menu-container">
            <div className="menu-button" onClick={() => {handleMyPageClick(); myPageHandler();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mypageIconClicked ? "/images/mypage_clicked.png" : "/images/mypage.png")
                }
                alt="mypage icon"
              />
              &nbsp;&nbsp;
              <span>마이페이지</span>
            </div>

            <div className="menu-button" onClick={() => {handleStoreIconClick();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (storeIconClicked ? "/images/store_clicked.png" : "/images/store.png")
                }
                alt="store icon"
              />
              &nbsp;&nbsp;
              <span>스토어</span>
            </div>

            <div className="menu-button" onClick={() => {handleSearchIconClick();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (searchIconClicked ? "/images/search-engine_clicked.png" : "/images/search-engine.png")
                }
                alt="search-engine icon"
              />
              &nbsp;&nbsp;
              <span>검색</span>
            </div>

            <div className="menu-button" onClick={() => {handleMapIconClicked();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (mapIconClicked ? "/images/map_clicked.png" : "/images/map.png")
                }
                alt="map icon"
              />
              &nbsp;&nbsp;
              <span>탐색</span>
            </div>
           
            <div className="menu-button" onClick={() => {handlePetitClick();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (petitIconClicked ? "/images/petit_clicked.png" : "/images/petit.png")
                }
                alt="petit icon"
              />
              &nbsp;&nbsp;
              <span>이주의 쁘띠</span>
            </div>

            <div className="menu-button" onClick={() => {handleEventIconClicked();}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  (eventIconClicked ? "/images/event_clicked.png" : "/images/event.png")
                }
                alt="event icon"
              />
              &nbsp;&nbsp;
              <span>공지/이벤트</span>
            </div>
            
            <div className="menu-button" onClick={() => {handleLogoutClick();}}>
              <BiLogOut size="24px"/>
              &nbsp;&nbsp;
              <span>로그아웃</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
