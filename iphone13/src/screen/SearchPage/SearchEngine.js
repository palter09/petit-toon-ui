import React, { useState } from 'react';
import './SearchPage.css';
import './SearchEngine.css';
import useIconClick from './useIconClick';
import { useNavigate } from 'react-router-dom';


const SearchEngine = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  //input에서 onChange할때마다 searchQuery update
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //icon 클릭시 변경
  const {
    searchButtonIconClicked,
    handleIconClick,
  } = useIconClick();

  //api 호출 -> 응답 
  const handleSearch = () => {
    // 검색어가 비어있으면 아무 동작도 하지 않음
    if (!searchQuery.trim()) return;
  
    onSearchResults({ users: [], toons: [] }); // 초기화
  
    // 검색어를 그대로 사용하여 URL 업데이트
    navigate(`/search/${searchQuery}`, { replace: true });
  
    // 검색 API 호출
    fetch(`http://34.105.97.215/api/v1/search?keyword=${searchQuery}&page=0&size=5`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`오류 발생: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        onSearchResults(json);
      })
      .catch((error) => {
        console.error('검색 오류:', error);
        onSearchResults({ users: [], toons: [] });
      });
  };

  const handleSearchButtonIconClick = () => {
    handleIconClick(1);
    handleSearch();
  };
 
  //KeyDown에서 Enter시에도 검색가능하도록
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonIconClick();
    }
  };

  // 이미지 파일 경로 설정
  const searchButtonImageSrc = searchButtonIconClicked
    ? process.env.PUBLIC_URL + "/images/search_button_clicked.png"
    : process.env.PUBLIC_URL + "/images/search_button.png";

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
              src={searchButtonImageSrc}
              alt="search_engine_button"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
