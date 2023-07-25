import React from 'react';

const BubbleChat = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'}
          alt="Bubble Chat Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '173px', top: '761px' }}/>
      </div>
    );
  };

export default BubbleChat;