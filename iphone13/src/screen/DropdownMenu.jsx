import React, { useState } from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const menuTmp = () => {
  // ...
};

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [storeIconClicked, setStoreIconClicked] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [mapIconClicked, setMapIconClicked] = useState(false);
  const [petitIconClicked, setPetitIconClicked] = useState(false);
  const [eventIconClicked, setEventIconClicked] = useState(false);
  const [mypageIconClicked, setMypageIconClicked] = useState(false);

  const handleIconClick = (icon) => {
    switch(icon){
      case 0:
        setMenuIconClicked(true);
        setTimeout(() => {
          setMenuIconClicked(false);
        }, 100);
        break;
      case 1:
        setStoreIconClicked(true);
        setTimeout(() => {
          setStoreIconClicked(false);
        }, 100);
        break;
      case 2:
        setSearchIconClicked(true);
        setTimeout(() => {
          setSearchIconClicked(false);
        }, 100);
        break;
      case 3:
        setMapIconClicked(true);
        setTimeout(() => {
          setMapIconClicked(false);
        }, 100);
        break;
      case 4:
        setPetitIconClicked(true);
        setTimeout(() => {
          setPetitIconClicked(false);
        }, 100);
        break;
      case 5:
        setEventIconClicked(true);
        setTimeout(() => {
          setEventIconClicked(false);
        }, 100);
        break;
      case 6:
        setMypageIconClicked(true);
        setTimeout(() => {
          setMypageIconClicked(false);
        }, 100);
        break;
    }
  };

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={() => {
          myPageHandler();
          handleIconClick(0);
        }} ref={myPageRef}>
          <img
            src={
              process.env.PUBLIC_URL +
              (menuIconClicked ? "./images/menu_icon_clicked.png" : "./images/menu_icon.png")
            }
            alt="메뉴 아이콘"
          />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <MenuTitle>메뉴|Menu</MenuTitle>
          <MenuContainer>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(1);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (storeIconClicked ? "./images/store_clicked.png" : "./images/store.png")
                }
                alt="store icon"
              />
              <span>스토어</span>
            </MenuButton>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(2);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (searchIconClicked ? "./images/search-engine_clicked.png" : "./images/search-engine.png")
                }
                alt="search-engine icon"
              />
              <span>검색</span>
            </MenuButton>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(3);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (mapIconClicked ? "./images/map_clicked.png" : "./images/map.png")
                }
                alt="map icon"
              />
              <span>탐색</span>
            </MenuButton>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(4);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (petitIconClicked ? "./images/petit_clicked.png" : "./images/petit.png")
                }
                alt="petit icon"
              />
              <span>이주의 쁘띠</span>
            </MenuButton>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(5);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (eventIconClicked ? "./images/event_clicked.png" : "./images/event.png")
                }
                alt="event icon"
              />
              <span>공지/이벤트</span>
            </MenuButton>
            <MenuButton onClick={() => {
              menuTmp();
              handleIconClick(6);
            }}>
              <img
                src={
                  process.env.PUBLIC_URL + 
                  (mypageIconClicked ? "./images/mypage_clicked.png" : "./images/mypage.png")
                }
                alt="mypage icon"
              />
              <span>마이페이지</span>
            </MenuButton>
          </MenuContainer>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
};

export default DropdownMenu;

/*****************************
 styled-components 이용한 css
 *****************************/
//위치 -118 -18
//dropdown button 
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: white;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 320px;
  top: 47px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: absolute;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
  z-index:1;
`;
//dropdown button 클릭시 나오는 menu
const Menu = styled.div`
  background: white;
  position: absolute;
  top: 68px;
  left: 50%;
  width: 373px;
  height: 458px;
  text-align: center;
  border-radius: 32px;
  outline: 2px solid #DA5E9D;
  opacity: 0;
  visibility: hidden;
  transform: translate(-334px, -0px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  //click시 나오는 메뉴 위 삼각형
  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -15px;
    left: 90%;
    transform: translate(-50%, -50%);
    border: 25px solid transparent;
    border-top-width: 0;
    border-bottom: 41px solid white;
    z-index:9;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      left: 50%;
    `};
`;

//ul형식인데 안사용
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

//<a>형식
const LinkWrapper = styled.a`
  position : relative
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  background: transparent;
  color: #DA5E9D;
  text-decoration: none;
`;
//<div>형식
const MenuTitle = styled.div`
  position : relative;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  width: 106px;
  height: 22px;
  top: 5px;
  left: 22px;
  background: transparent;
  color: #DA5E9D;
`;

const MenuContainer = styled.div`
  position : relative
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 0px;
  letter-spacing: -0.40799999237060547px;
  background: transparent;
  color: #DA5E9D;
  text-decoration: none;


  //grid로 메뉴창 분할 가로 373px 세로 480px - 메뉴title 가:106 세:22
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  margin: 1.5rem;
  padding: 0px;
`;

const MenuButton = styled.div`
  background-color: white;
  border: transparent;

  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.40799999237060547px;
  background: transparent;
  color: #DA5E9D;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content : center;
  vertical-align: text-bottom;
`;

