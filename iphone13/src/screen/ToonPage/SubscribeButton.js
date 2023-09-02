import React, { useState } from 'react';
import { followUser, deleteFollower } from '../../API/FollowAPI';

const SubscribeButton = ({toonId, isError}) => {
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
    style={{position: "absolute", left: "237px", bottom: "23px"}} 
    alt='follow'
    onClick={handleSubscribeClick}
  />;
};

export default SubscribeButton;