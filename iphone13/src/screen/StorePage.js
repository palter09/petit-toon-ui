import React from 'react';
import StoreHeader from './StorePage/StoreHeader';
import StoreBody from './StorePage/StoreBody';
import StoreFooter from './StorePage/StoreFooter';

const StorePage = () => {
	return (
		<div className='container'>
      <div className='item'>
        <StoreHeader />
      </div>
      <div className='item'>
        <StoreBody />
      </div>
      <div className='item'>
        <StoreFooter />
      </div>
		</div>
	);
};

export default StorePage;