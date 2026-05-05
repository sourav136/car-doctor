import React from "react";
import HeroCarousel from "./components/HeroCarousel";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Team from "./components/Team";
import CoreFeatures from "./components/CoreFeatures";

const Home = () => {
  return (
    <>
      <HeroCarousel/>
      <AboutUs title={"Get More Info"} href={"/about"}/>
      <Services/>
      <Team/>
      <CoreFeatures/>
    </>
  );
};

export default Home;
