import React from "react";
import { FiCheck } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";
import { useColorMode } from "@docusaurus/theme-common";
import { DOCUSAURUS_COLOR_MODES } from "@site/src/helpers/constants";

const CopyToClipboardButton = ({ content, hasMouseEnteredCodeBlock }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === DOCUSAURUS_COLOR_MODES.DARK;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const backgroundColor = isDarkMode ? "#282A36" : "#F8F8F8";

  return (
    <CopyToClipboard text={content}>
      <div>
        {isCopied ? (
          <FiCheck
            className="copy-icon"
            style={{
              opacity: hasMouseEnteredCodeBlock ? 1 : 0,
              color: "green",
              backgroundColor,
            }}
            onClick={handleCopy}
          />
        ) : (
          <MdOutlineContentCopy
            className="copy-icon"
            style={{
              opacity: hasMouseEnteredCodeBlock ? 0.5 : 0,
              color: isDarkMode ? "white" : "black",
              backgroundColor,
            }}
            onClick={handleCopy}
          />
        )}
      </div>
    </CopyToClipboard>
  );
};

export default CopyToClipboardButton;
