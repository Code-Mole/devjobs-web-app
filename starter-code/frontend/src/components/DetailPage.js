import React from "react";
import "./DetailPage.css";
import Data from "../data.js";

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
    <>
      <div className="detailed__container">
        <div className="card__detailed">
          <div className="detailed__container__top">
            <div className="detailed__img__container" style={{backgroundColor: selectedItem.logoBackground}}>{selectedItem.logo}</div>

            <div className="text__logo">
              <div>
                <h3>{selectedItem.company}</h3>
                <a id="link" href={selectedItem.website}>
                  Scoot.com
                </a>
              </div>
              <a href={selectedItem.website}>
                <button>company Site</button>
              </a>
            </div>
          </div>
          <div className="detailed__container__botton">
            <div className="Scoot__text__content">
              <div>
                <span>{selectedItem.postedAt} . </span>
                <span>{selectedItem.contract}</span>
                <h2>{selectedItem.position}</h2>
                <p id="location">{selectedItem.location}</p>
              </div>

              <a href={selectedItem.apply}>
                <button>Apply Now</button>
              </a>
            </div>
            <div className="card__info__detailed">
              <p>{selectedItem.description}</p>
              <h3>Requirements</h3>
              <p>{selectedItem.requirements.content}</p>
              <ul>
                <li>{selectedItem.requirements.items[0]}</li>
                <li>{selectedItem.requirements.items[1]}</li>
                <li>{selectedItem.requirements.items[2]}</li>
                <li>{selectedItem.requirements.items[3]}</li>
              </ul>
              <h3>What you will do</h3>
              <p>{selectedItem.role.content}</p>
              <ol>
                <li>{selectedItem.role.items[0]}</li>
                <li>{selectedItem.role.items[1]}</li>
                <li>{selectedItem.role.items[2]}</li>
                <li>{selectedItem.role.items[3]}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__left">
          <h3>{selectedItem.position}</h3>
          <p>So Digital Inc.</p>
        </div>
        <div className="card__footer__right">
          <a href={selectedItem.apply}>
            <button>Apply Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
