import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './SwiperThumbnails.css';
import { getCookie } from '../../API/HandleTokens';
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';

const SwiperThumbnails = ({  toons,  containerStyle, scrollbarStyle,  handleIntersect}) => {
  const [path, setPath] = useState('');
  const [observeTarget, setObserveTarget] = useState(false); // observe 상태 설정
  const [showChoose, setShowChoose] = useState(false); // thumbnail클릭시 다른걸로 변환
  const [selectedToonId, setSelectedToonId] = useState(null); // 선택한 만화 아이디
  const navigate = useNavigate();
  const location = useLocation();
  const accessUserId = getCookie("loginUserId");

  const options = {
    threshold : 0.3,//targetRef가 차지하는 비율
    root: document.querySelector('.thumbnails-scrollbar')//viewport를 .thumbnails_scrollbar로 설정
  }
  const { targetRef, observerRef, imageLoaded } = useIntersectionObserver(
    options,
    ()=>{
      if(observeTarget){
        handleIntersect();
        observerRef.current.unobserve(targetRef.current);
        setObserveTarget(false);
      }
    },
  );


  // URL에서 /userinfo/ 다음에 나오는 숫자를 추출
  const userIdFromUrl = path.match(/\/userinfo\/(\d+)/i);
  // userinfo 유저 정보가 로그인한 유저의 정보인가
  const isSameUser = userIdFromUrl && (parseInt(userIdFromUrl[1]) === parseInt(accessUserId));
  //reloading이 필요없는 page
  const needNotReloading = path.startsWith('/userinfo/') || path.match(/^\/userinfo\/\d+$/);

  useEffect(() => {
    setPath(location.pathname);
    // 데이터가 로딩되고 toons 배열의 길이가 9의 배수이면 observe
    if (toons.length !== 0 && toons.length % 9 === 0) {
      setObserveTarget(true);
    }
  }, [location, toons]);


  const handleImageClick = (toonId) => {
    if(isSameUser && path.match(/^\/userinfo\/\d+$/)){//userinfo page에서 썸네일을 클릭하면
      setShowChoose(true);
      setSelectedToonId(toonId);
    }else{
      navigate(`/toon/${toonId}`);
    }
  };
  const handleChooseClick = (action) => {
    if (action === 'view') {
      navigate(`/toon/${selectedToonId}`);
    } else if (action === 'edit') {
      navigate(`/edittoon/${selectedToonId}`)
    }
  };
  const handleRegNewButtonClick = () => {
    navigate('/regtoon');
  }

  return (
    <div className='thumbnails-container' style={containerStyle}>
      { isSameUser&& 
        <button className='thumbnails-register-button' onClick={handleRegNewButtonClick}>
          + 새 만화
        </button>
      }
      <div className='thumbnails-scrollbar' style={scrollbarStyle}>
        <div className='thumbnails-row'>
          {toons.map((toon) => (
            <div className='thumbnails-box ' key={toon.id} >
              {showChoose && selectedToonId === toon.id  ? (
                <div className="thumbnails-choose-wrapper" onClick={()=>{setShowChoose(false)}}>
                  <button onClick={() => handleChooseClick('view')}>만화보기</button>
                  <button onClick={() => handleChooseClick('edit')}>만화수정</button>
                </div>
              ):(
                <>
                  <div className='thumbnails-box-thumbnail'>
                  <img
                    src={process.env.PUBLIC_URL + '/images/default_thumbnail.png'} 
                    data-src={process.env.REACT_APP_SERVER_IP + '/resources/' + toon.thumbnailUrl}
                    alt={toon.title}
                    onClick={() => handleImageClick(toon.id)}
                    ref={targetRef}
                    />
                  </div>
                  <div className='thumbnails-box-info' style={{background:imageLoaded && 'transparent'}}>
                    <p style={{ display: imageLoaded ? 'block' : 'none' }}>{toon.title}</p>
                  </div>
                </>
                )
              }
            </div>
          ))}
          { needNotReloading || !observeTarget  ? null : (
            <div className='thumbnails-box' api-reload-target={"true"} ref={targetRef}>
                  <div className='thumbnails-box-thumbnail'>
                  <img
                    src={process.env.PUBLIC_URL + '/images/default_thumbnail.png'} 
                    alt='loading'
                    />
                  </div>
                  <div className='thumbnails-box-info'>
                  </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default SwiperThumbnails;
