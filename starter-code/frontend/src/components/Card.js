import React, { useEffect, useState } from "react";
import "./Card.css";
import Data from "../data.js";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Card({ children, onClose, handleBlurActive }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  // const [isBlurred, setIsBlurred] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (id === 1) {
      console.log("Card with ID 1 clicked");
      navigate(`/details`);
    } else {
      console.log("Card with ID", id, "clicked but navigation is disabled");
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // console.log(
    //   Data.filter((filt) => filt.company.toLowerCase().includes(searchQuery))
    // );
  };

  const handleLocationSearch = (e) => {
    setSearchLocation(e.target.value);
    console.log(
      Data.filter((f) => f.location.toLowerCase().includes(searchLocation))
    );
  };

  

  // useEffect(() => {
  //   if (isBlurred) {
  //     document.body.classList.add("blurred");
  //   } else {
  //     document.body.classList.remove("blurred");
  //   }
  // }, [isBlurred]);

  // const handleBlur = () => {
  //   setIsBlurred(!isBlurred);
  // };

  return (
    <>
      <Search
        onSearchChange={handleSearchChange}
        handleLocationSearch={handleLocationSearch}
      />
      <div className="card__container">
        {Data.filter(
          (filt) =>
            filt.company.toLowerCase().includes(searchQuery) ||
            filt.position.toLowerCase().includes(searchQuery)
        ).map((item, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick((item.id = 1))}
            >
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
