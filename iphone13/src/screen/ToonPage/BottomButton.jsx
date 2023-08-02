import React, { useState } from "react";
import * as Styled from "./MenuStyles";
import useDetectClose from "./useDetectClose";
import useIconClick from "./useIconClick";

const chatTmp = () => {
  // ...
};

const BottomButton = () => {
  const [] = useDetectClose(false);
  const [likeIconClicked, setLikeIconClicked] = useState(false)
  const [disLikeIconClicked, setDisLikeIconClicked] = useState(false)
  const [commentIconClicked, setCommentIconClicked] = useState(false)
  const [subscribeIconClicked, setSubscribeIconClicked] = useState(false)
  const [settingIconClicked, setSettingIconClicked] = useState(false)

  const handleIconClick = (icon) => {
    switch(icon){
      case 0:
        setLikeIconClicked(true);
        setTimeout(() => {
          setLikeIconClicked(false);
        }, 100);
        break;

      case 1:
        setDisLikeIconClicked(true);
        setTimeout(() => {
          setDisLikeIconClicked(false);
        }, 100);
        break;

      case 2:
        setCommentIconClicked(true);
        setTimeout(() => {
          setCommentIconClicked(false);
        }, 100);
        break;

      case 3:
        setSubscribeIconClicked(true);
        setTimeout(() => {
          setSubscribeIconClicked(false);
        }, 100);
        break;

      case 4:
        setSettingIconClicked(true);
        setTimeout(() => {
          setSettingIconClicked(false);
        }, 100);
        break;
    }
  };
}