import React from "react";
import Burgers from "../components/home/Burgers";
import Drinks from "../components/home/Drinks";
import Hero from "../components/home/Hero";
import Sides from "../components/home/Sides";
import Navbar from "../components/Navbar";

const Home = (props) => {
  return (
    <div>
      <Navbar isUserNav />
      <Hero />
      <Burgers />
      <Sides />
      <Drinks />
    </div>
  );
};

export default Home;
