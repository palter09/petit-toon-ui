import React from 'react';

const MyComponent = () => {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/image1.png'}
          alt="Image 1"
          style={{ position: 'absolute', width: '404px', height: '636px', left: '-12px', top: '113px' }}/>
      </div>
    );
  };

  export default MyComponent;