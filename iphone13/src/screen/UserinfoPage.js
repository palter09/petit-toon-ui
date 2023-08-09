import { useState } from "react";
import Header from "./Header/Header.js"
import Profile from './UserinfoPage/Profile.js'
import Works from './UserinfoPage/Works.js'

import { useNavigate, useLocation, useParams } from 'react-router-dom';

const UserinfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return (
    <div className="container">
      <div className="item">
        <Header />
        <div className='divLineHeader' />
        <Profile />
        <div className='divLineMid' />
        <Works />
        <div className='divLineBottom' />
      </div>
    </div>
  );
};

export default UserinfoPage;