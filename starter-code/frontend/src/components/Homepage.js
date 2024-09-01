import React from "react";
import "./Homepage.css";
import Headling from "./Headling.js";
import Cards from "./Cards.js";

function Homepage({handleToggle}) {
  return (
    <div className="homepage__container">
      <Headling handleToggle = {handleToggle}/>
      <Cards />
    </div>
  );
}

export default Homepage;
