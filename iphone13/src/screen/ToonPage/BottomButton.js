import React from 'react';


const test = () => {
  console.log("!")
};

const DisLike = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/love_icon.png'} 
    style={{position: "absolute", left: "45px", top: "778px"}} 
    onClick={test}
  />;
};

const Like = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'} 
    style={{position: "absolute", left: "109px", top: "778px"}} 
    onClick={test}
  />;
};

const Comment = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'} 
    style={{position: "absolute", left: "173px", top: "778px"}} 
    onClick={test}
  />;
};

const Subscribe = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/star_icon.png'} 
    style={{position: "absolute", left: "237px", top: "778px"}} 
    onClick={test}
  />;
};

const Setting = () => {
  return <img 
    src={process.env.PUBLIC_URL + '/images/setting_icon.png'} 
    style={{position: "absolute", left: "301px", top: "778px"}}
    onClick={() => {

    }
  }/>;
};




export { DisLike, Like, Comment, Subscribe, Setting };