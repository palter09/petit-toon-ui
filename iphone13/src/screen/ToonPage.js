import React from 'react';
import SwiperToon from "../swipe/SwiperToon.js";

const ToonPage = () => {
  const toonStyle = {
      position: 'absolute',
      width: '390px',
      height: '636px',
      left: '-12px',
      top: '113px',
      overflow: 'hidden',
  };

    return (
      <div style={toonStyle}>
        <SwiperToon />
      </div>
    );
  };

  export default ToonPage;