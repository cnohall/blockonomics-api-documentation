import React, { useState } from "react";
import Button from '../../atoms/Button';

const ButtonRow = ({ buttonStrings, isButtonSelectedStates, onButtonClick }) => {


  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {buttonStrings.map((buttonLabel, index) => (
        <Button key={index} isSelected={isButtonSelectedStates[index]} onClick={() => onButtonClick(index)}>
          {buttonLabel}
        </Button>
      ))}
    </div>
  );
};

export default ButtonRow;
