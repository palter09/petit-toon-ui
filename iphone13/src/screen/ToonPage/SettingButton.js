import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SettingButton = () => {
  const navigate = useNavigate();

  return <img 
    src={process.env.PUBLIC_URL + '/images/setting_icon.png'} 
    alt='setting'
    onClick={() => { navigate('/setting'); }}/>;
};


export default SettingButton;