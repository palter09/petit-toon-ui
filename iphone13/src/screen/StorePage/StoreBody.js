import React from 'react';
import './StoreBody.css'
import StoreItemsList from './StoreItemsList';

const StoreBody = () => {
	return (
		<div className='StoreBody'>
			<StoreItemsList />
		</div>
	);
};

export default StoreBody;