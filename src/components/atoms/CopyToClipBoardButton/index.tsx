import React from "react";
import { FiClipboard, FiCheck } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./styles.css";

const CopyToClipboardButton = ({ content, hasMouseEnteredCodeBlock }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <CopyToClipboard text={content}>
      <div>
        {isCopied ? (
          <FiCheck
            className="copy-icon"
            style={{
              opacity: hasMouseEnteredCodeBlock ? 1 : 0,
              color: "green",
            }}
            onClick={handleCopy}
          />
        ) : (
          <FiClipboard
            className="copy-icon"
            style={{
              opacity: hasMouseEnteredCodeBlock ? 0.5 : 0,
            }}
            onClick={handleCopy}
          />
        )}
      </div>
    </CopyToClipboard>
  );
};

export default CopyToClipboardButton;
