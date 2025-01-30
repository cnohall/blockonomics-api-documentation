import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import ButtonRow from "../../molecules/ButtonRow";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MULTIPLE_CODE_SNIPPETS_BUTTON_STRINGS_BY_VARIANT, MULTIPLE_CODE_SNIPPETS_CONTENT_STRINGS_BY_VARIANT, MULTIPLE_CODE_SNIPPETS_LANGUAGES, MULTIPLE_CODE_SNIPPETS_VARIANTS } from "@site/src/helpers/constants";

const MultipleCodeSnippets = ({ variant }) => {

  const variantExists = Object.values(MULTIPLE_CODE_SNIPPETS_VARIANTS).includes(variant);

  if (!variantExists) {
    console.error(`Invalid variant: ${variant}`);
    return null;
  }
  
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
    const selectedButtonLanguage = buttonStrings[isButtonSelectedStates.findIndex((isSelected) => isSelected)];
    return contentStrings[selectedButtonLanguage];
  };

  const selectedLanguage = MULTIPLE_CODE_SNIPPETS_LANGUAGES[Object.keys(MULTIPLE_CODE_SNIPPETS_LANGUAGES)[isButtonSelectedStates.findIndex((isSelected) => isSelected)]];
  return (
    <div>
      <ButtonRow buttonStrings={buttonStrings} isButtonSelectedStates={isButtonSelectedStates} onButtonClick={handleButtonClick} />
      <SyntaxHighlighter language={selectedLanguage} style={docco}>
        {renderContent()}
      </SyntaxHighlighter>
    </div>
  )
};

export default MultipleCodeSnippets;
