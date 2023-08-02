import React, { useState } from 'react';
import useDetectClose from "./useDetectClose";
import useIconClick from './useIconClick';
import * as Styled from "./ChatStyles"; 

const test = () => {
  console.log("!")
};

const chatTmp = () => {
  // ...
};

const Like = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'} 
    style={{position: "absolute", left: "109px", top: "778px"}} 
    onClick={test}
  />;
};

const DisLike = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/love_icon.png'} 
    style={{position: "absolute", left: "45px", top: "778px"}} 
    onClick={test}
  />;
};

const Comment = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  }

  const {
    chatIconClicked,
    supportIconClicked,
    handleIconClick,
  } = useIconClick();

  return (
    <Styled.Wrapper>
      <Styled.DropdownContainer>
        {/* 채팅 아이콘 */}
        <Styled.DropdownButton
          onClick={() => {
            myPageHandler();
            handleIconClick(7);
          }}
          ref={myPageRef}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                (chatIconClicked ? '/images/bubble_chat_icon.png' : '/images/bubble_chat_icon.png')
              }
              alt="채팅 아이콘"
              // style={{position: "absolute", left: "-170px", top: "708px"}} // 이거 위치 왜 이런지 모르겠음
            />
          </Styled.DropdownButton>
          <Styled.Menu $isDropped={myPageIsOpen}>
            <Styled.MenuTitle>댓글 및 후원</Styled.MenuTitle>
            <Styled.MenuContainer>
              {/* 댓글 입력 폼 */}
              <input
                type="text"
                placeholder="댓글을 입력하세요."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                style={{position: "absolute", top: "405px"}}
              />
              <button 
                onClick={handleCommentSubmit}
                style={{position: "absolute", left: "220px", top: "405px"}}
                >댓글달기</button>
              {/* 댓글 표시 */}
              <Styled.CommentContainer>
                {comments.slice().reverse().map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </Styled.CommentContainer>
              {/* 후원 아이콘 */}
              <Styled.MenuButton
                onClick={() => {
                  chatTmp();
                  handleIconClick(8);
                }}
              >
                <img
                  src={
                    process.env.PUBLIC_URL +
                    (supportIconClicked ? '/images/support.png' : '/images/support.png')
                  }
                  alt="support icon"
                  style={{position: "absolute", left: "312px", top: "405px"}} 
                />
              </Styled.MenuButton>
            </Styled.MenuContainer>
          </Styled.Menu>
          {/* 삼각형 */}
          <Styled.TriangleWrapper>
            <Styled.TriangleInner $isDropped={myPageIsOpen} />
            <Styled.TriangleOuter $isDropped={myPageIsOpen} />
          </Styled.TriangleWrapper>
      </Styled.DropdownContainer>
    </Styled.Wrapper>
  )
}

/*
const Comment = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'} 
    style={{position: "absolute", left: "173px", top: "778px"}} 
    onClick={test}
  />;
};
*/

const Subscribe = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/star_icon.png'} 
    style={{position: "absolute", left: "237px", top: "778px"}} 
    onClick={test}
  />;
};

const Setting = ({renderPage}) => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/setting_icon.png'} 
    style={{position: "absolute", left: "301px", top: "778px"}}
    onClick={() => {renderPage('SettingPage')}}/>;
};




export { DisLike, Like, Comment, Subscribe, Setting };