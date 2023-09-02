import React, { useState } from 'react';
import { dislikeWebtoon } from '../../API/LikeAPI';

const DisLikeButton = ({toonId, isError}) => {
  const userId = 'user123'; // Replace with actual user ID

  const [disLiked, setDisLiked] = useState(false);

  const handleDisLikeClick = () => {
    // if(isError) return;
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
    onClick={handleDisLikeClick}
  />;
};

export default DisLikeButton;