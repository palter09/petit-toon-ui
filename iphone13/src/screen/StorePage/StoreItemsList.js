// StoreItemsList.js
import React, { useState, useEffect } from 'react';
import './StoreItemsList.css';

const StoreItemsList = ({ columns }) => {
  const [scrollY, setScrollY] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://34.105.97.215/api/v1/search?keyword=%EA%B9%80%EC%98%81%ED%98%84&page=0&size=5')//임시
      .then((response) => response.json())
      .then((data) => setImages(data.toons))//임시
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);
  };

  return (
    <div className='store_scrollbar' onScroll={handleScroll}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: `${scrollY}px`, transition: 'margin-top 0.3s' }}>
        {images.map((image) => (
          <div key={image.id} style={{ flex: `0 0 ${100/columns}%`, padding: '5px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}//임시
              alt='임시'
              style={{
                width: '100%',
                height: '100%',
                border: '2px solid black',
                objectFit: 'cover', 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreItemsList;
