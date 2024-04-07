import React from "react";
import FinalCard from "../components/FinalCard";
import HeadTile from "../components/HeadTile";

const FinalPage = () => {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen dark:bg-darkBackground h-full">
      <HeadTile
        title={"Learning paths based on your answers"}
        subTitle={"Choose one to get started. You can switch anytime"}
      />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mx-2">
        <FinalCard
          imageUrl={"src/assets/image/unlockPath.png"}
          title={"Foundational Math"}
          description={
            "Build your foundational skills in algebra, geometry, and probability."
          }
          isPopular={true}
        />
        <FinalCard
          imageUrl={"src/assets/image/unlockPath.png"}
          title={"Mathematical Thinking"}
          description={
            "Build your foundational skills in algebra, geometry, and probability."
          }
        />
      </div>
    </div>
  );
};

export default FinalPage;
