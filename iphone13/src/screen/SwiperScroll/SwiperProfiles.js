import React from "react";
import "./SwiperProfiles.css";
import { useNavigate } from "react-router";

const SwiperProfiles = ({ users, style }) => {
  const navigate = useNavigate();
  const handleImageClick = (id) => {
    navigate(`/userinfo/${id}`);
  };
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
        </div>
      </div>
    </div>
  );
};

export default SwiperProfiles;
