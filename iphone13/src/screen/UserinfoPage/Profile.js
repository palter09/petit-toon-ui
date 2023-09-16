import React, { useState, useEffect } from 'react';
import { defaultProfileImage, editProfile, uploadProfileImage } from "../../API/ProfileAPI";
import useDetectClose from '../../hooks/useDetectClose';
import styles from './Profile.module.css'; 

import EditModal from './EditModal';
import { useNavigate } from 'react-router';

const Profile = ({ accessUserId, userinfo, isFollow, profileImage, numCartoons,handleFollower, handleProfileImage, reload}) => {
	const navigate = useNavigate();
	const [isOpenModal, setIsOpenModal] = useState(false);

	//프로필 수정 누를시
	const handleOpenModal = () => {
		setIsOpenModal(true);
	};
	//모달에서 프로필 수정 취소
	const handleCloseModal = () => {
		setIsOpenModal(false);
	};
	//모달에서 프로필 수정 확인
	const handleEditProfile = (nickname, tag, password = "qwer1234!", statusMessage) => {
		console.log(nickname,tag,password,statusMessage);
		if(profileImage!==userinfo.profileImagePath){
			uploadProfileImage(profileImage,
				()=>{reload(); console.log("프로필 이미지 수정 성공");},
				()=>{console.log("프로필 이미지 수정 실패");}
			)
		}
		editProfile(nickname, tag, password, statusMessage,
			()=>{reload(); console.log("프로필 정보 변경 성공")},
			()=>{console.log("프로필 정보 변경 실패")}
		)
		handleCloseModal();
	};
		
	return (
		<table className={styles.profileContainer}>
			<tbody><tr>
				{/*프로필 이미지*/}
				<td align= "center">
					<div className={styles.userProfileImage}>
						<img
							src={
								(userinfo.profileImagePath!=="sample-path")
									? `${process.env.REACT_APP_SERVER_IP}/resources/${userinfo.profileImagePath}`
									: process.env.PUBLIC_URL + '/images/mypage.png'
							}
							alt="profile_image"
						/>
					</div>
				</td>
				{/*프로필 정보*/}
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
							<div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}
										onClick={()=>{navigate(`/userinfo/follow/${userinfo.id}/0`)}}>
										<p style={{margin:0}}>팔로워</p>
                <p style={{margin:0}}><b>{userinfo.followerCount|| 0}</b></p>
              </div>
              <div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}
										onClick={()=>{navigate(`/userinfo/follow/${userinfo.id}/1`)}}>
                <p style={{margin:0}}>팔로잉</p>
                <p style={{margin:0}}><b>{userinfo.followCount || 0}</b></p>
              </div>
            </div>
					</div>
					{/*프로필 상태메시지+버튼*/}
          <div style={{width:'100%', height:'48%',display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <p style={{margin:0, height: '50%', textAlign:'center'}}>{userinfo.statusMessage || '상태메시지가 등록되지 않았습니다'}</p>
						<div className={styles.header_bottom_wrapper}>
						{
  						(accessUserId !== userinfo.id) ? (
    						<button 
      						className={`${isFollow ? styles.header_bottom_follow_button_cancel : styles.header_bottom_follow_button}`} 
      						onClick={handleFollower}
    						>
      					{isFollow ? '팔로우 취소' : '팔로우'}
    						</button>
  							) : (
									<button
										className={styles.header_bottom_follow_button}
										onClick={handleOpenModal}
									>
										프로필 수정
									</button>
  							)
						}
						</div>
						{/* 모달 */}
						{isOpenModal && (
							<EditModal 
								isOpenModal={isOpenModal} 
								onCloseModal={handleCloseModal} 
								onSubmit={handleEditProfile}
								userinfo={userinfo}
								profileImage={profileImage}
								onProfileImage={handleProfileImage}/>
						)}
          </div>
				</td>
		</tr></tbody>
		</table>
	);
};

export default Profile;
