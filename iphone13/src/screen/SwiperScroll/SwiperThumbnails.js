import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './SwiperThumbnails.css';
import { getCookie } from '../../API/HandleTokens';

const SwiperThumbnails = ({  toons, style }) => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const accessUserId = getCookie("loginUserId");
  // URL에서 /userinfo/ 다음에 나오는 숫자를 추출
  const userIdFromUrl = location.pathname.match(/\/userinfo\/(\d+)/i);
  // userinfo 유저 정보가 로그인한 유저의 정보인가
  const isSameUser = userIdFromUrl && (parseInt(userIdFromUrl[1]) === parseInt(accessUserId));

  useEffect(() => {
    console.log("swipertoon위치:",location.pathname);
    setPath(location.pathname);
    console.log("마이페이지:",isSameUser);
  }, [ location ]);

  const handleImageClick = (toonId) => {
    if(isSameUser){
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
      { isSameUser&& 
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
