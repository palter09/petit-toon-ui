import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import ToonPage from './screen/ToonPage'
import SettingPage from './screen/SettingPage'
import UserinfoPage from './screen/UserinfoPage';
import SearchPage from './screen/SearchPage';
import StorePage from './screen/StorePage';
import LoginPage from './screen/LoginPage';
import RegToonPage from './screen/RegToonPage';
import EditToonPage from './screen/EditToonPage';
import SignupPage from './screen/SignupPage';
import CollectionPage from './screen/CollectionPage';
import RankingPage from './screen/RankingPage';
import FollowPage from './screen/FollowPage';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/toon" element={<ToonPage />} />
        <Route path="/toon/:id" element={<ToonPage />} />
        <Route path="/userinfo/:id" element={<UserinfoPage />} />
        <Route path="/userinfo/follow/:id/:er" element={<FollowPage />} />
        <Route path="/search/" element={<SearchPage />}/>
        <Route path="/search/:searchQuery" element={<SearchPage />}/>
        <Route path="/store/" element={<StorePage />}/>
        <Route path="/regtoon" element={<RegToonPage />}/>
        <Route path="/edittoon/:toonId" element={<EditToonPage/>}/>
        <Route path="/collection/:userId/:collectionId" element={<CollectionPage/>}/>
        <Route path="/ranking" element={<RankingPage/>}/>

        {/* 다른 라우트들을 여기에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
};

export default App;