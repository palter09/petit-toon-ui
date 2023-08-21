import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SwiperThumbnails.css';

const SwiperThumbnails = ({ toons, style }) => {
  const navigate = useNavigate();

  const handleImageClick = (toonId) => {
    navigate(`/toon/${toonId}`);
  };

  return (
    <div className='ThumbnailsContainer' style={style}>
      <div className='thumbnails_scrollbar'>
        <div className='thumbnails_row'>
          {toons.map((toon) => (
            <div className='thumbnails_box' key={toon.id}>
              <img
                src={toon.thumbnailUrl}
                alt={toon.title}
                onClick={() => handleImageClick(toon.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperThumbnails;
