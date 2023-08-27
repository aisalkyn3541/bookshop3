import React from "react";
import Hero from "./Hero";
import Books from "./Books";
import NewBooks from "./NewBooks";
import Genres from "./Genres";
import About from "./About";

const HomePage = () => {
  return (
    <div id="homePage">
      <Hero />
      <Genres />
      <NewBooks />
      <Books />
      <About />
    </div>
  );
};

export default HomePage;
