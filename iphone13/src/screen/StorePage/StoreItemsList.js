// StoreItemsList.js
import React, { useState, useEffect } from 'react';
import './StoreItemsList.css';

const StoreItemsList = ({ columns }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {//처음 렌더링될때 api호출
    fetch('http://34.105.97.215/api/v1/search?keyword=%EA%B9%80%EC%98%81%ED%98%84&page=0&size=5')//임시
      .then((response) => response.json())
      .then((data) => setImages(data.toons))//임시
      .catch((error) => console.error('Error fetching images:', error));
  }, []);



  return (
    <div className='store_scrollbar'> {/*스크롤 바 + 안에 컨텐츠 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', 
                    position: 'relative', padding: '0.5rem',
                    justifyContent: 'flex-start', alignItems: 'flex-start', 
                    transition: 'margin-top 0.3s' 
                    }}> {/*가로 줄 */}
      {/*
        {images.map((image) => (
          <div key={image.id} style={{ flex: `0 0 ${100/columns}%`, padding: '5px' }}>
            <img
              src={image.URL}//주석처리한 코드가 원래 코드
              alt='임시'
              style={{
                width: '100%',
                height: '100%',
                border: '2px solid black',
                objectFit: 'cover', 
              }}
            />
          </div>                         <이하 이미지는 테스트용>
            ))} */}
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
                  <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
                  <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
        <img 
          src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
          alt = '임시' />
      </div>
    </div>
  );
};

export default StoreItemsList;
