import React from "react";
import { Text } from "../../atoms";
import "./index.css";

export const MovieList = ({ img, title }) => {
  return (
    <div className="movie">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <Text className="title">{title}</Text>
    </div>
  );
};
