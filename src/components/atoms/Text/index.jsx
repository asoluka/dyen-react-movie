import React from "react";

export const Text = ({ className, count, children, type }) => {
  if (type === "h1") {
    return (
      <h1 className={className}>
        {count} {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2 className={className}>
        {count} {children}
      </h2>
    );
  }

  return (
    <p className={className}>
      {count} {children}
    </p>
  );
};

const DefaultExport = () => {
  return <>Default Export</>;
};

export default DefaultExport;
