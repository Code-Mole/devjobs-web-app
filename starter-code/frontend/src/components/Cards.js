import React, { useState } from "react";
import Detailpage from "./DetailPage.js";
import Card from "./Card.js";
import "./Card.css";

function Cards() {
  const [clicked, setclicked] = useState(true);
  return (
    <div className="cards__container">
      {clicked ? (
        <div onClick={() => setclicked(!clicked)}>
          <Card />
        </div>
      ) : (
        <div onClick={() => setclicked(!clicked)}>
          <Detailpage id={1} />
        </div>
      )}
    </div>
  );
}

export default Cards;
