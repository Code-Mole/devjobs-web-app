import "./Headling.css";
import React, { useState } from "react";
import logoBg from "../assets/desktop/bg-pattern-header.svg";
import logo from "../assets/desktop/logo.svg";
import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

function Headling({ toggleTheme }) {
  // STATES
  const [toggle, setToggle] = useState(false);
  // FUNCTION FOR HANDLING TOGGLE
  const handleToggleClick = () => {
    setToggle(!toggle);
    toggleTheme();
  };
  return (
    <div className="heading__container">
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
            <div onClick={handleToggleClick} className="toggle__icon">
              {" "}
              <ToggleOnIcon />
            </div>
          ) : (
            <div onClick={handleToggleClick} className="toggle__icon">
              {" "}
              <ToggleOffIcon />
            </div>
          )}
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
}

export default Headling;
