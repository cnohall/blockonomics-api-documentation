import React from "react";

const Button = ({ children, isSelected, onClick }) => {
  const buttonStyle = isSelected
    ? {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "35px",
        fontSize: "1rem",
        fontWeight: "700",
        backgroundColor: "#40C381",
        color: "#ffffff",
        cursor: "pointer",
      }
    : {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "35px",
        fontSize: "1rem",
        fontWeight: "500",
        backgroundColor: "#D7EAE0",
        color: "#818C86",
        cursor: "pointer",
      };

  return <button style={buttonStyle} onClick={onClick}>{children}</button>;
};

export default Button;
