import React from 'react';

const Star = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/star_icon.png'}
          alt="Star Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '247px', top: '761px' }}/>
      </div>
    );
  };

export default Star;