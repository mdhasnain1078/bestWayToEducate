import React, { useEffect } from "react";
import HeadTile from "../components/HeadTile";
import OptionContainer from "../components/OptionContainer";
import { useIsPage } from "../context";

const ProfInfo = () => {
  const path = "src/assets/image";
  const options = [
    {
      id: 1,
      imageSrc: `${path}/studentBoy.png`,
      title: "Student",
      isClicked: false,
      descriptiveText: "or soon to be enrolled",
    },
    {
      id: 2,
      imageSrc: `${path}/professionalBoy.png`,
      title: "Professional",
      isClicked: false,
      descriptiveText: "persuaing a creer",
    },
    {
      id: 3,
      imageSrc: `${path}/mom.png`,
      title: "Parent",
      isClicked: false,
      descriptiveText: "of a school-age child",
    },
    {
      id: 4,
      imageSrc: `${path}/grandfather.png`,
      title: "LifeLong Learner",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 5,
      imageSrc: `${path}/teacherGirl.png`,
      title: "Teacher",
      isClicked: false,
      descriptiveText: "",
    },
    {
      id: 6,
      imageSrc: `${path}/boyOther.png`,
      title: "Other",
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
          title={"Which describes you best?"}
          subTitle={"This will help us personalize your experience."}
        />
        <div className="w-full">
          <OptionContainer
            imageClass={"h-8 w-8 mr-4 flex"}
            options={options}
            className={"flex flex-wrap justify-center gap-4"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfInfo;
