import React from "react";
import RatingStar from "./RatingStar";

const IntroDescriptive = ({
  title,
  description,
  startVisible = true,
  classNameForDescription,
  authorname,
  imgPath,
  ...props
}) => {
  // greetingCartoon.png;
  return (
    <div className="sm:grid grid-cols-2" {...props}>
      <div className=" col-span-1 flex flex-col justify-center items-center">
        <img src={imgPath} alt="" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center items-center text-center sm:text-start sm:items-start sm:my-0 my-2 dark:text-darkText">
        <h1 className="text-xl sm:text-3xl  font-bold mb-3">{title}</h1>
        {startVisible ? (
          <RatingStar totalStars={5} className={"my-4 gap-2"} />
        ) : null}
        <p className={`w-[58%] ${classNameForDescription}`}>{description}</p>
        <p className={`mt-5 ${classNameForDescription}`}>{authorname}</p>
      </div>
    </div>
  );
};

export default IntroDescriptive;
