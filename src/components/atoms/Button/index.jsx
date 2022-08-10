import React from "react";

export const Button = ({ onClick, children, type, borderRadius }) => {
  return (
    <button
      className={type}
      onClick={onClick}
      style={{
        borderRadius,
      }}
    >
      {children}
    </button>
  );
};
