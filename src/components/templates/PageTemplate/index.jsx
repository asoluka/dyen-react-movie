import React from "react";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <div className="main">
      <div className="container">
        <header>{header}</header>
        {children}
        <footer>{footer}</footer>
      </div>
    </div>
  );
};
