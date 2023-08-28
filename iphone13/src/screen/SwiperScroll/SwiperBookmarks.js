import React from 'react';
import styles from'./SwiperBookmarks.module.css';

const SwiperBookmarks = ({ collectionId, collectionTitle, bookmarks, style }) => {


  return (
    <div className='styles.container' style={style}>
      <div className='styles.scrollbar'>
        <div className='thumbnails_row'>
          {bookmarks.map((toon) => (
            <div className='thumbnails_box' key={toon.id}>
              <img
                src={ `${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailUrl}`}
                alt={toon.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperBookmarks;
