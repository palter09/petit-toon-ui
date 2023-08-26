import React, { useState } from 'react';
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from '../../hooks/useIconClick';
import { likeWebtoon, dislikeWebtoon } from '../../API/LikeAPI'
import { followUser, deleteFollower } from '../../API/FollowAPI'
import "./ChatStyles.css";
import { useNavigate } from 'react-router-dom';
import { GoPaperAirplane } from "react-icons/go";
import { RiCoinsFill } from "react-icons/ri";

const Like = ({toonId, isError}) => {
  const userId = 'user123'; // Replace with actual user ID
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if(isError) return;
    if (liked) {
      setLiked(!liked);
    }
    else {
      likeWebtoon(userId, toonId);
    }
  };

  return <img 
    src={process.env.PUBLIC_URL + (liked ? '/images/love_icon.png' : '/images/love_icon_b&w.png')} 
    style={{position: "absolute", left: "45px", top: "778px"}} 
    alt='like'
    onClick={handleLikeClick}
  />;
};

const DisLike = ({toonId, isError}) => {
  const userId = 'user123'; // Replace with actual user ID

  const [disLiked, setDisLiked] = useState(false);

  const handleDisLikeClick = () => {
    if(isError) return;
    if (disLiked) {
      setDisLiked(!disLiked);
    }
    else {
      dislikeWebtoon(userId, toonId);
    }
  };

  return <img 
    src={process.env.PUBLIC_URL + (disLiked? '/images/broken_heart_icon.png' : '/images/broken_heart_icon_b&w.png')} 
    alt='hate'
    style={{position: "absolute", left: "109px", top: "778px"}} 
    onClick={handleDisLikeClick}
  />;
};

const Comment = ({toonId, isError}) => {
  const [myPageIsOpen, myRef, myPageToggleHandler] = useDetectClose(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
    handleIconClick(8);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentSubmit();
    }
  };

  const {
    chatIconClicked,
    commentClicked,
    handleIconClick,
  } = useIconClick();

  return (
    <div className='comment-wrapper' ref={myRef}>
      <div className="comment-container">
        {/* 채팅 아이콘 */}
        <div className='comment-button'
          onClick={() => {
            if(!isError){
              myPageToggleHandler();
              handleIconClick(7);
            }
          }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                (!isError ?
                (chatIconClicked ? '/images/bubble_chat_icon_b&w.png' : '/images/bubble_chat_icon.png') :
                '/images/bubble_chat_icon_b&w.png')
              }
              alt="채팅 아이콘"
            />
          </div> {/* dropdown-button */}
          <div className={`comment-menu ${myPageIsOpen ? 'open' : ''}`}>
            <div className='comment-menu-title'>댓글 및 후원</div>
            <div className='comment-menu-container'>
              {/* 댓글 표시 */}
              <div className='comment-section-container'>
                {comments.slice().reverse().map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </div>
              <div className='comment-menu-bottom-wrapper'>
                {/* 댓글 입력 폼 */}
                <input
                  type="text"
                  placeholder="댓글을 입력하세요."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <GoPaperAirplane
                  color={commentClicked ? '#800000' : '#FF3CBB'}
                  size="30"
                  onClick={handleCommentSubmit}
                />
                {/* 후원 아이콘 */}
                <RiCoinsFill color= '#FF8200' size = '40'/>
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

const Subscribe = ({toonId, isError}) => {
  const followerId = 'user123'; // Replace with actual user ID
  const followeeId = 'user456'; // Replace with actual user ID
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribeClick = () => {
    if(isError) return;
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
    alt='follow'
    onClick={handleSubscribeClick}
  />;
};

const Setting = () => {
  const navigate = useNavigate();

  return <img 
    src={process.env.PUBLIC_URL + '/images/setting_icon.png'} 
    style={{position: "absolute", left: "301px", top: "778px"}}
    alt='setting'
    onClick={() => { navigate('/setting'); }}/>;
};



export { DisLike, Like, Comment, Subscribe, Setting };