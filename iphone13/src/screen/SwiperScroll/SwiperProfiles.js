import React from 'react';
import './SwiperProfiles.css';

const SwiperProfiles = ({ users, style }) => {

  return (
    <div className='ProfilesContainer' style={style}>
      <div className='Profiles_scrollbar' > 
        <div className='profiles_row'>
          {users.map((user) => (
            <div className = 'profiles_box' key={user.id}>
              <img src={user.profileImagePath} alt={user.nickname} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiperProfiles;
