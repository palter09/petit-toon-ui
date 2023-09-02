import React, { useState, useCallback } from "react";
import SwiperToon from "./ToonPage/SwiperToon.js";
import Header from "./Header/Header.js";
import BottomButtons from "./ToonPage/BottomButtons.js";
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
        <BottomButtons toonId={toonId} isError={isError} />
      </div>
    </div>
  );
};

export default ToonPage;
