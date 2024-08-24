import React from 'react'
import "./HomePage.css"
import Heading from "./Heading.js"
import Card from "./Card.js"

function HomePage() {
  return (
    <div className="container">
        <Heading />
        <Card/>
    </div>
  )
}

export default HomePage