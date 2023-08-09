// useDetectClose.js
import { useEffect, useState } from "react";

const useDetectClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (isOpen && e.target.closest(".dropdown-container") === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, toggleHandler];
};

export default useDetectClose;
