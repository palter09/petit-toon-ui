import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom'; 
import styles from './SwiperProfilesLR.module.css';

const SwiperProfilesLR = ({ users, style }) => {
  const navigate = useNavigate(); 

  const handleImageClick = (userId) => {
    navigate(`/userInfo/${userId}`);
  };

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
      </Swiper>
    </div>
  );
};

export default SwiperProfilesLR;
