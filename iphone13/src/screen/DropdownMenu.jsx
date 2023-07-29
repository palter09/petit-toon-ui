import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "./useDetectClose";

const DropdownMenu = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={myPageHandler} ref={myPageRef}>
          <img
            src={process.env.PUBLIC_URL + "./images/menu_icon.png"}
            alt="menu icon"
          />
        </DropdownButton>
        <Menu isDropped={myPageIsOpen}>
          <MenuTitle>메뉴|Menu</MenuTitle>
          <MenuContainer>

          </MenuContainer>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
};

export default DropdownMenu;

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
    top: -20px;
    left: 90%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom: 50px solid white;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      //transform: translate(-50%, 0);
      left: 50%;
    `};
`;

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
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  background: transparent;
  color: #DA5E9D;
  text-decoration: none;

  display: grid;
  grid-template-column: 
  grid-template-rows:
`;