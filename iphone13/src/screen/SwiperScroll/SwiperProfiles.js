import React,{useEffect, useState} from "react";
import "./SwiperProfiles.css";
import useIntersectionObserver from '../../hooks/useIntersectionOberserver';
import { useNavigate } from "react-router";

const SwiperProfiles = ({ users, handleFollowerIntersect, handleFollowingIntersect, style }) => {
  const navigate = useNavigate();
  const [followerObserveTarget, setFollowerObserveTarget] = useState(false);
  const [followingObserveTarget, setFollowingObserveTarget] = useState(false);

  useEffect(()=>{
    if(users.length !== 0 && users.length % 20 === 0){
      if(handleFollowerIntersect){
        setFollowerObserveTarget(true);
      }else if(handleFollowingIntersect){
        setFollowingObserveTarget(true);
      }
    }
  },[handleFollowerIntersect, handleFollowingIntersect, users])
  const handleImageClick = (id) => {
    navigate(`/userinfo/${id}`);
  };

  const options = {
    threshold : 0.3,//targetRef가 30% 차지하면
    root: document.querySelector('.Profiles_scrollbar')//viewport를 .profiles_scrollbar로 설정
  }
  const { followerTargetRef, followerObserverRef } = useIntersectionObserver(
    options,
    ()=>{
      if(followerObserveTarget){
        if(handleFollowerIntersect){
          handleFollowerIntersect();
        }
        followerObserverRef.current.unobserve(followerTargetRef.current);
        setFollowerObserveTarget(false);
      }
    },
  );
  const { followingTargetRef, followingObserverRef } = useIntersectionObserver(
    options,
    ()=>{
      if(followingObserveTarget){
        if(handleFollowingIntersect){
          handleFollowingIntersect();
        }
        followingObserverRef.current.unobserve(followingTargetRef.current);
        setFollowingObserveTarget(false);
      }
    },
  );

  return (
    <div className="ProfilesContainer" style={style}>
      <div className="Profiles_scrollbar">
        <div className="profiles_row">
          {users.map((user) => (
            <div className="profiles_wrapper" key={user.id}>
              <div className="profiles_box" key={user.id}>
                <img
                  src={`${process.env.REACT_APP_SERVER_IP}/resources/${user.profileImagePath}`}
                  alt={user.nickname}
                  onClick={() => handleImageClick(user.id)}
                />
              </div>
              <p>{user.nickname}</p>
            </div>
          ))}
          {!followerObserveTarget || !followingObserveTarget  ? null : (
            <div className='profiles_wrapper' ref={followerObserveTarget||followingObserveTarget}>
              <div className="profiles_box">
                loading...
              </div>
              <p>loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwiperProfiles;
