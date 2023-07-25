import React from 'react';
import SwiperLR from "../swipe/SwiperLR.js";
import SwiperToon from "../swipe/SwiperToon.js";

const MyComponent = () => {
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

  export default MyComponent;