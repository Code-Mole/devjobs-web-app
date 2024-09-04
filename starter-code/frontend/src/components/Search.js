import React, { useState } from "react";
import "./Headling.css";
import Data from "../data.js";
import SearchIcon from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";
import FilterIcon from "../assets/mobile/icon-filter.svg";
import PopUp from "./PopUp.js";

function Search({ onSearch, onSearchChange, handleLocationSearch }) {
  const [filter, setFilter] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFilterClick = () => {
    setFilter(!filter);
  };

  const handleVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div className="search__container">
        <div id="hideBorder" className="search__input">
          <img
            id="hidenForMobile"
            src={SearchIcon}
            alt="search icon"
            className="search__icon"
          />
          <input
            // value={search}
            type="text"
            placeholder="Filter by title, companies, expertise..."
            onChange={onSearchChange}
          />
        </div>
        <div className="search__icons__containtar">
          <img
            onClick={handleFilterClick}
            className="search__icon"
            src={FilterIcon}
            alt="filter icon"
          />
          <div id="searchIcon__background">
            <svg
              id="search__svg"
              width="20"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>

        {filter ? (
          <PopUp handleVisibility={handleVisibility} />
        ) : (
          <>
            <div id="OnlyOnMobileLocation" className="search__input">
              <img
                src={LocationIcon}
                alt="location icon"
                className="search__icon"
              />
              <input
                type="text"
                placeholder="Filter by location…"
                onChange={handleLocationSearch}
              />
            </div>
            <div
              id="OnlyOnMobileCheckbox"
              className="search__input search__checkbox"
            >
              <div id="search__checkbox__flex">
                <input type="checkbox" />
                <h4>Full Time <span>Only</span></h4>
              </div>
              <button>Search</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Search;
