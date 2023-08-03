import { useState } from "react";
import Header from "./ToonPage/Header.js"
import Profile from './UserinfoPage/Profile.js'
import Works from './UserinfoPage/Profile.js'

const divLineMidStyle = {
  position: 'absolute',
  top: '753px',
  width: '383px',
  height: '0px',
  left: '0px',
  border: '4px solid #DA5E9D',
  backgroundColor: '#DA5E9D',
}

const UserinfoPage = () => {
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