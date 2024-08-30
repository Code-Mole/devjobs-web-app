import React from "react";
import "./Homepage.css";
import Headling from "./Headling.js";
import Cards from "./Cards.js";

function Homepage() {
  return (
    <div className="homepage__container">
      <Headling />
      <Cards />
    </div>
  );
}

export default Homepage;
