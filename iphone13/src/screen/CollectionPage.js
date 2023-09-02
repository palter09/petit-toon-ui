import React, { useEffect, useState } from "react";
import styles from "./CollectionPage/CollectionPage.module.css";
import { useParams, useNavigate } from "react-router";
import { getUserInfo } from "../API/UserAPI";
import { deleteCollection, getCollections } from "../API/CollectionAPI";
import { getBookmarks } from "../API/BookmarkAPI";
import { ImConfused } from "react-icons/im";
import { PiListBulletsFill } from "react-icons/pi";

const CollectionPage = () => {
  const { userId, collectionId } = useParams();
  const [userName, setUserName] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");
  const [isClosed, setIsClosed] = useState(false);
  const [bookmarks, setBookmarks] = useState();

  const navigate = useNavigate();

  //렌더링 시에 유저 정보, 컬렉션 정보, 북마크 가져옴
  useEffect(() => {
    getUserInfo(
      //유저 정보 불러오기
      userId,
      (data) => {
        setUserName(data.nickname);
      },
      () => {
        console.log("user 정보 불러오기 실패");
      }
    );
    getCollections(
      //컬렉션 정보 불러오기
      userId,
      0,
      30,
      (data) => {
        const responseData = data.collectionInfos;
        for (const collection of responseData) {
          if (collection.id === parseInt(collectionId)) {
            setIsClosed(collection.closed);
            setCollectionTitle(collection.title);
            console.log(collection.closed);
          }
        }
      },
      () => {
        console.log("컬렉션 정보 불러오기 실패");
      }
    );
    getBookmarks(
      //컬렉션에 속한 북마크들 가져오기
      collectionId,
      (data) => {
        const updatedBookmarks = [];
        const responseData = data.bookmarkInfos;
        for (const bookmark of responseData) {
          updatedBookmarks.push(bookmark);
        }
        setBookmarks(updatedBookmarks);
        console.log("북마크 목록:", updatedBookmarks);
      },
      () => {
        console.log("북마크 정보 불러오기 실패");
      }
    );
  }, [collectionId, userId]);

  //컬렉션 삭제
  const handleDeleteCollection = () => {
    deleteCollection(
      collectionId,
      () => {
        console.log("컬렉션 삭제 완료");
        navigate(`/userinfo/${userId}`);
      },
      () => {
        console.log("컬렉션 삭제 실패");
      }
    );
  };
  
  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <div className={styles.scrollbar}>
          <div className={styles.header_wrapper}>
            <div className={styles.header_preview}>
              {Array.isArray(bookmarks) && bookmarks.length ? (
                bookmarks
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
              ) : (
                <div className={styles.empty_header}>
                  <PiListBulletsFill size="100" color="#DA5E9D" />
                </div>
              )}
            </div>
            <div className={styles.header_info_wrapper}>
              <h3>{collectionTitle || "undefined title"}</h3>
              <div className={styles.header_info_closedName}>
                <p>{isClosed ? "비공개" : "공개"}</p>
                <p>•</p>
                <p>{userName || "undefined user"}</p>
              </div>
              <p>작품 {Array.isArray(bookmarks) ? bookmarks.length : "0"} 개</p>
              <button onClick={handleDeleteCollection}>삭제</button>
            </div>
          </div>
          {Array.isArray(bookmarks) && bookmarks.length ? (
            <div className={styles.row}>
              <div className={styles.previewInfo_wrapper}>
                {bookmarks.map((toon) => (
                  <>
                    <div className="styles.preview" key={toon.id}>
                      <img
                        src={`${process.env.REACT_APP_SERVER_IP}/resources/${toon.thumbnailUrl}`}
                        alt={toon.title}
                      />
                    </div>
                    <div className={styles.info}>
                      <p>{toon.title}</p>
                      <p>{toon.authorNickname}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.empty_collection}>
              <ImConfused color="#DA5E9D" size="100" />
              <p>
                북마크가 등록되지
                <br />
                않았습니다
              </p>
            </div>
          )}
        </div>
        <div className={styles.footer_wrapper} />
      </div>
    </div>
  );
};

export default CollectionPage;
