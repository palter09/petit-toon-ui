import React from 'react';
import './StoreBody.css'
import StoreItemsList from './StoreItemsList';

const StoreBody = () => {
	return (
		<div className='StoreBody'>
			<StoreItemsList columns={3} />
		</div>
	);
};

export default StoreBody;