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
    threshold : 0.3,//targetRef가 30% 차지하면
    root: document.querySelector(`.${styles.profileContainer}`)//viewport를 .thumbnails_scrollbar로 설정
  }
  const { targetRef, observerRef } = useIntersectionObserver(
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
    if (users.length !== 0 && users.length % 9 === 0) {//리로딩 필요할 때 다시 targetRef보이게
      setObserveTarget(true);
    }
  },[users])

  return (
    <div className={styles.profilesContainer} style={style}>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className={styles.SwiperProf}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <div className={styles.profile_info_wrapper}>
              <div className={styles.profile_wrapper}>
                <img
                  src={`${process.env.REACT_APP_SERVER_IP}/resources/${user.profileImagePath}`}
                  alt={user.nickname}
                  onClick={() => handleImageClick(user.id)}
                />
              </div>
              <p>{user.nickname}</p>
            </div>
          </SwiperSlide>
        ))}
        {!observeTarget ? null : (
          <SwiperSlide ref={targetRef}>
            <div className={styles.profile_wrapper}>
              <div className={styles.profile_wrapper}>
                loading...
              </div>
              <p>...</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperProfilesLR;
