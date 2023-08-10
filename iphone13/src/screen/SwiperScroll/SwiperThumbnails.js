import React from 'react';
import './SwiperThumbnails.css';

const SwiperThumbnails = ({ toons, style }) => {


  return (
    <div className='ThumbnailsContainer' style={style}>
      <div className='thumbnails_scrollbar' > {/*스크롤 바 + 안에 컨텐츠 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', 
                          position: 'relative', padding: '0.1rem',
                          justifyContent: 'flex-start', alignItems: 'flex-start', 
                          height: '32%',
                           transition: 'margin-top 0.3s' 
                          }}> {/*가로 줄 */}
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
      </div> */}
      </div>
    </div>
    </div>
  );
};

export default SwiperThumbnails;
