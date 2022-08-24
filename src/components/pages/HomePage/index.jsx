import React, { useState } from "react";
import { NavBar } from "../../molecules";
import { PageTemplate } from "../../templates/PageTemplate";

export const HomePage = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInput = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(input);
  };

  return (
    <PageTemplate header={<NavBar />}>
      <>
        <input
          onChange={handleInput}
          name="firstName"
          value={input.firstName}
        />
        <input onChange={handleInput} name="lastName" value={input.lastName} />
        <button onClick={handleSubmit}>Submit</button>
      </>
    </PageTemplate>
  );
};
