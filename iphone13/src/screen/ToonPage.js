import React from 'react';
import SwiperToon from "./ToonPage/SwiperToon.js";
import Header from "./Header/Header.js"
import { DisLike, Like, Comment, Subscribe, Setting } from "./ToonPage/BottomButton.js"
import { useParams } from 'react-router';

const ToonPage = () => {
  const toonId = useParams();

  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className='divLineHeader' />
        <SwiperToon toonId = {toonId}/>
        <div className='divLineBottom' />
        <Like />
        <DisLike />
        <Comment />
        <Subscribe />
        <Setting />
      </div>
    </div>
  );
};

export default ToonPage;