import React from 'react'
import "./Heading.css"
import SearchIcon from "../assets/desktop/icon-search.svg"
import LocationIcon from "../assets/desktop/icon-location.svg"

function Search() {
  return (
    <div className='search__container'>
        <div className='search__input'>
            <img src={SearchIcon} alt='search icon' className='search__icon'/>
            <input type="text" placeholder="Search for a book" />
        </div>
        <div className='search__input'>
        <img src={LocationIcon} alt='location icon' className='search__icon'/>
            <input type="text" placeholder="Search for a book" />
        </div>
        <div className='search__input'>
            <input type="checkbox" />
            <h4>Full Time Only</h4>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Search