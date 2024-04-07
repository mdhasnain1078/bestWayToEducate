import React, { useEffect, useState } from "react";
import CircularProgress from "../components/CircularProgress";
import { useNavigate } from "react-router-dom";

let i = 0;

const LoadingPage = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value < 100) {
      const interval = setInterval(() => {
        i++;
        setValue(i);
      }, 50);

      return () => clearInterval(interval);
    }
    navigate("/FinalPage");
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-3 dark:bg-darkBackground">
      <CircularProgress percentage={value} />
      <h1 className="text-base sm:text-lg lg:text-xl font-bold mt-2 text-center dark:text-darkText">
        Finding learning path recommendations for you based on your responses
      </h1>
    </div>
  );
};

export default LoadingPage;
