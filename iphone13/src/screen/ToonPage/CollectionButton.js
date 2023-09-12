import React, { useEffect, useState } from 'react';
import { addBookmark } from '../../API/BookmarkAPI';
import { createCollection, getCollections, deleteCollection } from '../../API/CollectionAPI';
import Modal from '../Modal/Modal.js';
import ModalPortal from '../Modal/Portal.js';
import "./CollectionStyles.css";


const CollectionButton = ({toonId, userId, isError}) => {
  const [collections, setCollections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState('공개');
  const [bookmark, setBookmark] = useState(false);
  const [newCollection, setNewCollection] = useState({ title: '', closed: false });

  useEffect(() => {
    fetchCollections();
  }, []);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCollections = () => {
    getCollections(userId, 1, 10, (data) => {
      setCollections(data.collections);
    });
  };

  const handleCreateCollection = () => {
    createCollection(newCollection.title, newCollection.closed, () => {
      fetchCollections(); // 컬렉션 리스트 새로고침
      setNewCollection({ title: '', closed: false }); // 입력된 필드 지우기
    });
  };

  const handleAddToCollection = (collectionId, toonId) => {
    addBookmark(collectionId, toonId, () => {
      // 북마크에 추가되면 색상 바뀌는 부분 추가해야됨
    });
  };

  const handleDeleteCollection = (collectionId) => {
    deleteCollection(collectionId, () => {
      fetchCollections(); // 컬렉션 리스트 새로고침
    });
  };

  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + '/images/star_icon.png'}
        onClick={openModal}
        setBookmark={!bookmark}
       />  

      {/* 모달 */}
      <Modal
        modalStyle={{ width: "70%", height: "70%", borderRadius: "5px" }}
        contentStyle={{ width: "100%", height: "100%"}}
        confirmStyle={{ position: "relative", top: "-10%" }}
        isOpen={isModalOpen} onClose={closeModal}>
        {/* 컬렉션 목록 */}
          <h2 className='collection-title'>컬렉션</h2>
          <div className='collection-list'>
            <ul>
              {collections.map((collection) => (
                <li key={collection.id}>
                  {collection.title}{' '}
                  <button onClick={() => handleDeleteCollection(collection.id)}>삭제</button>
                  <button onClick={() => handleAddToCollection(collection.id, 'webtoonId')}>
                    추가
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='collection-input-container'>
            <input
              className='collection-input-title'
              type="text"
              placeholder="컬렉션 제목"
              value={newCollection.title}
              onChange={(e) => setNewCollection({ ...newCollection, title: e.target.value })}
            />
            <select
              className='collection-input-setPublic'
              value = {selected}
              onChange={handleSelect}>
              {['공개', '비공개'].map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <button
              className='collection-input-button'
              onClick={handleCreateCollection}>컬렉션 생성</button>
          </div>
      </Modal>
    </div>
  );
}

export default CollectionButton;