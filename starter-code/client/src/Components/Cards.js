import React,{ useState } from 'react'
import Detailed from "./Detailed.js";
import Card from './Card.js';

function Cards() {
    const [clicked, setclicked] = useState(false);
  return (
    <div className='cards__container'>
      {
       clicked?<div  onClick={() => setclicked(!clicked)}><Detailed/></div>:<div  onClick={() => setclicked(!clicked)}><Card/></div>
      }
    </div>
  )
}

export default Cards