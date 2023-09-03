import React, { useEffect, useState } from 'react';
import useDetectClose from "../../hooks/useDetectClose";
import useIconClick from '../../hooks/useIconClick';
import { getBookmarks } from '../../API/BookmarkAPI';
import { createCollection, deleteCollection, getCollections } from '../../API/CollectionAPI';
import "./ChatStyles.css";
import "./CollectionStyles.css";


const CollectionButton = ({toonId, userId, isError}) => {
  const [myPageIsOpen, myRef, myPageToggleHandler] = useDetectClose(false);
  const [bookmark, setBookmark] = useState(false);
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState('');
  const [selected, setSelected] = useState('공개')
  const [selectPublic, setSelectPublic] = useState(null);
  const [isCreatingCollection, setIsCreatingCollection] = useState(false);

  const handleCollectionClick = () => {
    setBookmark(!bookmark);
    getBookmarks(123);
  }

  useEffect(() => {
    // Fetch collections when the component mounts
    // fetchCollections();
  }, []);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  /*
  const fetchCollections = () => {
    // Implement the logic to fetch collections here
    // Use getCollections function and handle success and failure
    getCollections(
      1, // Replace with the actual user ID
      0, // Page number
      30, // Number of collections per page
      (data) => {
        console.log('컬렉션 조회', data);
        setCollections(data.collections);
      },
      (error) => {
        console.error('컬렉션 조회 실패', error);
      }
    );
  };
  */

  const handleCollectionCreateClick = () => {
    createCollection(
      collectionName,
      selected === '공개', // Convert '공개' to true, '비공개' to false
      (data) => {
        console.log('컬렉션 생성', data);
        // Refresh the collections list after creating a new one
        // fetchCollections();
      },
      (error) => {
        console.error('컬렉션 생성 실패', error);
      }
    );
  };

  const handleCollectionDeleteClick = (collectionId) => {
    // Implement the logic to delete a collection here
    // Use deleteCollection function and handle success and failure
    deleteCollection(
      collectionId,
      () => {
        console.log('컬렉션 삭제 성공');
        // Refresh the collections list after deleting
        // fetchCollections();
      },
      (error) => {
        console.error('컬렉션 삭제 실패', error);
      }
    );
  };

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
                  {['공개', '비공개'].map((item) => (
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