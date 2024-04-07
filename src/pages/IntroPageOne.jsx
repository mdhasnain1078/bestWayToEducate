import React, { useEffect } from "react";
import IntroDescriptive from "../components/IntroDescriptive";
import { useIsPage } from "../context";

const IntroPageOne = () => {
  const { updateIsPageTrue } = useIsPage();
  useEffect(() => {
    updateIsPageTrue();
  }, []);
  return (
    <div className="mt-10 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-32">
      <IntroDescriptive
        startVisible={false}
        imgPath={"./assets/image/machine.png"}
        title={"You're in the right place"}
        description={
          "Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science."
        }
      />
    </div>
  );
};

export default IntroPageOne;
