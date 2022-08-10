import React, { useState } from "react";
import { Input } from "../../atoms";
import { Footer, NavBar } from "../../molecules";
import { MovieList } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";
import movieData from "./data";

export const HomePage = () => {
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <PageTemplate header={<NavBar />} footer={<Footer />}>
      {console.log(filter)}
      <div className="content h-50">
        <Input type="search" onChange={handleInputChange} />

        <div className="mt-5">
          {movieData
            .filter((elem) =>
              elem.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((elem, idx) => {
              return <MovieList key={idx} img={elem.img} title={elem.title} />;
            })}
        </div>
      </div>
    </PageTemplate>
  );
};
