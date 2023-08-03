import React from 'react';

const profileStyle = {
	position: "absolute",
	width:"390px",
	height: "140px",
	top: "115px",
	left: "0px",
}

const textStyle = {
	color: "#DA5E9D",
}


const Profile = (userinfo) => {
  return (
    <table style={profileStyle}>
			<tbody><tr>
				<td align= "center" style= {{ width: "128px", height: "128px"}}>
					<img
						src={userinfo.img || process.env.PUBLIC_URL + '/images/mypage.png'}
						alt="profile_image"
					/>
				</td>
				<td align= "left" valign="top" style={textStyle}>
					<div>
						<p style={{marginBottom:10}}><b>{userinfo.nickname || "Unknown"}의 정보</b></p>
						<p style={{margin:5}}><b>@{userinfo.id || "unknown_id"}</b></p>
						<p style={{margin:5}}><b>작품 수 :&nbsp;</b>{userinfo.works || 0}</p>
						<p style={{margin:5}}><b>팔로잉  :&nbsp;</b>{userinfo.following || 0}</p>
					</div>
				</td>
    	</tr></tbody>
		</table>
  );
};

export default Profile;
