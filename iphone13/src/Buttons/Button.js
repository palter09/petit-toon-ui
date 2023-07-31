import React, { useState } from 'react';

import './Button.css'


const Button = (props) => {
    return (
      <div>
        {/* 이미지를 표시하고 이벤트를 할당합니다. */}
        <img
          src={props.src}
          style={{ position: 'absolute', left: props.left, top: props.top }}
          onClick={props.clickEvent}
        />
      </div>
    );
  };
  
  export default Button;