import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwiperCollections.module.css";
import { createCollection, getCollections } from "../../API/CollectionAPI";

const SwiperCollections = ({ userId,  collections, style }) => {
  const navigate = useNavigate();
  const [collectionsLocal, setCollectionsLocal] = useState(collections);//인자로 받는 collections 업데이트 해서 재렌더링 용도
  const [newCollectionOn, setNewCollectionOn] = useState(false);
  const [title, setTitle] = useState("");
  const selectList = ["공개", "비공개"];
  const [selected, setSelected] = useState("공개")
  const [list, setList] = useState([])

  //처음 렌더링 시에 collections 배열에 있는 collection 마다의 bookmarks를 짝짓기해서 list에 저장
  useEffect(() => {
    console.log("swiperCollection:",collectionsLocal);
    const updatedList = [];
    if(Array.isArray(collectionsLocal)){
      for (const collection of collectionsLocal) {
          getCollections(
            collection.id,
            (resultData) =>{
              updatedList.push({collectionId: collection.id, toons: resultData.bookmarkInfos});
            },
            () => {}
          );
          setList(updatedList);
      }
    }
    console.log("swipercollection list: ", updatedList);
  }, [collectionsLocal]);

  // + 새 컬렉션 입력 창 on/off
  const handleNewCollectionOn = () =>{
    setNewCollectionOn((prevNewCollectionOn) => !prevNewCollectionOn);
    setSelected("공개");
    setTitle("");
  }
  const handleTitle = (e) =>{
    setTitle(e.target.value);
  }
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  
  
  //new collection 생성 api 호출
  const handleFetchNewCollection = () =>{
    let closed = false;
    if(selected ==="비공개"){
      closed = true;
    }
    if(title ===""){
      return;
    }
    createCollection(
      title,
      closed,
      (data) => {
        console.log(title, data.collectionId,"컬렉션 추가 완료");
        console.log(list);
        // 기존 collectionsLocal 배열에 새 컬렉션을 추가하여 업데이트
        const updatedCollections = [
          ...collections,
          { id: data.collectionId, title: title, closed : closed },
        ];
        setCollectionsLocal(updatedCollections);
      },
      ()=>{
        console.log(title, "컬렉션 추가 실패");
      }
    );
    handleNewCollectionOn();
  }
  
  //collection 클릭시 collectionPage로 이동
  const handlePreviewClick = (collectionId) =>{
    navigate(`/collection/${userId}/${collectionId}`);
    console.log(userId);
    console.log(collectionId);
  }
  
  return (
    <div className={styles.container} style={style}>
      {/* +새 컬렉션 버튼을 누르면 뜨는 추가 창 */}
      { newCollectionOn ? (
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
              <select onChange={handleSelect} value = {selected}>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.newCollection_box_contents_bottom}>
              <button className={styles.newCollection_cancel_button} onClick={handleNewCollectionOn}>취소</button>
              <button className={styles.newCollection_make_button} onClick={handleFetchNewCollection}>만들기</button>
            </div>
          </div>
        </div>
        ) : (null)}
      {/*본문 */}
      <div className={styles.newCollection}>
        <button onClick={handleNewCollectionOn}>
          + 새 컬렉션
        </button>
      </div>
          <div className={styles.scrollbar}>
          <div className={styles.collections_row}>
            {Array.isArray(collectionsLocal) && collectionsLocal.map((collection) =>//컬렉션 mapping
              !collection.closed && (//closed일때는 pass
                <div className={styles.collections_prevInfo_wrapper} key={collection.id}  onClick={() => handlePreviewClick(collection.id)}>
                  <div className={styles.collections_preview} >
                  {list && list
                      .filter((item) => item.collectionId === collection.id)
                      .map((item) =>
                        item.toons && item.toons.slice(0, 4).map((toon) => (
                          toon && (
                            <img
                              key={toon.id}
                              src={`${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailPath}`}
                              alt={toon.cartoonTitle}
                            />
                          )
                        )
                      )
                    )
                  }
                  </div>
                  <div className={styles.collections_info} key={collection.id}>
                    {collection.title}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
    </div>
  );
};

export default SwiperCollections;
