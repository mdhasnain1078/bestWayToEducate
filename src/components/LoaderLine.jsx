import React, { useState, useEffect } from "react";

const LoaderLine = ({ progress }) => {
  return (
    <>
      <div className="w-full h-1 bg-lightGray rounded-full overflow-hidden">
        <div
          className="h-full bg-commonStraightLineLoader"
          style={{
            width: `${progress}%`,
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </>
  );
};

export default LoaderLine;
