import React, {useState} from 'react';
import './SearchPage.css'
import './SearchEngine.css'



const SearchResult = ({ results }) => {
  return (
    <div>
      <h2>검색 결과:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

const SearchEngine = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // 실제로 검색 동작을 수행하고 결과를 setSearchResults를 통해 저장합니다.
    // 이 예시에서는 간단히 검색어를 저장하는 것으로 대체합니다.
    setSearchResults([searchQuery]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div>
      <div className='SearchEngine'>
        <div className='inputContainerStyle'>
          <input className='searchInputStyle'
            type='text'
            placeholder=''
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}/>
          <button className='searchButtonStyle'  onClick={()=>handleSearch(searchQuery)}>
            <img  src={process.env.PUBLIC_URL + '/images/search_engine_button_icon.png'} 
                  alt = 'search_engine_button'/> 
          </button>
        </div>
      </div>
      <SearchResult results={searchResults} />
    </div>
  );
};

export default SearchEngine;
