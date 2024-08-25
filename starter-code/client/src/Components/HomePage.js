import React from "react";
import "./HomePage.css";
import Heading from "./Heading.js";
import Cards from "./Cards.js";

function HomePage() {
  return (
    <div className="container">
      <Heading />
      <Cards />
    </div>
  );
}

export default HomePage;
