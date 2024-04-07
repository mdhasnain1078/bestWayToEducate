import React, { useState, useEffect } from "react";
import ContinueButton from "../components/ContinueButton";
import LoaderLine from "../components/LoaderLine";
import BackButton from "../components/BackButton";
import ProfInfo from "./ProfInfo";
import InterestInfoPage from "./InterestInfoPage";
import IntroPageOne from "./IntroPageOne";
import SubjectExperience from "./SubjectExperience";
import IntroPageTwo from "./IntroPageTwo";
import { useNavigate } from "react-router-dom";
import { IsPageProvider } from "../context";

let i = 0;

const Homepage = () => {
  const [progress, setProgress] = useState(10);
  const [page, setPage] = useState(<ProfInfo />);
  const [isPage, setIsPage] = useState(false);
  const pages = [
    <ProfInfo />,
    <InterestInfoPage />,
    <IntroPageOne />,
    <SubjectExperience />,
    <IntroPageTwo />,
  ];
  const progressPercent = [10, 20, 30, 50, 100];

  const navigate = useNavigate();

  useEffect(() => {
    i = 0;
  }, []);

  const updateIsPageTrue = () => {
    setIsPage(true);
  };

  const updateIsPageFalse = () => {
    setIsPage(false);
  };

  const increaseProgress = () => {
    if (progress < 100) {
      i += 1;
      setProgress(progressPercent[i]);
      setPage(pages[i]);
    } else {
      navigate("/LoadingPage");
    }
  };

  const decreaseProgress = () => {
    if (progress > 10) {
      i -= 1;
      setProgress(progressPercent[i]);
      setPage(pages[i]);
    }
  };

  return (
    <IsPageProvider value={{ updateIsPageFalse, updateIsPageTrue }}>
      <div className="dark:bg-darkBackground h-full">
        {/* Loader */}
        <div className="flex justify-center items-center mx-5 sm:mx-32 my-4 gap-2 dark:text-darkText">
          {progress > 10 && <BackButton callBack={decreaseProgress} />}
          <LoaderLine progress={progress} />
        </div>
        {/* Pages */}
        <div className="flex justify-center dark:bg-darkBackground">{page}</div>

        {/* Continue Button */}
        <div className="flex justify-center items-center py-5 dark:bg-darkBackground">
          <ContinueButton isContinue={isPage} callBack={increaseProgress} />
        </div>
      </div>
    </IsPageProvider>
  );
};

export default Homepage;
