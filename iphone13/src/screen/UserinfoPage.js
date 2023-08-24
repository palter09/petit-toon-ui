import React, { useEffect, useState } from 'react';
import Header from "./Header/Header.js"
import Profile from './UserinfoPage/Profile.js'
import Works from './UserinfoPage/Works.js'

import { getUserInfo } from '../API/UserAPI.js';

import { useParams } from 'react-router-dom';

const UserinfoPage = () => {
  const [userinfo, setUserinfo] = useState({});
  const userid = useParams().id;

  useEffect(() => {
    if (userid) {
      getUserInfo(userid, setUserinfo);
    }
  }, [userid]);

  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className='divLineHeader' />
        <Profile userinfo={userinfo}/>
        <div className='divLineMid' />
        <Works userinfo={userinfo}/>
        <div className='divLineBottom' />
      </div>
    </div>
  );
};

export default UserinfoPage;