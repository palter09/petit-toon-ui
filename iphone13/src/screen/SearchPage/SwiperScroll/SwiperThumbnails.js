import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './SwiperSearchPage.css';
import '../SearchPage.css';
import { FreeMode, Grid, Pagination, Mousewheel} from 'swiper/modules';

const SwiperThumbnails = ({ toons }) => {
  return (
    <div className='ThumbnailsContainer'>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        direction={'vertical'}
        mousewheel={true}
        grid={{
          rows: 3,
          fill: 'row',
        }}
        freeMode={true}
        modules={[Grid, FreeMode, Pagination, Mousewheel]}
        className="SwiperThumb"
      >
        {toons.map((toon) => (//map은 안에 function 모두 적용
          <SwiperSlide key={toon.id}>
            <img src={toon.thumbnailUrl} alt={toon.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperThumbnails;
