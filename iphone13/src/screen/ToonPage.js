import React, { useState, useCallback } from "react";
import SwiperToon from "./ToonPage/SwiperToon.js";
import Header from "./Header/Header.js";
import {
  DisLike,
  Like,
  Comment,
  Subscribe,
  Setting,
} from "./ToonPage/BottomButton.js";
import { useParams } from "react-router";

const ToonPage = () => {
  const param = useParams();
  const toonId = param.id;
  const [isError, setIsError] = useState(false);
  const onIsError = useCallback(() => setIsError(true), []);//useCallback: 처음 렌더링 될때 함수 만들고 이후 안만듦
  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className="divLineHeader" />
        <SwiperToon
          toonId={toonId}
          onIsError={onIsError}
        />
        <div className="divLineBottom" />
        <Like toonId={toonId} isError={isError} />
        <DisLike toonId={toonId} isError={isError} />
        <Comment toonId={toonId} isError={isError} />
        <Subscribe toonId={toonId} isError={isError} />
        <Setting toonId />
      </div>
    </div>
  );
};

export default ToonPage;
