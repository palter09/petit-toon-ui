import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SwiperThumbnails.css';

const SwiperThumbnails = ({ toons, style }) => {
  const navigate = useNavigate();

  const handleImageClick = (toonId, thumbnailUrl) => {
    console.log(thumbnailUrl); // thumbnailUrl을 콘솔에 출력
    navigate(`/toon/${toonId}`);
  };
  return (
    <div className='ThumbnailsContainer' style={style}>
      <div className='thumbnails_scrollbar'>
        <div className='thumbnails_row'>
          {toons.map((toon) => (
            <div className='thumbnails_box' key={toon.id}>
              <img
                src={ `${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailUrl}`}
                alt={toon.title}
                onClick={() => handleImageClick(toon.id, toon.thumbnailUrl)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperThumbnails;
