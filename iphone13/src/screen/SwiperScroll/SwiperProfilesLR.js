import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom'; 
import './SwiperProfilesLR.css';

const SwiperProfilesLR = ({ users, style }) => {
  const navigate = useNavigate(); 

  const handleImageClick = (userId) => {
    navigate(`/userInfo/${userId}`);
  };

  return (
    <div className='ProfilesContainer' style={style}>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        freeMode={true}
        modules={[FreeMode]}
        className="SwiperProf"
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <img
              src={`${process.env.REACT_APP_SERVER_IP}/resources/${user.profileImagePath}`}
              alt={user.nickname}
              onClick={() => handleImageClick(user.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProfilesLR;
