import React from "react";
import "./Homepage.css";
import Headling from "./Headling.js";
import Card from "./Card.js";

function Homepage({ handleToggle }) {
  return (
    <div className="homepage__container">
      <Headling handleToggle={handleToggle} />
      <Card id={1} />
    </div>
  );
}

export default Homepage;
