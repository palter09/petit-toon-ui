import React, { useEffect, useState } from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SwiperScroll/SwiperProfilesLR'; 
import Thumbnails from './SwiperScroll/SwiperThumbnails'; 
import "./SearchPage/SearchPage.css"
import { useParams } from 'react-router';

import { search } from '../API/SearchAPI.js';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState({ users: [], toons: [], page: 0 });
  const { searchQuery } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  // 검색어가 변경될 때마다 API 호출
  useEffect(() => {
    if (searchQuery) {
      console.log("api호출 page:",currentPage);
      search(
        searchQuery, 
        currentPage,
        9,       
        (data) => {//더이상 받아올 정보가 없으면 받지 않게 설정 해야하는데 어차피 search 고칠 것 같아서 고려x
          setSearchResults((prevResults) => {
            if (currentPage === prevResults.page + 1) {
              return {
                users: [...prevResults.users, ...data.users],
                toons: [...prevResults.toons, ...data.toons],
                page: currentPage,
              };
            } else {
              setCurrentPage(0);
              return {
                users: [...data.users],
                toons: [...data.toons],
                page: 0,
              }
            }
          });
        }, 
        (_) => { 
          setSearchResults({users:[], toons:[], page: 0});
        });//검색결과 없을시 검색결과 reset
    }
  }, [currentPage, searchQuery]);

  const handleIntersect = () => {
    // 교차 감지 시 다음 페이지의 데이터를 가져옵니다.
    setCurrentPage(prevCurrentPage=>prevCurrentPage+1);
    console.log("감지:api 재호출");
  };

  return (
    <div className="container">
      <div className="item">
        <Home />
      </div>
      <div className="item">
        <div className='searchLineUp'/>
        <SearchEngine />
        <div className='searchLineDown'/>
      </div>
      <div className="item">
        <Profiles 
          users={searchResults.users}
          handleIntersect={handleIntersect}
        /> 
      </div>
      <div className="item">
        <Thumbnails 
          toons={searchResults.toons} 
          handleIntersect={handleIntersect}
        />
      </div>
    </div>
  );
};

export default SearchPage;
