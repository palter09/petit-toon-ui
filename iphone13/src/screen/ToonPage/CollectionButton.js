import React, { useState } from 'react';
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from '../../hooks/useIconClick';
import { getBookmarks } from '../../API/BookmarkAPI';
import { createCollection } from '../../API/CollectionAPI';
import "./ChatStyles.css";
import "./CollectionStyles.css";


const CollectionButton = ({toonId, isError}) => {
  const [myPageIsOpen, myRef, myPageToggleHandler] = useDetectClose(false);
  const [bookmark, setBookmark] = useState(false);
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState('');
  const selectList = ["공개", "비공개"];
  const [selected, setSelected] = useState(false)
  const [selectPublic, setSelectPublic] = useState(null);
  const [isCreatingCollection, setIsCreatingCollection] = useState(false);

  const handleCollectionClick = () => {
    setBookmark(!bookmark);
    getBookmarks(123);
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleCollectionCreateClick = (collectionName, selected) => {
    createCollection(collectionName, selected, 
      (data) => {
        console.log("컬렉션 생성", data);
        setIsCreatingCollection(data.isCreatingCollection);
      },
        (_) => {
          console.log("컬렉션 생성 실패");
        }
      )
  }

  const {
    collectionCreateClicked,
    handleIconClick,
  } = useIconClick();
  
  return (
    <div className='collection-wrapper' ref={myRef}>
      <div className='collection-container'>
        <div className='collection-button'
          onClick={() => {
            /*
            if(!isError){
              myPageToggleHandler();
              handleCollectionClick();
            }
            */
            myPageToggleHandler();
            handleCollectionClick();
          }}>
            <img
              src={process.env.PUBLIC_URL +
                /* 
                (!isError? 
                  (bookmark? '/images/star_icon.png' : '/images/star_icon_b&w.png') :
                            '/images/star_icon_b&w.png')
                */
                (bookmark? '/images/star_icon.png' : '/images/star_icon_b&w.png')
              }
              alt='colletion' 
              />
          </div>
          <div className={`collection-menu ${myPageIsOpen ? 'open' : ''}`}>
            <div className='collection-menu-title'>컬렉션 목록</div>
            <div className='collection-menu-container'>
              {collections.map((collection, index) => (
              <div key={index} className='collection-menu-item'>
                {/* Display collection name or other information */}
                {collection.name}
              </div>
              ))}
              <div className='collection-create-container'>
                <input
                  type='text'
                  placeholder='컬렉션 이름을 입력하세요'
                  className='collection-name-input'
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
                <select 
                  className='collection-set-public'
                  value = {selected}
                  onChange={handleSelect}>
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <button
                  className='collection-create-button'
                  onClick={handleCollectionCreateClick}>
                  create
                </button>
              </div>
            </div>
          </div>
          <div className='collection-triangle-wrapper'>
            {myPageIsOpen && <div className={`comment-triangle-outer ${myPageIsOpen ? 'fade-in' : ''}`} />}
            {myPageIsOpen && <div className={`comment-triangle-inner ${myPageIsOpen ? 'fade-in' : ''}`} />}
          </div>
      </div>
    </div>
  )
};

export default CollectionButton;