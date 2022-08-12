import React from "react";
import { Text } from "../../atoms";

export const Gallery = ({ title, images }) => {
  return (
    <>
      <div className="container grid grid-column-3">
        {images.map((image) => image)}
      </div>

      <div className="container d-flex align-items-center content-space-between">
        <div>
          <Text className="bold">{title}</Text>
          <Text className="bold grey">01/05 Coffee Shop</Text>
        </div>
        <div className="d-flex">
          <div className="hamburger d-flex align-items-center content-center mr-2">
            <div className="">
              <div className="hamburger-bars"></div>
              <div className="hamburger-bars"></div>
            </div>
          </div>
          <div className="hamburger d-flex align-items-center content-center">
            <div className="">
              <div className="hamburger-bars"></div>
              <div className="hamburger-bars"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
