import React, { useState } from 'react';
import ToonPage from './screen/ToonPage'
import SettingPage from './screen/SettingPage'

import './App.css';
import SearchPage from './screen/SearchPage';

const App = () => {
  const [renderPage, setRenderPage] = useState('ToonPage');
  const pageMap = {
    'SettingPage': SettingPage,
    'ToonPage': ToonPage,
    'SearchPage': SearchPage,
    // 여기에 필요한 다른 페이지들을 추가할 수 있음
  };

  const handleRenderPage = (pageName) => {
    setRenderPage(pageName);
  };

  return (
    <div>
      {React.createElement(pageMap[renderPage], {
        renderPage: handleRenderPage,
      })}
    </div>
  );
};

export default App;