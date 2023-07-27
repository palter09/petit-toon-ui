import React from 'react';

const BrokenHeart = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'}
          alt="Broken Heart Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '99px', top: '761px' }}/>
      </div>
    );
  };

export default BrokenHeart;