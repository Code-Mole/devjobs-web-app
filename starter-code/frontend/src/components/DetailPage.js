import React from "react";
import "./DetailPage.css";
import Data from "../data.js";
import { useNavigate, useParams } from "react-router-dom";

function DetailPage() {
  // ROUTOR
  const navigate = useNavigate();
  const { id } = useParams();

  // ROUTE BACK TO CARD PAGE
  const handlegoBack = () => {
    navigate(-1);
  };

  // GET DATA FROM DATA.JS AND MARCH IT TO THE CARD

  const selectedItem = Data.find((obj) => obj.id === Number(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <div onClick={handlegoBack} className="detailed__container">
        <div className="card__detailed">
          <div className="detailed__container__top">
            <div
              className="detailed__img__container"
              style={{ backgroundColor: selectedItem.logoBackground }}
            >
              {selectedItem.logo}
            </div>

            <div className="text__logo">
              <div>
                <h3>{selectedItem.company}</h3>
                <a id="link" href={selectedItem.website}>
                  {selectedItem.company}.com
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
                {selectedItem.requirements.items.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <h3>What you will do</h3>
              <p>{selectedItem.role.content}</p>
              <ol>
                {selectedItem.role.items.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
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
