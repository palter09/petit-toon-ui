import React, { useEffect, useState } from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SwiperScroll/SwiperProfiles'; 
import Thumbnails from './SwiperScroll/SwiperThumbnails'; 
import "./SearchPage/SearchPage.css"
import { useParams } from 'react-router';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState({ users: [], toons: [] });
  const { searchQuery } = useParams();

  const fetchSearchResults = (query) =>{
    fetch(`${process.env.REACT_APP_SERVER_IP}/api/v1/search?keyword=${query}&page=0&size=5`)
      .then((response) => {//서버 응답 체크
        if (!response.ok) {//서버 응답 HTTP 상태 코드 200번대 확인
          throw new Error(`오류 발생: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setSearchResults(json);
      })
      .catch((error) => {//서버 응답 실패 혹은 .then에서 에러
        console.error('검색 오류:', error);
        setSearchResults({ users: [], toons: [] });
      });
  };

  //렌더링 될때마다 + searchQuery변경시마다
  useEffect(()=>{
    if(searchQuery){
      fetchSearchResults(searchQuery);
    }
  },[searchQuery]);

  return (
    <div className="container">
      <div className="item">
        <Home />
      </div>
      <div className="item">
        <div className='searchLineUp'/>
        <SearchEngine urlQuery={searchQuery} fetchSearchResults={fetchSearchResults} />
        <div className='searchLineDown'/>
      </div>
      <div className="item">
          <Profiles users={searchResults.users} /> 
      </div>
      <div className="item">
          <Thumbnails toons={searchResults.toons} />
      </div>
    </div>
  );
};

export default SearchPage;
