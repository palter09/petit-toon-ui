import { useState } from 'react';

const useIconClick = () => {
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [storeIconClicked, setStoreIconClicked] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [mapIconClicked, setMapIconClicked] = useState(false);
  const [petitIconClicked, setPetitIconClicked] = useState(false);
  const [eventIconClicked, setEventIconClicked] = useState(false);
  const [mypageIconClicked, setMypageIconClicked] = useState(false);
  const [chatIconClicked, setChatIconClicked] = useState(false);
  const [supportIconClicked, setSupportIconClicked] = useState(false);

  const handleIconClick = (icon) => {
    switch (icon) {
      case 0:
        setMenuIconClicked(true);
        setTimeout(() => {
          setMenuIconClicked(false);
        }, 100);
        break;
      case 1:
        setStoreIconClicked(true);
        setTimeout(() => {
          setStoreIconClicked(false);
        }, 100);
        break;
      case 2:
        setSearchIconClicked(true);
        setTimeout(() => {
          setSearchIconClicked(false);
        }, 100);
        break;
      case 3:
        setMapIconClicked(true);
        setTimeout(() => {
          setMapIconClicked(false);
        }, 100);
        break;
      case 4:
        setPetitIconClicked(true);
        setTimeout(() => {
          setPetitIconClicked(false);
        }, 100);
        break;
      case 5:
        setEventIconClicked(true);
        setTimeout(() => {
          setEventIconClicked(false);
        }, 100);
        break;
      case 6:
        setMypageIconClicked(true);
        setTimeout(() => {
          setMypageIconClicked(false);
        }, 100);
        break;
      case 7:
        setChatIconClicked(true);
        setTimeout(() => {
          setChatIconClicked(false);
        }, 100);
        break;
      case 8:
        setSupportIconClicked(true);
        setTimeout(() => {
          setSupportIconClicked(false);
        }, 100);
        break;
      default:
        break;
    }
  };

  return {
    menuIconClicked,
    storeIconClicked,
    searchIconClicked,
    mapIconClicked,
    petitIconClicked,
    eventIconClicked,
    mypageIconClicked,
    chatIconClicked,
    supportIconClicked,
    handleIconClick,
  };
};

export default useIconClick;
