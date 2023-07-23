import React from 'react';

const GroupIcons = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/love_icon.png'}
          alt="Love Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '25px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'}
          alt="Broken Heart Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '99px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'}
          alt="Bubble Chat Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '173px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/star_icon.png'}
          alt="Star Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '247px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/setting_icon.png'}
          alt="Setting Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '321px', top: '761px' }}/>
      </div>
    );
  };

export default GroupIcons;