import React from "react";

const Button = ({ children, isSelected, onClick }) => {
  const buttonStyle = isSelected
    ? {
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        borderRadius: "35px",
        fontSize: "1.25rem",
        fontWeight: "700",
        backgroundColor: "#40C381",
        color: "#ffffff",
        cursor: "pointer",
      }
    : {
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        borderRadius: "35px",
        fontSize: "1.25rem",
        fontWeight: "700",
        backgroundColor: "#D7EAE0",
        color: "#818C86",
        cursor: "pointer",
      };

  return <button style={buttonStyle} onClick={onClick}>{children}</button>;
};

export default Button;
