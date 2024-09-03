import React, { useState } from "react";
import "./Card.css";
import Data from "../data.js";
import Search from "./Search";

function Card() {
  const [clicked, setclicked] = useState(true);
  // const handleClick = () => {
  //   console.log("clicked");

  // }

  return (
    <>
      <Search />
      <div className="card__container">
        {Data.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div
                style={{
                  backgroundColor: item.logoBackground,
                  borderRadius: "1rem",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  bottom: "35px",
                }}
              >
                {item.logo}
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
        <br />
        <button>Load more</button>
      </div>
    </>
  );
}

export default Card;
