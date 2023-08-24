import React from "react";
import "./SwiperProfiles.css";
import { useNavigate } from "react-router";

// users = [{followId: , user: }{followId: , user: }...]
const SwiperProfiles = ({ users, style }) => {
  const navigate = useNavigate();
  const handleImageClick = (user) => {
    navigate(`/userinfo/${user.id}`);
  };
  return (
    <div className="ProfilesContainer" style={style}>
      <div className="Profiles_scrollbar">
        <div className="profiles_row">
          {users.map((user) => (
            <div className="profiles_box" key={user.followId}>
              <img
                src={`${process.env.REACT_APP_SERVER_IP}/resources/${user.user.profileImagePath}`}
                alt={user.user.nickname}
                onClick={() => handleImageClick(user.user)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperProfiles;
