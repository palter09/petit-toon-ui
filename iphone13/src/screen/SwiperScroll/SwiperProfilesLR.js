import React,{useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom'; 
import styles from './SwiperProfilesLR.module.css';
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';

const SwiperProfilesLR = ({ users, style, handleIntersect}) => {
  const navigate = useNavigate(); 
  const [observeTarget, setObserveTarget] = useState(false); // observe 상태 설정

  const options = {
    threshold : 0.1,//targetRef가 30% 차지하면
    root: document.querySelector(`.${styles['profiles-container']}`)//viewport 설정
  }
  const { targetRef, observerRef,imageLoaded } = useIntersectionObserver(
    options,
    ()=>{
      if(observeTarget){
        handleIntersect();
        observerRef.current.unobserve(targetRef.current);
        setObserveTarget(false);
      }
    },
  );
  
  const handleImageClick = (userId) => {
    navigate(`/userInfo/${userId}`);
  };

  useEffect(()=>{
    if (users.length !== 0 && users.length % 4 === 0) {//리로딩 필요할 때 다시 targetRef보이게
      setObserveTarget(true);
    }
  },[users])

  return (
    <div className={styles['profiles-container']} style={style}>
      <Swiper
        breakpoints={{
          280: {
            slidesPerView: 2,
          },
          300:{
            slidesPerView: 3,
          },
          400:{
            slidesPerView: 4,
          },
          600:{
            slidesPerView: 5,
          },
          1000:{
            slidesPerView: 7,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className={styles['profile-info-wrapper']}>
              <div className={styles['profile-wrapper']}>
                <div className={styles['profile-image']}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/default_thumbnail.png'} 
                    data-src={`${process.env.REACT_APP_SERVER_IP}/resources/${user.profileImagePath}`}
                    alt={user.nickname}
                    onClick={() => handleImageClick(user.id)}
                    ref={targetRef}
                  />
                </div>
                <div className={styles['profile-info']} style={{background: imageLoaded && 'transparent'}}>
                  <p style={{ display: imageLoaded ? 'block' : 'none' }}>{user.nickname}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {!observeTarget ? null : (
          <SwiperSlide ref={targetRef} api-reload-target={"true"}>
            <div className={styles['profile-info-wrapper']}>
              <div className={styles['profile-wrapper']}>
                <div className={styles['profile-image']}>
                  ...
                </div>
                <div className={styles['profile-info']}>
                  ...
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperProfilesLR;
