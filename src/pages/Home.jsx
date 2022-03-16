import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Chexol from "../components/Chexol";
import Naushnik from "../components/Naushnik";
import Dotsnaushnik from "../components/DotsNaushnik";

const Home = () => {
  return (
    <>
      <Hero />
      <Chexol />
      <Naushnik />
      <Dotsnaushnik />
    </>
  );
};

export default Home;
