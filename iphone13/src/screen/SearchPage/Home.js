import React from 'react';
import './SearchPage.css';
import useIconClick from '../../hooks/useIconClick';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [homeIconClicked, handleIconClick] = useIconClick();
  const navigate = useNavigate();

  //iconclick효과가 페이지 이동보다 먼저 일어나게
  const handleHomeIconClick = () => {
    handleIconClick();
    setTimeout(() => {
      navigate('/toon');
    }, 150);
  };
  return (
    <div>
			<button className='HomeBox' onClick={() => {handleHomeIconClick()}}>
        <img src = {process.env.PUBLIC_URL +
                  (homeIconClicked ? "/images/logo_small_clicked.png" : "/images/logo_small.png")}
        alt = "홈으로"
        />
      </button>
    </div>
  );
};

export default Home;
