import React, { useState } from "react";
import "./Card.css";
import Data from "../data.js";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Card({ children, onClose }) {
  // STATES
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  // ROUTER
  const navigate = useNavigate();

  // A FUNCTION FOR ROUTING CARD AND DETAILED CARD
  const handleCardClick = (id) => {
    if (id === 1) {
      console.log("Card with ID 1 clicked");
      navigate(`/details`);
    } else {
      console.log("Card with ID", id, "clicked but navigation is disabled");
    }
  };

  // FUNCTIONS PASS TO SEARCH COMPONENT
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationSearch = (e) => {
    setSearchLocation(e.target.value);
  };

  // SEARCH ALGORITHM IMPLEMENTATION
  const filteredData = Data.filter((filt) => {
    const matchLocation = filt.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());
    const matchesCompanyTitle =
      filt.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      filt.position.toLowerCase().includes(searchQuery.toLowerCase());

    return matchLocation && matchesCompanyTitle;
  });

  return (
    <>
      <Search
        onSearchChange={handleSearchChange}
        handleLocationSearch={handleLocationSearch}
      />
      <div className="card__container">
        {filteredData.map((item, index) => {
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
