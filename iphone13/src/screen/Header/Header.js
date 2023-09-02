import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="Logo"
        style={{ position: 'absolute', width: '280px', height: '70px', left: '8px', top: '32px' }}/>
      <DropdownMenu />
    </div>
  );
};

export default Header;
