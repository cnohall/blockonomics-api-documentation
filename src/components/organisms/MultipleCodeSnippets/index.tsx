import React, { useState } from "react";
import ButtonRow from "../../molecules/ButtonRow";
import { MULTIPLE_CODE_SNIPPETS_BUTTON_STRINGS_BY_VARIANT, MULTIPLE_CODE_SNIPPETS_CONTENT_STRINGS_BY_VARIANT, MULTIPLE_CODE_SNIPPETS_LANGUAGES } from "@site/src/helpers/constants";

const MultipleCodeSnippets = ({ variant }) => {
  
  if (!variant) {
    console.error(`No variant provided`);
    return null;
  }

  const buttonStrings = MULTIPLE_CODE_SNIPPETS_BUTTON_STRINGS_BY_VARIANT[variant];

  const [isButtonSelectedStates, setIsButtonSelectedStates] = useState(() => {
    const initialSelectedState = new Array(buttonStrings.length).fill(false);
    initialSelectedState[0] = true; // Set the first button to be selected by default
    return initialSelectedState;
  });

  const handleButtonClick = (index) => {
    const newSelectedStates = new Array(buttonStrings.length).fill(false);
    newSelectedStates[index] = true;
    setIsButtonSelectedStates(newSelectedStates);
  };

  const renderContent = () => {
    const contentStrings = MULTIPLE_CODE_SNIPPETS_CONTENT_STRINGS_BY_VARIANT[variant];
    const languageValues = Object.values(MULTIPLE_CODE_SNIPPETS_LANGUAGES);
    const index = isButtonSelectedStates.findIndex((isSelected) => isSelected);
    const selectedLanguage = languageValues[index];
    return contentStrings[selectedLanguage];
  };

  return (
    <div>
      <ButtonRow buttonStrings={buttonStrings} isButtonSelectedStates={isButtonSelectedStates} onButtonClick={handleButtonClick} />
      {renderContent()}
    </div>
  )
};

export default MultipleCodeSnippets;
