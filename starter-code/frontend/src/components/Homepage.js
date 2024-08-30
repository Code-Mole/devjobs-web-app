import React from 'react'
import "./Homepage.css"
import Headling from './Headling.js'
import Search from './Search.js'
import Cards from './Cards.js'

function Homepage() {
  return (
    <div className='homepage__container'>
        <Headling/>
        <Search />
        <Cards />
    </div>
  )
}

export default Homepage