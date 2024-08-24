import React from "react";
import "./Card.css";
import Data from "../data.json";
import logo from "../assets/logos/scoot.svg"

function Card() {
  return (
    <div className="card__container">
      {Data.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={logo} alt="logo" />
            <div className="card__info">
              <span>{item.postedAt} . </span>
              <span>{item.contract}</span>
              <h3>{item.position}</h3>
              <p>{item.company}</p>
              <p id="location">{item.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
