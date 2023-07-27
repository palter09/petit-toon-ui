import React, { useState } from 'react';
import './GroupIcons.css'

import { GroupIcons, Header } from './screen';


const GroupIcons = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const tabData = [
    { content: 'Love menu',imageSrc: process.env.PUBLIC_URL + '/images/love_icon.png' },
    { content: 'Broken Heart menu', imageSrc: process.env.PUBLIC_URL + '/images/broken_heart_icon.png' },
    { content: 'Bubble Chat menu', imageSrc: process.env.PUBLIC_URL + '/images/bubble_chat_icon.png' },
    { content: 'Star menu', imageSrc: process.env.PUBLIC_URL + '/images/star_icon.png' },
    { content: 'Setting menu', imageSrc: process.env.PUBLIC_URL + '/images/setting_icon.png' },
  ];

  const handleClick = (index) => {
    clickTab(index);
  }

    return (
      <div className='tab-menu'>
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${currentTab === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={tab.imageSrc} alt={`Tab ${index + 1}`} />
            <span>{tab.label}</span>
        </div>
      ))}
    </div>

      /*
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/love_icon.png'}
          alt="Love Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '25px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/broken_heart_icon.png'}
          alt="Broken Heart Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '99px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/bubble_chat_icon.png'}
          alt="Bubble Chat Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '173px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/star_icon.png'}
          alt="Star Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '247px', top: '761px' }}/>

        <img
          src={process.env.PUBLIC_URL + '/images/setting_icon.png'}
          alt="Setting Icon"
          style={{position: 'absolute', width: '45px', height: '45px', left: '321px', top: '761px' }}/>
      </div>
      */
    );
  };

export default GroupIcons;
