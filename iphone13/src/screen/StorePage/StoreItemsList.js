import React from 'react';
import './StoreItemsList.css';

const StoreItemsList = () => {
  //const [images, setImages] = useState([]);
  return (
    <div className='store_scrollbar'> {/*스크롤 바 + 안에 컨텐츠 */}
      <div className='store_row'>
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
          <div className='store_item'>
            <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
          </div>
          <div className='store_item'>
            <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
          </div>

          <div className='store_item'>
            <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
          </div>
          <div className='store_item'>
            <img 
            src = {process.env.PUBLIC_URL + '/images/store/storeItemsEx/01.png'}
            alt = '임시' />
          </div>




      </div>
    </div>
  );
};

export default StoreItemsList;
