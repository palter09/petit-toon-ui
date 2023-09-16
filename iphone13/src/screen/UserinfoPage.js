import React, { useEffect, useState } from "react";
import Header from "./Header/Header.js";
import Profile from "./UserinfoPage/Profile.js";
import Works from "./UserinfoPage/Works.js";

import { useParams } from "react-router-dom";
import { Error404 } from "./ToonPage/Loading404";
import { getCookie } from "../API/HandleTokens.js";

import { getUserInfo } from "../API/UserAPI.js";
import { getCollections } from "../API/CollectionAPI.js";
import { getWebtoons } from "../API/ToonAPI.js";
import { getFollowings, getFollowers, followUser, deleteFollower } from "../API/FollowAPI.js";

const UserinfoPage = () => {
  const [userinfo, setUserinfo] = useState({});
  const [is404, setIs404] = useState(false);
  const [numCartoons, setNumCartoons] = useState(0);
  const [pageCollectionAPI, setPageCollectionAPI] = useState(0);

  const userid = useParams().id;
  const [accessUserId, setAccessUserId] = useState(parseInt(getCookie("loginUserId")));

  //Profile.js
  const [isFollow, setIsFollow] = useState(false);
	const [profileImage, setProfileImage] = useState("");

  //Works.js
  const [cartoons, setCartoons] = useState([]);
  const [collections, setCollectionInfo] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  //404에러 핸들러
  const handleUndefinedUser = (errorResponseData) => {
    console.log(errorResponseData);
    console.log("error code:", errorResponseData.code);
    console.log("error message:", errorResponseData.message);
    if (errorResponseData && errorResponseData.code === "404") {
      setIs404(true);
    }
  };

  const loadInfo = () => {getUserInfo(userid, setUserinfo, handleUndefinedUser);}
  const loadToons = () => {getWebtoons(userid, (data) =>{ setCartoons(data.cartoons); }, (_) =>{console.error("웹툰 목록 불러오기 실패"); })}
  const loadCollections = () => {
    getCollections(userid, pageCollectionAPI, 9,
      (data) =>{
        if(data.collectionInfos.length !== 0){//더이상 받아올 정보가 없으면 변화x
        setCollectionInfo((prevData)=>prevData.concat(data.collectionInfos));
      }}, //이전 컬렉션 정보 배열이랑 합침
      (_) => { console.error("컬렉션 목록 불러오기 실패"); }
    );
  }
  const loadFollowings = () => {getFollowings(userid, 0, 20, (data) => { setFollowings(data.users);}, (_) => { console.error("팔로잉 목록 불러오기 실패"); });}
  const loadFollowers = () => {getFollowers(userid, 0, 20, 
    (data) => { setFollowers(data.users); }, 
    (_) => { console.error("팔로워 목록 불러오기 실패"); }
  );}

  useEffect(() => {
    if (userid) {
      loadInfo();
      loadToons();
      loadCollections();
      loadFollowings();
      loadFollowers();
    }
  }, [userid, pageCollectionAPI]);


  useEffect(()=> {
    setIsFollow(userinfo.follow);
  }, [userinfo]);

  //컬렉션 재호출 감지용
  const handleIntersect = () =>{setPageCollectionAPI(prevPage => prevPage + 1); console.log("감지:컬렉션api 재호출");}
  // 컬렉션 추가 시 호출되는 함수
  const updateCollections = (collectionId, title, closed) => {
    const updatedCollections = [
      ...collections,
      { id: collectionId, title: title, closed: closed },
    ];
    setCollectionInfo(updatedCollections);
  };

  //팔로우 버튼 누를시
	const handleFollower = () =>{
		if(!isFollow){//팔로우 안했으면
			followUser(
        userinfo.id, 
        ()=>{
          setIsFollow(true); 
          console.log("팔로우 성공"); 
          loadFollowers();
        }, 
        ()=>{console.log("팔로우 실패")}
      );
		}else{//팔로우 했으면
			deleteFollower(
        userinfo.id, 
        ()=>{
          setIsFollow(false); 
          console.log("언팔로우 성공")
          loadFollowers();
        }, 
        ()=>{console.log("언팔로우 실패")}
      );
		}
	}

  const handleProfileImage = (img) => {
    setProfileImage(img);
  }
  

  return (
    <div className="container">
        <Header />
        {is404 ? (
          <Error404 what = {'유저를'} />
        ) : (
          <>
            <Profile 
              accessUserId={accessUserId}
              userinfo={userinfo} 
              isFollow={isFollow}
              profileImage={profileImage}
              numCartoons={numCartoons} 
              handleFollower={handleFollower}
              handleProfileImage={handleProfileImage}
              reload={loadInfo}
            />
            <Works 
              accessUserId={accessUserId}
              userinfo={userinfo} 
              cartoons={cartoons}
              collections={collections}
              handleIntersect={handleIntersect}
              updateCollections={updateCollections}
              followings={followings}
              followers={followers}
            />
          </>
        )}
      </div>
  );
};

export default UserinfoPage;
