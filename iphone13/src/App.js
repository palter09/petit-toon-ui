import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import ToonPage from './screen/ToonPage'
import SettingPage from './screen/SettingPage'
<<<<<<< HEAD
import UserinfoPage from './screen/UserinfoPage';
=======
import SupportPage from './screen/SupportPage'

import './App.css';
>>>>>>> 69418a1282e041960946c94d6e0186ea9e81f2b8
import SearchPage from './screen/SearchPage';

import './App.css';

const App = () => {
<<<<<<< HEAD
=======
  const [renderPage, setRenderPage] = useState('ToonPage');
  const pageMap = {
    'SettingPage': SettingPage,
    'ToonPage': ToonPage,
    'SearchPage': SearchPage,
    'SupportPage': SupportPage,
    // 여기에 필요한 다른 페이지들을 추가할 수 있음
  };

  const handleRenderPage = (pageName) => {
    setRenderPage(pageName);
  };

>>>>>>> 69418a1282e041960946c94d6e0186ea9e81f2b8
  return (
    <div>
      <Routes>
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/toon" element={<ToonPage />} />
        <Route path="/userinfo/:id" element={<UserinfoPage />} />
        <Route path="/search/" element={<SearchPage />}/>
        <Route path="/search/:searchResultPage" element={<SearchPage />}/>

        {/* 다른 라우트들을 여기에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
};

export default App;