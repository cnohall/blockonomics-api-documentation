import { useColorMode } from "@docusaurus/theme-common";
import { DOCUSAURUS_COLOR_MODES } from "@site/src/helpers/constants";
import React from "react";
import { darkButtonStyle, lightButtonStyle } from "./styles";

const Button = ({ children, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === DOCUSAURUS_COLOR_MODES.DARK;

  const buttonStyle = isDarkMode
    ? darkButtonStyle(isSelected)
    : lightButtonStyle(isSelected);

  // Hover effects
  const buttonHoverStyle = {
    transform: "scale(1.05)",
  };

  return (
    <button
      style={{
        ...buttonStyle,
        ...(isHovered && buttonHoverStyle),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
