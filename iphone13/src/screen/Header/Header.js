import React from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="Logo"/>
      <DropdownMenu />
    </div>
  );
};

export default Header;
