import React, { useState } from 'react'
import "./Headling.css"
import Data from "../data.js"
import SearchIcon from "../assets/desktop/icon-search.svg";
import LocationIcon from "../assets/desktop/icon-location.svg";

function Search() {
  const [search,setSearch] = useState("");
  console.log(search);
  return (
    <div className="search__container">
    <div id='fullwidth' className="search__input">
      <img src={SearchIcon} alt="search icon" className="search__icon" />
      <input
        value={search}
        type="text"
        placeholder="Filter by title, companies, expertise..."
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
    <div id='OnlyOnMobileLocation' className="search__input">
      <img src={LocationIcon} alt="location icon" className="search__icon" />
      <input type="text" placeholder="Filter by location…" />
    </div>
    <div id='OnlyOnMobileCheckbox' className="search__input search__checkbox">
      <input type="checkbox" />
      <h4>Full Time Only</h4>
      <button>Search</button>
    </div>
  </div>
  )
}

export default Search