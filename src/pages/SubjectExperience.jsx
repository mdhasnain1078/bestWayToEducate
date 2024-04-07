import React, { useEffect } from "react";
import HeadTile from "../components/HeadTile";
import OptionContainer from "../components/OptionContainer";
import { useIsPage } from "../context";

const SubjectExperience = () => {
  const path = "src/assets/";
  const options = [
    {
      id: 1,
      imageSrc: `${path}/icons/arithmatic.svg`,
      title: "Arithmetic",
      isClicked: false,
      descriptiveText: "Introductory",
    },
    {
      id: 2,
      imageSrc: `${path}/icons/arithmatic.svg`,
      title: "Basic Algebra",
      isClicked: false,
      descriptiveText: "Foundational",
    },
    {
      id: 3,
      imageSrc: `${path}/icons/intermadiat.svg`,
      title: "Intermediate Algebra",
      isClicked: false,
      descriptiveText: "Intermediate",
    },
    {
      id: 4,
      imageSrc: `${path}/icons/calculus.svg`,
      title: "Calculus",
      isClicked: false,
      descriptiveText: "Advanced",
    },
    // Add more options as needed
  ];

  const { updateIsPageFalse } = useIsPage();
  useEffect(() => {
    updateIsPageFalse();
  }, []);

  return (
    <div className="w-full flex justify-center flex-col items-center mx-4">
      <HeadTile
        title={"What is your math comfort level"}
        subTitle={
          "Choose the highest level you feel confident in -- you can always adjust later."
        }
      />
      <div className="w-full sm:w-[60%] lg:w-[50%]">
        <OptionContainer
          imageClass={"h-12 w-24 mb-4"}
          options={options}
          className={"grid sm:grid-cols-2 lg:grid-cols-4 gap-6"}
          isHorizontalContant={true}
        />
      </div>
    </div>
  );
};

export default SubjectExperience;
