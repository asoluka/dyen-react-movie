import React from "react";
import { Text } from "../../atoms";

export const Gallery = ({ title, images, next, prev }) => {
  return (
    <>
      <div className="container grid grid-column-3">
        {images.map((image, idx) => (
          <div key={idx}>{image}</div>
        ))}
      </div>

      <div className="container d-flex align-items-center content-space-between">
        <div>
          <Text className="bold">{title}</Text>
          <Text className="bold grey">01/05 Coffee Shop</Text>
        </div>
        <div className="d-flex">
          <div
            onClick={() =>
              prev([
                <div className="bg-1"></div>,
                <div className="bg-2"></div>,
                <div className="bg-3"></div>,
              ])
            }
            className="hamburger d-flex align-items-center content-center mr-2"
          >
            <div className="">prev</div>
          </div>
          <div
            onClick={() =>
              next([
                <div className="bg-4"></div>,
                <div className="bg-5"></div>,
                <div className="bg-6"></div>,
              ])
            }
            className="hamburger d-flex align-items-center content-center"
          >
            <div className="">next</div>
          </div>
        </div>
      </div>
    </>
  );
};
