import React from 'react';
import Home from "./SearchPage/Home";
import SearchEngine from './SearchPage/SearchEngine';
import Profiles from './SearchPage/Profiles';
import Thumnails from './SearchPage/Thumbnails';
import "./SearchPage/SearchPage.css"

const SearchPage = ({renderPage}) => {
  return (
    <div className="container">
      <div className="item">
        <Home renderPage = {renderPage}/>
      </div>
      <div className="item">
        <SearchEngine/>
      </div>
      <div className="item">
        <Profiles/>
      </div>
      <div className="item">
        <Thumnails/>
      </div>
    </div>
  );
};

export default SearchPage;