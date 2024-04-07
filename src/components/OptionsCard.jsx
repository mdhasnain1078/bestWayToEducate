import React from "react";

const OptionCard = ({
  id,
  imageSrc,
  title,
  descriptiveText = "",
  handleCardClick,
  isClicked,
  imageClass,
  isHorizontalContant = false,
}) => {
  const handleClick = () => {
    handleCardClick(id, title);
  };

  return (
    <div
      className={` h-full w-full flex ${
        isHorizontalContant ? "flex-col justify-center" : "flex-row"
      } items-center p-3 border rounded-lg cursor-pointer
      ${
        isClicked
          ? "border-lightCircularIndicator shadow-lg dark:border-darkCircularIndicator dark:shadow-black"
          : "border-lightGray shadow-sm"
      }`}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt="Profile"
        className={`${imageClass} dark:bg-darkBackground`}
      />
      <div
        className={`${isHorizontalContant ? "text-center" : "ml-3 text-left"}`}
      >
        <p className=" font-semibold inline dark:text-darkText">{title}</p>
        <p
          className={`font-semibold text-commonText ${
            isHorizontalContant ? "block" : "inline"
          }`}
        >
          {" "}
          {descriptiveText}
        </p>
      </div>
    </div>
  );
};

export default OptionCard;
