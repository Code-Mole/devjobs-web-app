import React, { useState } from "react";
import "./Card.css";
import Data from "../data.js";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Card() {
  // STATES
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [visibleCount, setVisibleCount] = useState(9); 

  // ROUTER
  const navigate = useNavigate();

  // A FUNCTION FOR ROUTING CARD AND DETAILED CARD
  const handleCardClick = (id) => {
    console.log("Navigating to details for ID:", id);
    navigate(`/details/${id}`); 
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

    // Handle Load More Functionality
    const handleLoadMore = () => {
      setVisibleCount((prevCount) => prevCount + 3); 
    };

  return (
    <>
      <Search
        onSearchChange={handleSearchChange}
        handleLocationSearch={handleLocationSearch}
      />
      <div className="card__container">
        {filteredData.slice(0, visibleCount).map((item, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(item.id)}
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
        {visibleCount < filteredData.length && (
          <button onClick={handleLoadMore} >
            Load more
          </button>
        )}
      </div>
    </>
  );
}

export default Card;
