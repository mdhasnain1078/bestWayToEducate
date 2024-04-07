import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ isDisable = false, callBack }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 200); // Duration in milliseconds, adjust as needed
    callBack();
  };

  return isDisable ? (
    <IoIosArrowBack className="cursor-pointer m-0 p-0" />
  ) : (
    <div
      className={`transition-opacity inline ${
        isActive ? "opacity-50" : "opacity-100"
      }`}
    >
      <IoIosArrowBack onClick={handleClick} className="cursor-pointer" />
    </div>
  );
};

export default BackButton;
