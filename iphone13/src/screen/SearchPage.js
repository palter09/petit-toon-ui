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
    setSearchResults(results);
  };

  return (
    <div className="container">
      <div className="item">
        <Home />
      </div>
      <div className="item">
        <SearchEngine onSearchResults={handleSearchResults} />
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
