import React from 'react';
import './StoreHeader.css';
import DropdownMenu from '../Header/DropdownMenu';

const StoreHeader = () => {
  
	return (
		<div className='StoreHeader'>
      <img style = {{
        position: 'relative',
        top: '1rem',
        left: '1rem',
        }} 
        src = {process.env.PUBLIC_URL + '/images/store/logo_store.png'}
        alt = 'store_logo'/>
      <img style = {{
        position: 'relative',
        top: '1.15rem',
        left: '0.8rem',
        }} 
        src = {process.env.PUBLIC_URL + '/images/store/store.png'}
        alt = 'store_logo_store'/>
      <DropdownMenu />
		</div>
	);
};

export default StoreHeader;