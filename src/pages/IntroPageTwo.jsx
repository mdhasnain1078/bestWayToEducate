import React, { useEffect } from "react";
import IntroDescriptive from "../components/IntroDescriptive";
import { useIsPage } from "../context";

const IntroPageTwo = () => {
  const { updateIsPageTrue } = useIsPage();
  useEffect(() => {
    updateIsPageTrue();
  }, []);
  const description =
    "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem-solving situations.";

  return (
    <div className="mt-16 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-32">
      <IntroDescriptive
        imgPath={"./assets/image/greetingCartoon.png"}
        startVisible={true}
        classNameForDescription={"italic"}
        authorname={"- Jacob S."}
        title={"You're on your way!"}
        description={`"${description}"`}
      />
    </div>
  );
};

export default IntroPageTwo;
