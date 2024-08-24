import React, { useState } from "react";
import "./Heading.css";
import logoBg from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import Search from "./Search.js";

function Heading() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="container">
        <div className="logo">
          <img id="headingBgImg" src={logoBg} alt="bgimage" />
        </div>
        <div className="logo__mode__container">
          <div className="logo__container">
            <img src={logo} alt="logoimage" />
          </div>
          <div className="dark__light__mode__container">
            <img src={sun} alt="sun" />
            {toggle ? (
              <div onClick={() => setToggle(!toggle)} className="toggle__icon">
                {" "}
                <ToggleOnIcon />
              </div>
            ) : (
              <div onClick={() => setToggle(!toggle)} className="toggle__icon">
                {" "}
                <ToggleOffIcon id="try" />
              </div>
            )}
            <img src={moon} alt="moon" />
          </div>
        </div>
      </div>
      <Search />
    </>
  );
}

export default Heading;
