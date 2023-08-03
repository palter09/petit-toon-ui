import { useState } from 'react';

const useIconClick = () => {
  const [homeIconClicked, setHomeIconClicked] = useState(false);
  

  const handleIconClick = (icon) => {
    switch (icon) {
      case 0:
        setHomeIconClicked(true);
        setTimeout(() => {
          setHomeIconClicked(false);
        }, 50);
        break;
      default:
        break;
    }
  };

  return {
   homeIconClicked,
   handleIconClick,
  };
};

export default useIconClick;
