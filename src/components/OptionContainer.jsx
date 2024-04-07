import React, { useState } from "react";
import OptionCard from "./OptionsCard";
import { useIsPage } from "../context";

const path = "src/assets/image";

const OptionContainer = ({
  options,
  className,
  imageClass,
  isHorizontalContant,
}) => {
  // Create a state to manage the options
  const [updatedOptions, setUpdatedOptions] = useState(options);
  const { updateIsPageTrue } = useIsPage();

  const handleCardClick = (id) => {
    // Update the options state based on the clicked card id
    const newOptions = options.map((option) => ({
      ...option,
      isClicked: option.id === id,
    }));
    setUpdatedOptions(newOptions);
    updateIsPageTrue();
  };

  return (
    <div className={className}>
      {/* Render OptionCard components with updatedOptions */}
      {updatedOptions.map((option) => (
        <OptionCard
          key={option.id}
          id={option.id}
          imageSrc={option.imageSrc}
          title={option.title}
          descriptiveText={option.descriptiveText}
          handleCardClick={handleCardClick}
          isClicked={option.isClicked}
          imageClass={imageClass}
          isHorizontalContant={isHorizontalContant}
        />
      ))}
    </div>
  );
};

export default OptionContainer;
