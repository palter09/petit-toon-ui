import React from 'react';

const Love = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/love_icon.png'}
          alt="Love Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '25px', top: '761px' }}/>
      </div>
    );
  };

export default Love;