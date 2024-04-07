import React from "react";

const HeadTile = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 dark:text-darkText">
        {title}
      </h1>
      <p className="text-commonText text-xs sm:text-base font-semibold mb-3 sm:mb-5">
        {subTitle}
      </p>
    </div>
  );
};

export default HeadTile;
