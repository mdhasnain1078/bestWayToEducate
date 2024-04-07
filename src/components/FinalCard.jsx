import React from "react";

const FinalCard = ({ imageUrl, title, description, isPopular }) => {
  return (
    <div className="w-full lg:w-[350px] h-auto sm:h-[30%]">
      {isPopular ? (
        <div className="bg-lightCircularIndicator text-[10px] font-bold px-2 py-1 rounded-2xl justify-center relative left-[50%] transform -translate-x-1/2 top-3 inline-block min-w-max dark:text-darkText">
          MOST POPULAR
        </div>
      ) : (
        <div className=" mt-[1.67rem]"></div>
      )}
      <div className="bg-lightBackground border border-lightGray rounded-md overflow-hidden flex flex-col md:flex-row justify-center items-center p-6 dark:bg-darkBackground dark:border-darkPrimary">
        <div>
          <p className="text-lightText text-xs sm:text-base md:text-left text-center font-medium dark:text-darkText">
            <span className="font-bold inline">{title}</span> {description}
          </p>
        </div>
        <div className="w-[40%] md:w-full flex justify-center items-center">
          <img src={imageUrl} alt="Card" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default FinalCard;
