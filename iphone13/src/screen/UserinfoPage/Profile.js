import React, { useState, useEffect } from 'react';
import { deleteFollower, followUser } from '../../API/FollowAPI';
import styles from './Profile.module.css'; 

const Profile = ({ userinfo, numCartoons, numFollowings, numFollowers}) => {
	const [isFollow, setIsFollow] = useState(false);

	useEffect(() => {
    setIsFollow(userinfo.follow);
  }, [userinfo.follow]);

	const handleFollower = () =>{
		if(!isFollow){//팔로우 안했으면
			followUser(userinfo.id, ()=>{setIsFollow(true); console.log("팔로우 성공")}, ()=>{});
		}else{//팔로우 했으면
			deleteFollower(userinfo.id, ()=>{setIsFollow(false); console.log("팔로우 실패")}, ()=>{});
		}
	}

	return (
	<table className={styles.profileContainer}>
			<tbody><tr>
				<td align= "center" style= {{ width: "110px", height: "128px"}}>
					<img
						src={`${process.env.REACT_APP_SERVER_IP}/resources/${userinfo.profileImagePath}` && process.env.PUBLIC_URL + '/images/mypage.png'}
						alt="profile_image"
					/>
				</td>
				<td align= "left" valign="top" className={styles.textStyle}>
					<div style={{width:'100%', height:'55%', display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column', width:'40%', textAlign:'start', margin:'0rem', justifyContent:'center'}}>
              <p style={{margin:0, fontSize:'13px'}}><b>{userinfo.nickname || "Unknown"}</b></p>
              <p style={{margin:0, fontSize:'13px'}}><b>{userinfo.tag || "unknown_tag"}</b></p>
            </div>
            <div style={{display:'flex', width:'60%', justifyContent:'center', alignItems:'center'}}>
              <div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}>
                <p style={{margin:0}}>작품</p>
                <p style={{margin:0}}><b>{numCartoons || 0}</b></p>
              </div>
							<div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}>
                <p style={{margin:0}}>팔로워</p>
                <p style={{margin:0}}><b>{numFollowers|| 0}</b></p>
              </div>
              <div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}>
                <p style={{margin:0}}>팔로잉</p>
                <p style={{margin:0}}><b>{numFollowings || 0}</b></p>
              </div>
            </div>
					</div>
          <div style={{width:'100%', height:'48%',display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <p style={{margin:0, height: '50%', textAlign:'center'}}>{userinfo.statusMessage || '상태메시지가 등록되지 않았습니다'}</p>
						<div className={styles.header_bottom_wrapper}>
							<button 
								className={`${isFollow ? styles.header_bottom_follow_button_cancel : styles.header_bottom_follow_button}`} 
								onClick={handleFollower}
								>
  							{isFollow ? '팔로우 취소' : '팔로우'}
							</button>
						</div>
          </div>
				</td>
		</tr></tbody>
		</table>
	);
};

export default Profile;
