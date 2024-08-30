import React from "react";
import "./DetailPage.css";
import Data from "../data.json";

function DetailPage() {
  return (
    <div className="detailed__container">
      {Data.map((item, index) => {
        return (
          <div key={index} className="detailed__container__top">
            <img src={item.logo} alt="logo" />
          </div>
        );
      })}

      <div className="detailed__container__botton"></div>
    </div>
  );
}

export default DetailPage;
