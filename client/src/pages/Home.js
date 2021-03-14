import React, { useEffect } from "react";
import Burgers from "../components/home/Burgers";
import Drinks from "../components/home/Drinks";
import Hero from "../components/home/Hero";
import Sides from "../components/home/Sides";
import Navbar from "../components/Navbar";
import Team from "../components/home/Team";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/product";

const Home = ({ isAuthenticated, username, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar isUserNav isAuthenticated={isAuthenticated} username={username} />
      <Hero />
      <Burgers />
      <Sides />
      <Drinks />
      <Team />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.user?.username,
});

export default connect(mapStateToProps, { fetchProducts })(Home);
