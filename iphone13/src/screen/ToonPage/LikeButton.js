import React, { useState } from 'react';
import { likeWebtoon } from '../../API/LikeAPI';

const LikeButton = ({toonId, isError}) => {
  const userId = 'user123'; // Replace with actual user ID
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    // if(isError) return;
    if (liked) {
      setLiked(!liked);
    }
    else {
      likeWebtoon(userId, toonId);
    }
  };

  return <img 
    src={process.env.PUBLIC_URL + (liked ? '/images/love_icon.png' : '/images/love_icon_b&w.png')} 
    alt='like'
    onClick={handleLikeClick}
  />;
};

export default LikeButton;