import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwiperCollections.module.css";
import { createCollection, getCollections } from "../../API/CollectionAPI";

const SwiperCollections = ({ collections, style }) => {
  const navigate = useNavigate();
  const [newCollectionOn, setNewCollectionOn] = useState(false);
  const [title, setTitle] = useState("");
  const selectList = ["공개", "비공개"];
  const [selected, setSelected] = useState("공개")
  const [list, setList] = useState([])
  /*
  const [list, setList] = useState([{collectionId : 1, toons: [ {//테스트용
      "id" : 1,
      "cartoonId" : 2,
      "cartoonTitle" : "cartoon-title-1",
      "thumbnailPath" : "cartoon/thumbnail-path/1"
    }, {
      "id" : 2,
      "cartoonId" : 4,
      "cartoonTitle" : "cartoon-title-2",
      "thumbnailPath" : "cartoon/thumbnail-path/2"
    }, {
      "id" : 3,
      "cartoonId" : 7,
      "cartoonTitle" : "cartoon-title-3",
      "thumbnailPath" : "cartoon/thumbnail-path/3"
    },{
      "id" : 4,
      "cartoonId" : 10,
      "cartoonTitle" : "cartoon-title-4",
      "thumbnailPath" : "cartoon/thumbnail-path/4"
    }, {
      "id" : 5,
      "cartoonId" : 12,
      "cartoonTitle" : "cartoon-title-5",
      "thumbnailPath" : "cartoon/thumbnail-path/5"
    }
  ]
  }]);
  */

  //처음 렌더링 시에 collections 배열에 있는 collection 마다의 bookmarks를 짝짓기해서 list에 저장
  useEffect(() => {
    console.log("swiperCollection:",collections);
    const updatedList = [];
    if(Array.isArray(collections)){
      for (const collection of collections) {
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
  }, [collections]);

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
  
  
  //new collection api 호출
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
      },
      ()=>{
        console.log(title, "컬렉션 추가 실패");
      }
    );
    handleNewCollectionOn();
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
            {Array.isArray(collections) && collections.map((collection) =>//컬렉션 mapping
              !collection.closed && (//closed일때는 pass
                <div className={styles.collections_prevInfo_wrapper} key={collection.id}>
                  <div className={styles.collections_preview}>
                    {list.map((item) => {
                      if (item.collectionId === collection.id && item.toons) {
                        item.toons.slice(0, 4).map((toon) => (//해당 컬렉션에서 앞에서 4개만 썸네일 미리보기
                          toon && (
                            <img
                              key={toon.id}
                              src={`${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailPath}`}
                              alt={toon.cartoonTitle}
                            />
                          )
                        ));
                      }
                    })}
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
