import React, { useState } from "react";

const ContinueButton = ({ isContinue = false, callBack }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 200); // Duration in milliseconds, adjust as needed
    callBack();
  };

  return isContinue ? (
    <button
      className={`bg-black ${
        isActive ? "bg-gray-700" : "hover:bg-gray-900"
      } text-darkText py-2  px-8 rounded focus:outline-none`}
      onClick={handleClick}
    >
      Continue
    </button>
  ) : (
    <button
      className={` bg-gray-300 text-white py-2 px-8 rounded focus:outline-none`}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
