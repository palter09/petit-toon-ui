import styled, { css, keyframes } from "styled-components";

/*****************************
 styled-components 이용한 css
 *****************************/
//위치 -118 -18
//dropdown button 
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: white;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 173px;
  top: 780px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 9;
`;

export const DropdownButton = styled.div`
  cursor: pointer;
  z-index:9;
`;
//dropdown button 클릭시 나오는 menu
export const Menu = styled.div`
  background: white;
  position: absolute;
  top: -483px;
  left: 23px;
  width: 373px;
  height: 458px;
  text-align: center;
  border-radius: 32px;
  outline: 2px solid #DA5E9D;
  //처음에 투명하고 보이지 않게 설정
  opacity: 0;
  visibility: hidden;
  //애니메이션 효과
  transform: translate(-187px, -0px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  /*
  //click시 나오는 메뉴 위 삼각형 - 이거 안씀 이 코드말고 triangle wrapper triangle로 변경함 
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
  }*/
  //$isDropped가 true면 보임
  ${({ $isDropped }) =>
    $isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      left: 50%;
    `};
    resize: vertical;
    overflow: auto;
`;

/*triangle animation*/
const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

// 삼각형 요소를 감싸는 Wrapper
export const TriangleWrapper = styled.div`
  position: relative;
  width: 0;
  height: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

// 테두리가 분홍색인 삼각형 (외부 삼각형)
export const TriangleOuter = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid #DA5E9D;
  position: absolute;
  top: -80px; /* 위쪽으로 이동하여 겹치도록 설정 */
  animation: ${({ $isDropped }) => ($isDropped ? fadeIn : fadeOut)} 0.1s ease;
  visibility: ${({ $isDropped }) => ($isDropped ? "visible" : "hidden")};
  opacity: ${({ $isDropped }) => ($isDropped ? 1 : 0)};
  z-index: 8;
  transform: scaleY(-1);
`;

// 내부가 흰색인 삼각형 (내부 삼각형)
export const TriangleInner = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 35px solid white;
  position: absolute;
  top: -80px; /* 위쪽으로 이동하여 겹치도록 설정 */
  animation: ${({ $isDropped }) => ($isDropped ? fadeIn : fadeOut)} 0.1s ease;
  visibility: ${({ $isDropped }) => ($isDropped ? "visible" : "hidden")};
  opacity: ${({ $isDropped }) => ($isDropped ? 1 : 0)};
  z-index: 9;
  transform: scaleY(-1);
`;

//<div>형식
export const MenuTitle = styled.div`
  position : relative;
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  width: 120px;
  height: 22px;
  top: 5px;
  left: 22px;
  background: transparent;
  color: #DA5E9D;
`;

export const MenuContainer = styled.div`
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

/*메뉴창 각각의 버튼*/
export const MenuButton = styled.div`
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

// 댓글 스타일
export const CommentContainer = styled.div`
  max-height: 200px; /* Set a maximum height to limit the comment container's size */
  overflow-y: auto; /* Add vertical scrollbar if comments overflow */
  padding: 60px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column-reverse; /* Reverse the direction of content */
  line-height: 1.4;
  color: #000000;
`;