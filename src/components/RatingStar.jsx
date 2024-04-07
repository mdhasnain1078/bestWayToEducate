import React, { useState } from "react";

const YellowStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 text-yellow-500 fill-current`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 .25l2.42 6.187 6.604.597c.414.037.583.546.272.818l-5.063 3.916 1.95 6.468c.122.406-.315.752-.662.49L10 16.286l-5.524 3.232c-.347.203-.784-.084-.662-.49l1.95-6.468-5.063-3.916c-.311-.271-.142-.781.272-.818l6.604-.597L10 .25z"
      clipRule="evenodd"
    />
  </svg>
);

const RatingStar = ({ totalStars, className }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className={`flex ${className}`}>
      {[...Array(totalStars).keys()].map((index) => (
        <YellowStar
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default RatingStar;
