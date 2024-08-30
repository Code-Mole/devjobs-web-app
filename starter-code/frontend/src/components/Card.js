import React from "react";
import "./Card.css";
import Data from "../data.json";
import Search from "./Search";

function Card() {
  const style = {
    backgroundColor: "red",
    height: "40px",
    width: "40px",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: "35px",
  }

  return (
    <>
    <Search/>
    <div className="card__container">
      {Data.map((item, index) => {
        return (
         
          <div className="card" key={index}>
            <div style={style}>
              {" "}
              {/* {item.logoBackground} */}
              <img src={item.logo} alt="logo" />
            </div>
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
      <button>Load more</button>
    </div>
    </>
  );
}

export default Card;
