import React, { useState } from 'react';
import { deleteFollower, followUser } from '../../API/FollowAPI';
import { useNavigate } from 'react-router';
import styles from './Profile.module.css'; 

const Profile = ({ userinfo }) => {
	const navigate = useNavigate();

	const handleDeleteFollower = () =>{//delete하는 주체가 명확히 없음
		console.log(userinfo.id);
		deleteFollower(userinfo.id, ()=>{}, ()=>{navigate('/')});
	};

	const handleFollower = () =>{//로그인한 user의 id로 follow해야하는데 그 유저의 id를 모름
		console.log(userinfo.id);
		followUser(3, userinfo.id, ()=>{}, ()=>{navigate('/')});
	}

	return (
	<table className={styles.profileContainer}>
			<tbody><tr>
				<td align= "center" style= {{ width: "128px", height: "128px"}}>
					<img
						src={`${process.env.REACT_APP_SERVER_IP}/resources/${userinfo.profileImagePath}` && process.env.PUBLIC_URL + '/images/mypage.png'}
						alt="profile_image"
					/>
				</td>
				<td align= "left" valign="top" className={styles.textStyle}>
					<div style={{width:'100%', height:'55%', display:'flex'}}>
            <div style={{display:'flex', flexDirection:'column', width:'50%', textAlign:'center', margin:'0.5rem'}}>
              <p style={{margin:10, fontSize:'15px'}}><b>{userinfo.nickname || "Unknown"}</b></p>
              <p style={{margin:0, fontSize:'15px'}}><b>{userinfo.tag || "unknown_tag"}</b></p>
            </div>
            <div style={{display:'flex', width:'80%', justifyContent:'center', alignItems:'center'}}>
              <div style={{display:'flex', width:'50%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}>
                <p style={{margin:0}}>작품</p>
                <p style={{margin:0}}><b>{userinfo.works || 0}</b></p>
              </div>
              <div style={{display:'flex', width:'50%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}>
                <p style={{margin:0}}>팔로잉</p>
                <p style={{margin:0}}><b>{userinfo.following || 0}</b></p>
              </div>
            </div>
					</div>
          <div style={{width:'100%', height:'48%',display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <p style={{margin:0, height: '50%', textAlign:'center'}}>{userinfo.statusMessage || '상태메시지가 등록되지 않았습니다'}</p>
						<div className={styles.header_bottom_wrapper}>
							<button className={styles.header_bottom_follow_button} onClick={handleFollower}>팔로우</button>
							<button className={styles.header_bottom_cancel_button} onClick={handleDeleteFollower}>취소</button>
						</div>
          </div>
				</td>
		</tr></tbody>
		</table>
	);
};

export default Profile;
