import React, { useState } from "react";
import { NavBar } from "../../molecules";
import { Gallery } from "../../organisms/Gallery";
import { HeroSection } from "../../organisms/HeroSection";
import { PageTemplate } from "../../templates/PageTemplate";

export const HomePage = () => {
  const [images, setImages] = useState([
    <div className="bg-1"></div>,
    <div className="bg-2"></div>,
    <div className="bg-3"></div>,
  ]);

  return (
    <PageTemplate header={<NavBar />}>
      <HeroSection />

      <Gallery
        title="Our Last Projects"
        images={images}
        next={setImages}
        prev={setImages}
      />
    </PageTemplate>
  );
};
