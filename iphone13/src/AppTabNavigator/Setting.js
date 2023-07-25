import React from 'react';

const Setting = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/setting_icon.png'}
          alt="Setting Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '321px', top: '761px' }}/>
      </div>
    );
  };

export default Setting;