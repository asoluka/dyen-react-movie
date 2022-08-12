import React from "react";
import { Text } from "../../atoms";

export const NavBar = () => {
  return (
    <div className="nav d-flex align-items-center content-space-between">
      <div className="bold">Intecko Stodio</div>
      <div className="d-flex">
        <Text className="list-items grey active">Home</Text>
        <Text className="list-items grey">Themes</Text>
        <Text className="list-items grey">Products</Text>
        <Text className="list-items grey">Abouts</Text>
        <Text className="list-items grey">Contact Us</Text>
      </div>
      <div className="hamburger d-flex align-items-center content-center">
        <div className="">
          <div className="hamburger-bars"></div>
          <div className="hamburger-bars"></div>
        </div>
      </div>
    </div>
  );
};
