import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import ToonPage from './screen/ToonPage'
import SettingPage from './screen/SettingPage'
import UserinfoPage from './screen/UserinfoPage';
import SearchPage from './screen/SearchPage';
import StorePage from './screen/StorePage';

import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/toon" element={<ToonPage />} />
        <Route path="/userinfo/:id" element={<UserinfoPage />} />
        <Route path="/search/" element={<SearchPage />}/>
        <Route path="/search/:searchQuery" element={<SearchPage />}/>
        <Route path="/store/" element={<StorePage />}/>

        {/* 다른 라우트들을 여기에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
};

export default App;