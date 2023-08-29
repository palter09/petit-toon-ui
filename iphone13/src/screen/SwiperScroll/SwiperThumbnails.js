import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './SwiperThumbnails.css';

const SwiperThumbnails = ({ toons, style }) => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // path가 '/search'면 버튼 숨김, '/userinfo'면 버튼 보임
  const isNewToonButtonVisible = !path.startsWith('/search') || path.startsWith('/userinfo');

  useEffect(() => {
    console.log("swipertoon위치:",location.pathname);
    setPath(location.pathname);
  }, [ location ]);
  const handleImageClick = (toonId, thumbnailUrl) => {
    if(isNewToonButtonVisible){
      navigate(`/edittoon/${toonId}`);
    }else{
    navigate(`/toon/${toonId}`);
    }
  };

  const handleRegNewButtonClick = () => {
    navigate('/regtoon');
  }

  return (
    <div className='ThumbnailsContainer' style={style}>
      {isNewToonButtonVisible && 
        <button className='swiperThumbnails_regNewButton' onClick={handleRegNewButtonClick}>
          + 새 만화
        </button>
      }
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
