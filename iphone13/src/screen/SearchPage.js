import React, { useState } from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SearchPage/SwiperScroll/SwiperProfiles'; 
import Thumbnails from './SearchPage/SwiperScroll/SwiperThumbnails'; 
import "./SearchPage/SearchPage.css"

const SearchPage = () => {
  // State to store search results
  const [searchResults, setSearchResults] = useState({ users: [], toons: [] });

  // Function to handle search results from SearchEngine
  const handleSearchResults = (results) => {
    console.log(results.users);
    console.log(results.toons);
    setSearchResults(results);//SearchEngine 컴포넌트에서 검색 결과를 받아와서 상태로 저장
  };

  return (
    <div className="container">
      <div className="item">
        <Home />
      </div>
      <div className="item">
        <div className='searchLineUp'/>
        <SearchEngine onSearchResults={handleSearchResults} />
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
