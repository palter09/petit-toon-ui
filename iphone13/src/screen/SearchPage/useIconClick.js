import { useState } from 'react';

const useIconClick = () => {
  const [homeIconClicked, setHomeIconClicked] = useState(false);
  const [searchButtonIconClicked, setSearchButtonIconClicked] = useState(false);

  const handleIconClick = (icon) => {
    switch (icon) {
      case 0:
        setHomeIconClicked(true);
        setTimeout(() => {
          setHomeIconClicked(false);
        }, 50);
        break;
      case 1:
        setSearchButtonIconClicked(true);
        setTimeout(() => {
          setSearchButtonIconClicked(false);
        }, 50);
        break;    
      default:
        break;
    }
  };

  return {
   homeIconClicked,
   searchButtonIconClicked,
   handleIconClick,
  };
};

export default useIconClick;
