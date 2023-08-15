import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './SwiperProfilesLR.css';

const SwiperProfilesLR = ({ users, style }) => {
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
            <img src={user.profileImagePath} alt={user.nickname} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperProfilesLR;
