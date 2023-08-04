import React, { useState } from 'react';
import './SearchPage.css';
import './SearchEngine.css';
import useIconClick from './useIconClick';


const SearchEngine = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {//api에서 최종적으로 가져오는
    const encodedQuery = encodeURIComponent(searchQuery); // 검색어 한글 인코딩
    // 검색 API 호출
    fetch(`http://34.105.97.215/api/v1/search?keyword=${encodedQuery}&page=0&size=5` )//api fetch
      .then((response) => {
        if(!response.ok){
          throw new Error(`오류 발생: ${response.status}`);
        }
        return response.json();//reponse받으면 json형태로
      })
      .then((json) => {
        onSearchResults(json); // API 응답 결과를 SearchPage로 전달
      })
      .catch((error) => {
        console.error('검색 오류:', error);
        onSearchResults({ users: [], toons: [] }); // 오류 발생 시, 빈 결과로 초기화
      });
  };

    //icon 클릭시 변경
  const {
      searchButtonIconClicked,
      handleIconClick,
  } = useIconClick();
  
    //iconclick효과가 페이지 이동보다 먼저 일어나게
  const handleSearchButtonIconClick = () => {
      handleIconClick(1);
      setTimeout(() => {
        handleSearch();
      }, 150);
    };
 
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonIconClick();
    }
  };

  return (
    <div>
      <div className="SearchEngine">
        <div className="inputContainerStyle">
          <input
            className="searchInputStyle"
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="searchButtonStyle" onClick={handleSearchButtonIconClick}>
            <img
              src={process.env.PUBLIC_URL +
                (searchButtonIconClicked ? "./images/search_button_clicked.png" : "./images/search_button.png")}
              alt="search_engine_button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
