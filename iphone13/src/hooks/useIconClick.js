import { useState } from 'react';

const useIconClick = () => {
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(true);
    setTimeout(() => {
      setIconClicked(false);
    }, 100);
  };

  return [ iconClicked, handleIconClick ];
};

export default useIconClick;
