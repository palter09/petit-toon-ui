import React, { useState, useCallback } from "react";
import "./SearchPage.css";
import "./SearchEngine.css";
import useIconClick from '../../hooks/useIconClick';
import { useNavigate } from "react-router-dom";

const SearchEngine = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ searchButtonIconClicked, handleSearchIconClick ] = useIconClick();

  const navigate = useNavigate();

  /*
  검색
  */
  //검색창 input에서 onChange할때마다 searchQuery update
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //버튼 클릭->handleSearchButtonIconClick->handleSearch->navigate
  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) return;
    navigate(`/search/${searchQuery}`, { replace: true });
  }, [navigate, searchQuery]);

  /*
  버튼 아이콘 클릭시 아이콘 변경 + handleSearch 호출
  */
  const handleSearchButtonIconClick = () => {
    handleSearchIconClick();
    handleSearch();
  };

  //KeyDown에서 Enter시에도 검색가능하도록
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
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
          <button
            className="searchButtonStyle"
            onClick={handleSearchButtonIconClick}
          >
            <img src={searchButtonImageSrc} alt="search_engine_button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
