import React, { useEffect } from "react";
import HeadTile from "../components/HeadTile";
import OptionContainer from "../components/OptionContainer";
import { useIsPage } from "../context";

const InterestInfoPage = () => {
  const path = "./assets/image";
  const options = [
    {
      id: 1,
      imageSrc: `${path}/learningSkill.png`,
      title: "Learning specific skill to advance my career",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 2,
      imageSrc: `${path}/exploring.png`,
      title: "Exploring new tops i'am interested in",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 3,
      imageSrc: `${path}/calculating.png`,
      title: "Refreshing my math foundation",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 4,
      imageSrc: `${path}/brain.png`,
      title: "Exercising my brain to stay sharp",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 5,
      imageSrc: `${path}/somethingElse.png`,
      title: "Sothing else",
      isClicked: false,
      descriptiveText: "",
    },
    // Add more options as needed
  ];

  const { updateIsPageFalse } = useIsPage();
  useEffect(() => {
    updateIsPageFalse();
  }, []);

  return (
    <div className="w-full flex justify-center flex-col items-center mx-4">
      <div className="w-full sm:w-[80%] max-w-3xl">
        <HeadTile
          title={"Which are you most interested in"}
          subTitle={
            "Choose just one. This will help us get you started (but won't limit your experience)."
          }
        />
        <div className="w-full">
          <OptionContainer
            imageClass={"h-8 w-8 mr-4"}
            options={options}
            className={"flex flex-wrap justify-center gap-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default InterestInfoPage;
