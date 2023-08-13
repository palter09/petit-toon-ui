import React from 'react';
import './SwiperThumbnails.css';

const SwiperThumbnails = ({ toons, style }) => {


  return (
    <div className='ThumbnailsContainer' style={style}>
      <div className='thumbnails_scrollbar' > 
        <div className='thumbnails_row'>
          {toons.map((toon) => (
            <div className = 'thumbnails_box' key={toon.id}>
              <img src={toon.thumbnailUrl} alt={toon.title} />
            </div>
          ))} 
          {/*
        <div className  = 'thumbnails_box'>
          <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
        </div>

        <div className  = 'thumbnails_box'>
          <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
        </div>
        <div className  = 'thumbnails_box'>
          <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
        </div>
        <div className  = 'thumbnails_box'>
          <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
        </div>
        */}
        </div>
      </div>
    </div>
  );
};

export default SwiperThumbnails;
