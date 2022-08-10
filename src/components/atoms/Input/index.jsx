import React from "react";

export const Input = ({ label, onChange, type }) => {
  if (type === "search") {
    return (
      <label htmlFor={label}>
        {label}
        <input id={label} type="search" onChange={onChange} />
      </label>
    );
  }

  return (
    <label htmlFor={label}>
      {label}
      <input id={label} type="text" onChange={onChange} />
    </label>
  );
};

const DefaultExport = () => {
  return <>Default Export</>;
};

export default DefaultExport;
