import React from "react";
import "./Headling.css";
import LocationIcon from "../assets/desktop/icon-location.svg";

function PopUp({ handleVisibility }) {
  return (
    <div className="search__popup__container" onClick={()=>handleVisibility()}>
      <div
        onClick={(e) => e.stopPropagation()}
        onClose={handleVisibility}
        className="search__popup"
      >
        <div className="search__input">
          <img
            src={LocationIcon}
            alt="location icon"
            className="search__icon"
          />
          <input type="text" placeholder="Filter by location…" />
        </div>
        <div id="hideBorder" className="search__input search__checkbox">
          <input type="checkbox" />
          <h4>Full Time Only</h4>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
