import React, { useEffect } from "react";
import "./Container.sass";
import Select from "../Select/Select";
import Weather from "../Weather/Weather";
import { useTheme } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

function Container() {
  const { theme, setTheme } = useTheme();

  const darkMode = () => {
    if (theme !== "dark") {
      setTheme("dark");
      document.body.style.backgroundColor = "#0e1014";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#FFF";
    }
  };

  return (
    <div className={theme}>
      <div className="d-flex justify-content-center justify-content-md-end pt-4 px-5">
        <label>
          <input className="toggle" type="checkbox" onChange={darkMode}></input>
          <div className="toggle-design">
            <div className="toggle-sun">
              <FiSun className="sun-icon" />
            </div>
            <div className="toggle-button"></div>
            <div className="toggle-moon">
              <FiMoon className="moon-icon" />
            </div>
          </div>
        </label>
      </div>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center p-4">
          <Select />
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Container;
