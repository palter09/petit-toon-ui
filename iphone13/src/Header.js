import React from 'react';

const Header = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="Logo"
        style={{ position: 'absolute', width: '296px', height: '73px', left: '8px', top: '32px' }}/>
        
      <img
        src={process.env.PUBLIC_URL + '/images/menu_icon.png'}
        alt="Menu Icon"
        style= {{ position: 'absolute', width: '45px', height: '45px', left: '320px', top: '47px' }}/>
    </div>
  );
};

export default Header;
