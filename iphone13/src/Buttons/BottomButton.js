import React from 'react';
import Button from './Button';


const test = () => {};

const DisLike = () => {
  return <Button src={process.env.PUBLIC_URL + '/images/love_icon.png'} left="45px" top="761px" clickEvent={test}/>;
};

const Like = () => {
  return <Button src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'} left="109px" top="761px" clickEvent={test}/>;
};

const Comment = () => {
  return <Button src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'} left="173px" top="761px" clickEvent={test}/>;
};

const Subscribe = () => {
  return <Button src={process.env.PUBLIC_URL + '/images/star_icon.png'} left="237px" top="761px" clickEvent={test}/>;
};

const Setting = () => {
  return <Button src={process.env.PUBLIC_URL + '/images/setting_icon.png'} left="301px" top="761px" 
                 clickEvent={() => {

                 }
  }/>;
};




export { DisLike, Like, Comment, Subscribe, Setting };