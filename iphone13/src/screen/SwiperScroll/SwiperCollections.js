import React, { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwiperCollections.module.css";
import { createCollection } from "../../API/CollectionAPI";
import { getBookmarks } from "../../API/BookmarkAPI";
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';

const SwiperCollections = ({ accessUserId, userId, collections, handleIntersect, updateCollections, style }) => {
  const navigate = useNavigate();
  const [observeTarget, setObserveTarget] = useState(false); // observe 상태 설정
  const [newCollectionOn, setNewCollectionOn] = useState(false);
  const [title, setTitle] = useState("");
  const selectList = ["공개", "비공개"];
  const [selected, setSelected] = useState("공개");
  const [list, setList] = useState([]);
  const isLookSelfPage = accessUserId === userId;//본인이 자기 페이지 보는가
  
  
  //처음 렌더링 시에 collections 배열에 있는 collection 마다의 bookmarks를 collection번호에 맞게 짝짓기해서 list에 저장
  useEffect(() => {
    console.log("swiperCollection:", collections);
    const updatedList = [];
    let count = 0;
    if (Array.isArray(collections)) {
      for (const collection of collections) {
        if(!isLookSelfPage && collection.closed){
          continue;
        }else{
          getBookmarks(
            collection.id,
            0,//어차피 미리보기용이라 0페이지만 받아도 됨
            4,
            (resultData) => {
              updatedList.push({
                collectionId: collection.id,
                toons: resultData.bookmarkInfos,
              });
            },
            () => {}
          );
          count = count + 1;
        }
      }
      setList(updatedList);
    }
    if(count !== 0 && count % 9 === 0){
      setObserveTarget(true);
    }
  }, [collections, isLookSelfPage]);

  //collection 클릭시 collectionPage로 이동
  const handlePreviewClick = (collectionId) => {
    navigate(`/collection/${userId}/${collectionId}`);
    console.log(userId);
    console.log(collectionId);
  };

  //스크롤시 api재호출 위한 observer 
  const options = {
    threshold : 0.3,//targetRef가 30% 차지하면
    root: document.querySelector(`.${styles.scrollbar}`)//viewport를 scrollbar로 설정
  }
  const { targetRef, observerRef } = useIntersectionObserver(
    options,
    ()=>{
      if(observeTarget){
        handleIntersect();
        observerRef.current.unobserve(targetRef.current);
        setObserveTarget(false);
      }
    },
  );

  // + 새 컬렉션 입력 창 on/off
  const handleNewCollectionOn = () => {
    setNewCollectionOn((prevNewCollectionOn) => !prevNewCollectionOn);
    setSelected("공개");
    setTitle("");
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  //new collection 생성 api 호출
  const handleFetchNewCollection = () => {
    let closed = false;
    if (selected === "비공개") {
      closed = true;
    }
    if (title === "") {
      return;
    }
    createCollection(
      title,
      closed,
      (data) => {
        console.log(title, data.collectionId, "컬렉션 추가 완료");
        updateCollections(data.collectionId, title, closed);
      },
      () => {
        console.log(title, "컬렉션 추가 실패");
      }
    );
    handleNewCollectionOn();
  };

  return (
    <div className={styles.container} style={style}>
      {/* +새 컬렉션 버튼을 누르면 뜨는 추가 창 */}
      {newCollectionOn ? (
        <div className={styles.newCollection_box_background}>
          <div className={styles.newCollection_box_contents}>
            <div className={styles.newCollection_box_contents_header}>
              새 컬렉션
            </div>
            <div className={styles.newCollection_box_contents_title}>
              <input
                type="text"
                value={title}
                onChange={handleTitle}
                maxLength={22}
                placeholder="제목"
              />
            </div>
            <div className={styles.newCollection_box_contents_IsClosed}>
              <select onChange={handleSelect} value={selected}>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.newCollection_box_contents_bottom}>
              <button
                className={styles.newCollection_cancel_button}
                onClick={handleNewCollectionOn}
              >
                취소
              </button>
              <button
                className={styles.newCollection_make_button}
                onClick={handleFetchNewCollection}
              >
                만들기
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {/*본문 */}
      <div className={styles.newCollection}>
        {isLookSelfPage && 
          <button onClick={handleNewCollectionOn}>
            + 새 컬렉션
          </button>
        }
      </div>
      <div className={styles.scrollbar}>
        <div className={styles.collections_row}>
          {Array.isArray(collections) &&
            collections.map(//컬렉션 mapping
              (collection) =>
                (isLookSelfPage ||!collection.closed) && (
                  <div
                    className={styles.collections_prevInfo_wrapper}
                    key={collection.id}
                    onClick={() => handlePreviewClick(collection.id)}
                  >
                    <div className={styles.collections_preview}>
                      {list &&//컬렉션 안에 북마크 mapping (컬렉션 내에 미리보기 4분할)
                        list
                          .filter((item) => item.collectionId === collection.id)
                          .map(
                            (item) =>
                              item.toons &&
                              item.toons
                                .slice(0, 4)
                                .map(
                                  (toon) =>
                                    toon && (
                                      <img
                                        key={toon.id}
                                        src={`${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailPath}`}
                                        alt={toon.cartoonTitle}
                                      />
                                    )
                                )
                          )
                      }
                    </div>
                    <div
                      className={styles.collections_info}
                      key={collection.id}
                    >
                      {collection.title}
                    </div>
                  </div>
                )
            )
          }
          { !observeTarget? null : (
            <div className={styles.collections_prevInfo_wrapper} ref={targetRef}>
              loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwiperCollections;
