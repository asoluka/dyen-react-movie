import React from "react";
import { Input } from "../../atoms";
import { Footer, NavBar } from "../../molecules";
import { MovieList } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";

export const HomePage = () => {
  return (
    <PageTemplate header={<NavBar />} footer={<Footer />}>
      <div className="content h-50">
        <Input type="search" />

        <div className="mt-5">
          {[
            {
              img: "https://cdn.pixabay.com/photo/2019/04/14/14/09/fantasy-4126847_960_720.jpg",
              title: "The woman that kills..",
            },
            {
              img: "https://cdn.pixabay.com/photo/2014/08/22/09/36/auto-424119_960_720.jpg",
              title: "The man that heals..",
            },
          ].map((elem, idx) => (
            <MovieList key={idx} img={elem.img} title={elem.title} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};
