import { useState, useRef, useEffect } from "react";

export const useToggleElement = () => {
  const [showElement, setShowElement] = useState(false);
  const toggleElement = () => {
    setShowElement(!showElement);
  };

  const [showmeElement, setshowmeElement] = useState(true);
  const mytoggleElement = () => {
    setshowmeElement(!showmeElement);
  };

  const [dropElement, setdropElement] = useState(false);
  const mytoggledropElement = () => {
    setdropElement(!dropElement);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("mypic")
    ) {
      setdropElement(false);
    }
  };

  return { showElement, toggleElement, showmeElement, mytoggleElement, dropElement, mytoggledropElement, dropdownRef };
};

