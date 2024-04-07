import React from "react";

const CircularProgress = ({ percentage }) => {
  return (
    <div className="w-20 h-20 relative">
      <svg
        className="absolute top-0 left-0 w-full h-full transform rotate-180"
        viewBox="0 0 36 36"
      >
        <circle
          className="text-gray-300 stroke-current"
          strokeWidth="4"
          fill="none"
          cx="18"
          cy="18"
          r="15.91549430918954"
        />
        <circle
          className="text-lightCircularIndicator dark:text-darkCircularIndicator stroke-current"
          strokeWidth="4"
          strokeDasharray={`${percentage} 100`}
          strokeLinecap="round"
          fill="none"
          cx="18"
          cy="18"
          r="15.91549430918954"
          transform="rotate(-90 18 18)"
        />
      </svg>
      <div className="flex items-center justify-center w-full h-full text-lightCircularIndicator dark:text-darkCircularIndicator text-2xl font-bold">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
