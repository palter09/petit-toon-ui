import React from 'react';
import './StoreFooter.css'

const StoreFooter = () => {
	return (
		<div className='StoreFooter'>
      <div className= 'store_circle'>
        <img src = {process.env.PUBLIC_URL + '/images/store/homepage.png'}
        alt = 'homepage'/>
      </div>
      <div className= 'store_circle'>
        <img src = {process.env.PUBLIC_URL + '/images/store/search_store.png'}
        alt = 'search_store'/>
      </div>
      <div className= 'store_circle'>
        <img src = {process.env.PUBLIC_URL + '/images/store/shoppingbag.png'}
        alt = 'shoppingbag'/>
      </div>
      <div className= 'store_circle'>
        <img src = {process.env.PUBLIC_URL + '/images/store/shoppingcart.png'}
        alt = 'shoppingcart'/>
      </div>
      <div className= 'store_circle'>
        <img src = {process.env.PUBLIC_URL + '/images/store/more_option.png'}
        alt = 'more_option'/>
      </div>
		</div>
	);
};

export default StoreFooter;