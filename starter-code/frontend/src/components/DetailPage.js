import React from "react";
import "./DetailPage.css";
import Data from "../data.json";

function DetailPage(props) {
  const item = Data.map((obj) => {
    if (obj.id === props.id) {
      return obj;
    }
  });
  if (!item[0]) {
    return <div>Item not found</div>;
  }

  const selectedItem = item[0];
  return (
    <div className="detailed__container" >
      <div className="card">
      <div className="detailed__container__top">

        <img src={selectedItem.logo} alt={selectedItem.company} />

        <div className="logo__info">
          <h2>{selectedItem.company}</h2>
         <button>company Site</button>
        </div>
      </div>
      <div className="detailed__container__botton">

        <div className="text__item1">
        <span>{selectedItem.postedAt} . </span>
          <span>{selectedItem.contract}</span>
          <h3>{selectedItem.position}</h3>
          <p id="location">{selectedItem.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
        <div className="card__info">
          <p>{selectedItem.description}</p>
          <h1>Requirements</h1>
          <p>{selectedItem.requirements.content}</p>
          <ul>
            <li>{selectedItem.requirements.items[0]}</li>
            <li>{selectedItem.requirements.items[1]}</li>
            <li>{selectedItem.requirements.items[2]}</li>
            <li>{selectedItem.requirements.items[3]}</li>
          </ul>
          <h1>What you will do</h1>
          <p>{selectedItem.role.content}</p>
          <ol>
            <li>{selectedItem.role.items[0]}</li>
            <li>{selectedItem.role.items[1]}</li>
            <li>{selectedItem.role.items[2]}</li>
            <li>{selectedItem.role.items[3]}</li>

          </ol>
        </div>
      </div>

      <div className="card__footer">
       <div className="card__footer__left">
       <h3>{selectedItem.position}</h3>
       <p>So Digital Inc.</p>
       </div>
       <div className="card__footer__right">
       <button>Apply Now</button>
      </div>
      </div>
    </div>
  );
}

export default DetailPage;
