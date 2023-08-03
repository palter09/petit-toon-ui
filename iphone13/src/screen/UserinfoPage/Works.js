import React from 'react';

const worksStyle = {
	position: "absolute",
	width:"390px",
	height: "140px",
	top: "256px",
	left: "0px",
  border: "1px solid black"
}

const Works = (userinfo) => {
  return (
    <div style={worksStyle}>
      <b color="#DA5E9D">내 작품</b>
    </div>
  );
};

export default Works;
