import React from "react";
import Burgers from "../components/home/Burgers";
import Drinks from "../components/home/Drinks";
import Hero from "../components/home/Hero";
import Sides from "../components/home/Sides";
import Navbar from "../components/Navbar";
import Team from "../components/home/Team";

const Home = (props) => {
  return (
    <div>
      <Navbar isUserNav />
      <Hero />
      <Burgers />
      <Sides />
      <Drinks />
      <Team />
    </div>
  );
};

export default Home;
