import React, { useState, useEffect } from 'react';
import { defaultProfileImage, uploadProfileImage } from "../../API/ProfileAPI";
import styles from './Profile.module.css'; 
import Modal from '../Modal/Modal.js';
import ModalPortal from '../Modal/Portal.js';
import ImgUpload from '../RegToonPage/ImgUpload';
import { useNavigate } from 'react-router';

const Profile = ({ accessUserId, userinfo, isFollow, profileImage, numCartoons, numFollowings, numFollowers, handleFollower, handleProfileImage, reload}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalStatusMessage, setModalStatusMessage] = useState("");
	const [inputCounter, setInputCounter] = useState(0);
	const navigate = useNavigate();

	const handleStatusMessage = (message) =>{setModalStatusMessage(message);}

	const onInputCounter = (e) => {
		const inputValue = e.target.value;
		setInputCounter(inputValue.length);
		handleStatusMessage(inputValue);
	};

	//프로필 수정 누를시
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	//모달에서 프로필 수정 취소
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalStatusMessage(userinfo.statusMessage);
	};
	//모달에서 프로필 수정 확인
	const handleEditProfile = () => {
		setIsModalOpen(false);
		if(profileImage===userinfo.profileImagePath||profileImage===""){//default profile로 설정
			defaultProfileImage(
				()=>{
					reload();
					console.log("default 프로필 이미지로 설정되었습니다.");
				},
				()=>{
					console.log("default 프로필 설정 도중 실패");
				}
			);
			
		}else{
			uploadProfileImage(
				profileImage,
				()=>{
					reload();
					console.log("프로필 이미지가 수정되었습니다.");
				},
				()=>{
					console.log("프로필 이미지 수정 실패");
				}
			)
		}
		setModalStatusMessage(userinfo.statusMessage);
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
                <p style={{margin:0}}><b>{numFollowers|| 0}</b></p>
              </div>
              <div style={{display:'flex', width:'33%', flexDirection:'column', alignItems:'center',justifyContent:'flex-start'}}
										onClick={()=>{navigate(`/userinfo/follow/${userinfo.id}/1`)}}>
                <p style={{margin:0}}>팔로잉</p>
                <p style={{margin:0}}><b>{numFollowings || 0}</b></p>
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
						{isModalOpen && (
						<ModalPortal>
							<Modal 
									modalStyle={{width:'250px',height:'250px',borderRadius:'1rem'}} 
									contentStyle={{width: '100%', height:'100%', display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}
									confirmStyle={{display:'none'}}
									isOpen={isModalOpen} onClose={handleCloseModal}
							>
								<div className={styles.modal_profileImage}>
									<ImgUpload
										style={{ width:'125px', height:'125px', margin:'0', borderRadius:'50%'}}
										imgFile={profileImage}
										setImgFile={(newImgFile) => {
											handleProfileImage(newImgFile);
										}}
										inputId={'userinfo_profileImage'}
										inputName={'userinfo_profileImage'}
										isDisabled={false}
									/>
								</div>
								<textarea
								 	className={styles.modal_statusMessage}
        					id="statusMessage"
        					maxLength={40}
									placeholder={modalStatusMessage}
        					onChange={onInputCounter}
        					required
      					/>
        				<span className={styles.modal_statusMessage_length}>{inputCounter}/40</span>
								<div className={styles.modal_bottom_wrapper}>
									<button className={styles.modal_cancel_button} onClick={handleCloseModal}>
										취소
									</button>
									<button className={styles.modal_confirm_button} onClick={handleEditProfile}>
										확인
									</button>
								</div>
							</Modal>
						</ModalPortal>
						)}
          </div>
				</td>
		</tr></tbody>
		</table>
	);
};

export default Profile;
