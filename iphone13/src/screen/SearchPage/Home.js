import React from 'react';
import './SearchPage.css';
import useIconClick from './useIconClick';

const Home = () => {
  const {
    homeIconClicked,
    handleIconClick,
  } = useIconClick();

  //iconclick효과가 페이지 이동보다 먼저 일어나게
  const handleHomeIconClick = () => {
    handleIconClick(0);
    setTimeout(() => {
      
    }, 150);
  };
  return (
    <div>
			<button className='HomeBox' onClick={() => {handleHomeIconClick()}}>
        <img src = {process.env.PUBLIC_URL +
                  (homeIconClicked ? "./images/logo_small_clicked.png" : "./images/logo_small.png")}
        alt = "홈으로"
        />
      </button>
    </div>
  );
};

export default Home;
