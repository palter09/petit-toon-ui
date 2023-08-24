import React, { useState } from 'react';
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from '../../hooks/useIconClick';
import { likeWebtoon, dislikeWebtoon } from '../../API/LikeAPI'
import { followUser, deleteFollower } from '../../API/FollowAPI'
import "./ChatStyles.css";
import { useNavigate } from 'react-router-dom';

const test = () => {
  console.log("!")
};

const chatTmp = () => {
  // ...
};

const Like = () => {
  const userId = 'user123'; // Replace with actual user ID
  const toonId = 'toon456'; // Replace with actual toon ID

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (liked) {
      /* 좋아요 해제 */
    }
    else {
      likeWebtoon(userId, toonId);
    }
    setLiked(!liked);
  };

  return <img 
    src={process.env.PUBLIC_URL + (liked ? '/images/love_icon.png' : '/images/love_icon_b&w.png')} 
    style={{position: "absolute", left: "109px", top: "778px"}} 
    onClick={handleLikeClick}
  />;
};

const DisLike = () => {
  const userId = 'user123'; // Replace with actual user ID
  const toonId = 'toon456'; // Replace with actual toon ID

  const [disLiked, setDisLiked] = useState(false);

  const handleDisLikeClick = () => {
    if (disLiked) {
      /* 싫어요 해제 */
    }
    else {
      dislikeWebtoon(userId, toonId);
    }
    setDisLiked(!disLiked);
  };

  return <img 
    src={process.env.PUBLIC_URL + (disLiked? '/images/broken_heart_icon.png' : '/images/broken_heart_icon_b&w.png')} 
    style={{position: "absolute", left: "45px", top: "778px"}} 
    onClick={handleDisLikeClick}
  />;
};

const Comment = () => {
  const [myPageIsOpen, myRef, myPageToggleHandler] = useDetectClose(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentSubmit();
    }
  };

  const {
    chatIconClicked,
    supportIconClicked,
    handleIconClick,
  } = useIconClick();

  return (
    <div className='comment-wrapper' ref={myRef}>
      <div className="comment-container">
        {/* 채팅 아이콘 */}
        <div className='comment-button'
          onClick={() => {
            myPageToggleHandler();
            handleIconClick(7);
          }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                (chatIconClicked ? '/images/bubble_chat_icon.png' : '/images/bubble_chat_icon.png')
              }
              alt="채팅 아이콘"
            />
          </div> {/* dropdown-button */}
          <div className={`comment-menu ${myPageIsOpen ? 'open' : ''}`}>
            <div className='comment-menu-title'>댓글 및 후원</div>
            <div className='comment-menu-container'>
              {/* 댓글 입력 폼 */}
              <input
                type="text"
                placeholder="댓글을 입력하세요."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{position: "absolute", top: "350px"}}
              />
              <button 
                onClick={handleCommentSubmit}
                style={{position: "absolute", left: "200px", top: "355px"}}
                >댓글달기</button>
              {/* 댓글 표시 */}
              <div className='comment-section-container'>
                {comments.slice().reverse().map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </div>
              {/* 후원 아이콘 */}
              <div className='support-button'
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
                  style={{position: "absolute", left: "280px", top: "350px"}} 
                />
              </div>
            </div>
          </div>
          {/* 삼각형 */}
          <div className='comment-triangle-wrapper'>
            {myPageIsOpen && <div className={`comment-triangle-outer ${myPageIsOpen ? 'fade-in' : ''}`} />}
            {myPageIsOpen && <div className={`comment-triangle-inner ${myPageIsOpen ? 'fade-in' : ''}`} />}
          </div>
      </div>
    </div>
  )
};

const Subscribe = () => {
  const followerId = 'user123'; // Replace with actual user ID
  const followeeId = 'user456'; // Replace with actual user ID

  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribeClick = () => {
    if (subscribe) {
      deleteFollower(followerId, followeeId);
    }
    else {
      followUser(followeeId);
    }
    setSubscribe(!subscribe);
  };

  return <img 
    src={process.env.PUBLIC_URL + (subscribe? '/images/star_icon.png' : '/images/star_icon_b&w.png')} 
    style={{position: "absolute", left: "237px", top: "778px"}} 
    onClick={handleSubscribeClick}
  />;
};

const Setting = () => {
  const navigate = useNavigate();

  return <img 
    src={process.env.PUBLIC_URL + '/images/setting_icon.png'} 
    style={{position: "absolute", left: "301px", top: "778px"}}
    onClick={() => { navigate('/setting'); }}/>;
};



export { DisLike, Like, Comment, Subscribe, Setting };