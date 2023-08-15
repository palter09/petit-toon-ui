import React, { useState } from 'react';
import useDetectClose from "../Header/useDetectClose";
import useIconClick from '../Header/useIconClick';
import "./ChatStyles.css";
import { useNavigate } from 'react-router-dom';

const test = () => {
  console.log("!")
};

const chatTmp = () => {
  // ...
};

const Like = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    // Make API call to like or unlike based on the 'liked' state
    const userId = 'user123'; // Replace with actual user ID
    const toonId = 'toon456'; // Replace with actual toon ID

    fetch(`/api/v1/like/${userId}/${toonId}`, {
      method: liked ? 'DELETE' : 'POST', // If liked, perform unlike (DELETE), otherwise like (POST)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data if needed
        setLiked(!liked); // Toggle the liked state
      })
      .catch(error => {
        // Handle error if needed
      });
  };

  return <img 
    src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'} 
    style={{position: "absolute", left: "109px", top: "778px"}} 
    onClick={toggleLike}
  />;
};

const DisLike = () => {
  const [disLiked, setDisLiked] = useState(false);

  const toggleDisLike = () => {
    // Make API call to like or unlike based on the 'liked' state
    const userId = 'user123'; // Replace with actual user ID
    const toonId = 'toon456'; // Replace with actual toon ID

    fetch(`/api/v1/dislike/${userId}/${toonId}`, {
      method: disLiked ? 'DELETE' : 'POST', // If liked, perform unlike (DELETE), otherwise like (POST)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data if needed
        setDisLiked(!disLiked); // Toggle the liked state
      })
      .catch(error => {
        // Handle error if needed
      });
  };

  return <img 
    src={process.env.PUBLIC_URL + '/images/love_icon.png'} 
    style={{position: "absolute", left: "45px", top: "778px"}} 
    onClick={toggleDisLike}
  />;
};

const Comment = ({renderPage}) => {
  const [myPageIsOpen, myPageToggleHandler] = useDetectClose(false);
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
    <div className='Wrapper'>
      <div className="dropdown-container">
        {/* 채팅 아이콘 */}
        <div className='dropdown-button'
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
          <div className={`menu ${myPageIsOpen ? 'open' : ''}`}>
            <div className='menu-title'>댓글 및 후원</div>
            <div className='menu-container'>
              {/* 댓글 입력 폼 */}
              <input
                type="text"
                placeholder="댓글을 입력하세요."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                style={{position: "absolute", top: "350px"}}
              />
              <button 
                onClick={handleCommentSubmit}
                style={{position: "absolute", left: "200px", top: "355px"}}
                >댓글달기</button>
              {/* 댓글 표시 */}
              <div className='comment-container'>
                {comments.slice().reverse().map((comment, index) => (
                  <div key={index}>{comment}</div>
                ))}
              </div>
              {/* 후원 아이콘 */}
              <div className='support-button'
                onClick={() => {
                  renderPage('SupportPage')
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
          <div className='triangle-wrapper'>
            {myPageIsOpen && <div className={`triangle-outer ${myPageIsOpen ? 'fade-in' : ''}`} />}
            {myPageIsOpen && <div className={`triangle-inner ${myPageIsOpen ? 'fade-in' : ''}`} />}
          </div>
      </div>
    </div>
  )
};

const Subscribe = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/star_icon.png'} 
    style={{position: "absolute", left: "237px", top: "778px"}} 
    onClick={test}
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