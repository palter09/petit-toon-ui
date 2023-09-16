import React, { useState, useCallback, useEffect } from "react";
import SwiperToon from "./ToonPage/SwiperToon.js";
import Header from "./Header/Header.js";
import { useParams } from "react-router";
import { getCookie } from "../API/HandleTokens.js";
import { getFeed } from "../API/FeedAPI.js";
import BottomButtons from "./ToonPage/BottomButtons.js";

const ToonPage = () => {
  const param = useParams();
  const pageSize = 2;
  const toonId = param.id;
  const loginUserId = parseInt(getCookie("loginUserId"));
  const [isError, setIsError] = useState(false);
  const onIsError = useCallback(() => setIsError((prev) => (!prev)), []);
  const [feed, setFeed] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    getFeed(currentPage, pageSize,
       (data)=>{setFeed(data.feed);},
       ()=>{console.log("feed재호출 실패");}
        )
  },[currentPage])

  const handleIntersect = () =>{
    setCurrentPage((prev)=>(prev+1));
  }

  return (
    <div className="container">
        <Header />
        <SwiperToon
          feed={feed}
          userId={loginUserId}
          toonId={toonId}
          pageSize={pageSize}
          onIsError={onIsError}
          onIntersect={handleIntersect}
        />
        <BottomButtons userId={loginUserId} toonId={toonId} isError={isError} />
    </div>
  );
};

export default ToonPage;
