import React, { useEffect } from 'react';

import LikeButton from './LikeButton.js';
import DisLikeButton from './DisLikeButton.js'
import CommentButton from './CommentButton.js'
import CollectionButton from './CollectionButton.js'
import SettingButton from './SettingButton.js'

import './BottomButtons.css';

const BottomButtons = ({userId, toonId, isError}) => {
  return (
    <div className='bottom-wrapper'>
      <div className='bottom-buttons'>
        <LikeButton toonId={toonId} isError={isError} />
        <DisLikeButton toonId={toonId} isError={isError} />
        <CommentButton userId={userId} toonId={toonId} isError={isError} />
        <CollectionButton toonId={toonId} isError={isError} />
        <SettingButton toonId />
      </div>
    </div>
  )
};


export default BottomButtons;