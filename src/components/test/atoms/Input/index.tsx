import React from "react";

export default function Input({ children, color }) {
  return (
    <input
      style={{
        backgroundColor: color,
        borderRadius: "2px",
        color: "#fff",
        padding: "0.2rem",
      }}
    >
      {children}
    </input>
  );
}
